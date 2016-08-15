//listRosterBatch.js
;(function($){
	'use strict'; 
        add();
        cancel();
        $('#downLoad').dataTable( {
            dom:
                "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                "<'row'<'col-sm-12 table-responsive'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",

            "language":{
                "search": "过滤:",
                "lengthMenu": "每页显示 _MENU_ 条记录",
                "zeroRecords": "暂无数据 - 报歉啦?",
                "info": "显示 第 _PAGE_ 页 共 _PAGES_ 页",
                "infoEmpty": "暂无数据",
                "infoFiltered": "(筛选自 _MAX_ 条记录)",
                "paginate":{
                    "first":"首页",
                    "previous":"前一页",
                    "next":"后一页",
                    "last":"尾页"
                }
            }
        })
       // 表单验证
         function add(){
            $('[data-action="add"]').on('click', function(e) {
              $.ajax({
                  url: 'system/addTableFieldDef',
                  type: 'POST',
                  dataType: 'json',
              })
              .done(function() {
                  console.log("success");
              })
              $("#downLoadForm").formValidation({
                    err: {
                        container: 'tooltip'
                    },
                    icon: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        batchNumber: {
                            validators: {
                                notEmpty: {
                                    message: '请填写必填项'
                                }
                            }
                        },
                        jobpostFile: {
                            validators: {
                                notEmpty:{
                                    message: '请填写必填项'
                                }
                            }
                        }
                    }
            })    
            });
			$('[data-toggle="attachments"]').on('click', function(event){
                var getTarget = $(this).attr('data-target');
                var $modal = $(getTarget);
                var $uploadCompent = $modal.find('[data-toggle="upload:file"]');
                /*var $listAttachment = $('[data-list="attachments"] tbody');*/

                // init attachments list
                // init upload compent
                $uploadCompent.find(':file').on('change.file:selected', function(event){
                    var oEventTarget = $(this),
                    oFile = $(this).val(),
                /*    getFileType = $(this).attr('data-file-type'),*/
                    fileExt = oFile.substr(oFile.lastIndexOf(".")).toLowerCase(),
                    // $getThumbZone = $(this).parents('[data-toggle="upload:file"]').prev('a'),
                    // getTitle = $getThumbZone.attr('title'),
                    getTitle = '总体人员名单',
                    $getMsgCover = $(this).parents('[data-toggle="upload:file"]').siblings('.msg-cover');

                    oEventTarget.parents('[data-toggle="upload:file"]')
                    .find(':text').val( oFile );

                /**    $getMsgCover.css({
                        height: $getMsgCover.parent().height(),
                        lineHeight: $getMsgCover.parent().height()+'px',
                        width: $getMsgCover.parent().width(),
                        zIndex: 100
                    }).text(getTitle+'上传中...').show();**/
                    // upload file
                    var formData=new FormData();
                        formData.append('uploadFiles', $(this)[0].files[0]);
                        formData.append('personId', '${personId}');
                        //上传文件类型  需要将值设置在指定的上传文件表单中
                  /*      formData.append("fileType", getFileType);*/
                    
                  /*  var tmpl = [];
                    tmpl.push('<tr>');
                    tmpl.push('<td><a href="@imgUrl">@originName</a></td>');
                    tmpl.push('<td>@uploadDate</td>');
                    tmpl.push('<td>@uploader</td>');
                    tmpl.push('</tr>');
                    tmpl = tmpl.join('');*/
                  $.ajax({
                        url:  "employee/uploadSecurityFiles",
                        type: 'POST',
                        cache: false,
                        dataType: 'json',
                        data: formData,
                        processData: false,
                        contentType: false

                    })
                    .done(function(d){
                        if(d.success){
                           /* tmpl = tmpl.replace('@imgUrl', d.imgUrl)
                                .replace('@originName', oFile)
                                .replace('@uploadDate', 'Thornton')
                                .replace('@uploader', '@fat');
                            $listAttachment.append(tmpl);*/
                            
                            $getMsgCover.text(getTitle+'上传成功。');
                            setTimeout(function(){ $getMsgCover.hide(); }, 1500);
                        }else{
                            $getMsgCover.text(getTitle+'上传失败。');
                            setTimeout(function(){ $getMsgCover.hide(); }, 1500);
                        }

                    }); 

                });

                $uploadCompent.on('click', function(event){
                    $(this).find(':file').trigger('click.file:selected');
                });
                 
                $modal.modal('show');
            });
			$.ajax({
                url: 'system/addTableFieldDef',
                type: 'POST',
                dataType: 'json',
           		 })
	            .done(function(d) {
	                 console.log("success");
	            })
         }
         // 取消按钮
        function cancel(){
            $('[data-id="cancel"]').on('click', function(e) {
               $(e.target).parents('.modal').modal('hide');
            });
            $('[data-modal]').on('hide.bs.modal', function(e) {
                var getTargetClear = $(e.target).find('[data-target=clearHtml]');
                getTargetClear.empty();
            });
        }

})(jQuery)