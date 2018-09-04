module.exports = function(grunt) {  
  //配置参数  
  grunt.initConfig({  
    pkg: grunt.file.readJSON('package.json'),  

    watch: {
      js: {
        files:['src/**/*.js'],
        tasks:['default'],
        options: {livereload:true}
      }
    },

    // grunt-contrib-copy
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dist/',
        // options: {
        //   process: function (content, srcpath) { //修改文件内容
        //     return content.replace(/[sad ]/g, "_");
        //   }
        // },
        // flatten: true, //将所有子目录文件都拷贝到同一级
        // filter: 'isFile', //过滤器，只拷贝文件

      },
    },
    
    babel: {
      options: {
        sourceMap: false,
        presets: ['env']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/', //js目录下
          src: ['**/*.js'], //所有js文件
          dest: 'dist/'  //输出到此目录下
        }] 
      }
    },

    uglify: {
      options: {
        mangle: true, //混淆变量名,只混淆局部变量名
        comments: 'false' //false（删除全部注释），some（保留@preserve @license @cc_on等注释）
      },  
      my_target: {
        files: [{
          expand:true,
          cwd:'dist/', //js目录下
          src:['**/*.js'], //所有js文件
          dest:'dist/'  //输出到此目录下
        }] 
      } 
    }
  });  
  
  //载入uglify插件，压缩js 
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  //注册任务  
  grunt.registerTask('default', ['copy','babel','uglify']);
  grunt.registerTask('watcher',['watch']);
}  