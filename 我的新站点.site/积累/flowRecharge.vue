<template>
    <section>
        <header_sub tip="流量充值"  >
            <span slot="text">流量充值</span>
        </header_sub>
        <section class="mui-content " id="m2">
            <div class="mobile">
              <input type="" name="" v-model='mobile' maxlength="11" placeholder="请输入流量号码">
            </div> 
            <div class="select-chose">
              <span>充流量</span>
              <div class="chose" :class="{'enabled':enabled}">
                 <div >
                   <p>30M</p>
                   <p>售价：29.5元</p>
                 </div>
                  <div>
                   <p>50M</p>
                   <p>售价：29.5元</p>
                 </div>
                 <div>
                   <p>100M</p>
                   <p>售价：29.5元</p>
                 </div>
                 <div >
                   <p>200M</p>
                   <p>售价：29.5元</p>
                 </div>
                 <div >
                   <p>300M</p>
                   <p>售价：29.5元</p>
                 </div>
                 <div >
                   <p>500M</p>
                   <p>售价：29.5元</p>
                 </div>

              </div>
            </div>
        </section>

        <div class="footer">
          <span>充值记录</span>
        </div>
    </section>
</template>

<script>
    import header_sub from '../../components/header_sub.vue'
    import {qlObj} from '../../commonjs/common.js'

    export default {
        name: 'mui',
        data () {
            return {
                mobile:'',
                enabled:false,
            }
        },

        watch:{
          mobile:function (val) {
             this.mobile=this.mobile.replace(/[^\d]/g,'');
             if (this.mobile.length==11) {
              if(!this.validatePhone()){
                mui.toast('不支持该号码充值');
                this.enabled=false;
               }else{
                //点亮充值区
                this.enabled=true;


               }
            }else{
              this.enabled=false;
            }
        },
      },
        components: {
            'header_sub': header_sub,
        },
        mounted () {

        },
        created: function () {

        },
        methods: {

          //手机号验证
          validatePhone: function() {
            let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|145|147)+\d{8})$/;
             
            if(!reg.test(this.mobile)) {
              
              return false;
            }
            
            //   //校验是否在服务范围内...use Ajax?
            // if (true) {}{
           

            //   //.......

            //   return false;
            // }
            return true;
          },

        }
    }
</script>

<style scoped>
    .child-view {
        transition: none !important;
        position: static;
    }

  .mui-content{
    background: #fff;
  }
  ::-webkit-input-placeholder  { /* WebKit browsers */
    color: #ccccce; 
  }

  :-moz-placeholder  { /* WebKit browsers */
    color: #ccccce; 
  }

  
  :-ms-input-placeholder { /* WebKit browsers */
    color: #ccccce; 
  }
    
  .mobile{
    background:#fff url(../../image/lifeServices/_e-icons_tongxunlu.png) no-repeat scroll right .65rem top 50% / .5rem;
    height: 1.5rem;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;   
    padding-left: .3rem; 
  }

  .mobile input{
    color: #33333e;
    height: 100%;
    display: inline-block;
    width: 70%;
    border: 0;
    user-select: auto;
    line-height: 1.4;

     font-size: 1.3125em;
    letter-spacing: .06em;
  }
     

 /*<div class="select-chose">
              <span>充流量</span>
              <div class="chose">
                 <div>
                   <p>30M</p>
                   <p>售价：29.5元</p>
                 </div>
              </div>
            </div>*/
     
  .select-chose{
    padding: .5rem .3rem .3rem .3rem;

  }

  .select-chose >span{
    margin-bottom: .3rem;
    font-size: 1em;
    line-height: 1.25;
    letter-spacing: .05em;
    text-align: left;
    color: #33333e;
    
  }

  .select-chose .chose{
    overflow: hidden;
    margin-top: .2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

   .select-chose .chose>div{
      /*float: left;*/
      border-radius: 4px;
      background-color:#ddd;
      border: solid 1px #ddd;
      width: 2.16rem;
      height: 1.2rem;
      margin-top: .1rem;
      margin-bottom: .1rem;
      text-align: center;
   }

   .select-chose .enabled>div{
     background-color: #fff7f7;
     border-color:#ff0000;
   }
    
      

   /*.select-chose .chose>div+div:not(.mf){
      margin-left: .2rem;
   }*/


   .select-chose .chose>div+div.mt{
      margin-top: .22rem;
   }

   .select-chose .chose>div p {
      margin: .2rem 0 .2rem 0;
      font-size: 1.125em;
      /*font-weight: 600;*/
      letter-spacing: .056em;
      color: #f14444;
      line-height: 1;

   }

   .select-chose .chose>div p:last-child {
      margin: 0;
      font-size: .75em;
      font-weight: normal;
      letter-spacing: -.0018em;

   }

   .footer{
      width: 3.2rem;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0.5rem;
      text-align: center;

   }

   .footer::before{
      content: '';
      position: absolute;
      background: #cdcdcd;
      width: 100%;
      height: 1px;
      top: 50%;
      z-index: 100;
      left: 0;
      
   }

   .footer span{
      position: relative;
      z-index: 200;
      background: #F5F5F6;
      display: inline-block;
      padding: 0 .2rem;
      font-size: .75em;
      line-height: 1.67;
      letter-spacing: .0375em;
      text-align: left;
      color: #f14444;
   }


</style>