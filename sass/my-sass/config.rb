require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"


#缓存文件生成设置
#cache=false设置sass编译成css文件时根目录会出现.sass-cache文件夹，要重启监听compass watch才奏效奥
cache=false

#在浏览器调试
sourcemap = true


# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
#输出样式output_style :expanded、:nested 、:compact、:compressed 
#默认的输出风格:expanded表示编译后保持原格式
#output_style = :compressed

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
#取消注释
line_comments = false



# To enable relative paths to assets via compass helper functions. Uncomment:
# 去掉relative_assets=true 让compass的辅助函数取相对路径
relative_assets = true




# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

#config.rb配置文件详解
#http://blog.csdn.net/qishuixian/article/details/54606436