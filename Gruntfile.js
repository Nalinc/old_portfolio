var pkg = require('./package.json');
var bowerjson = require('./bower.json');

var dist = "dist/";
var source = "src/";

/*var distclient = dist + "public/";
var distserver = dist + "server/";
var srcclient = source + "public/";
var srcserver = source + "server/";
var distclientapp = distclient + "app/";*/

var port = process.env.PORT || 8080;

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
/*        turnOffPotatoDeclaration: {
            main: {
                expand: true,
                src: [
                    distclientapp + '*/**/*.js',
                    distclientapp + 'app.js'
                ]
            }
        },
        ngAnnotate: {
            main: {
                expand: true,
                src: [
                    distclientapp + '*/**/*.js',
                    distclientapp + 'app.js'
                ],
                ext: '.js', // Dest filepaths will have this extension.
                extDot: 'last'
            }
        },
        turnOnPotatoDeclaration: {
            main: {
                expand: true,
                src: [
                    distclientapp + '*/**/*.js',
                    distclientapp + 'app.js'
                ]
            }
        },
        html2js: {
            options: {
                base: distclient,
                module: 'smart-templates',
                singleModule: true
            },
            main: {
                src: [distclientapp + '**\/*.tpl.html'],
                dest: distclientapp + 'smart-templates.js'
            }
        },
        addIncludes:{
            options:{
                appFile: distclientapp + 'app.js',
                includesFile: distclientapp + 'main.js'
            },
            templates:{
                options:{
                    angularModule: true,
                    wrapToDefine: true,
                    name: 'smart-templates',
                    injectToApp: true
                },
                src: [
                    distclientapp + 'smart-templates.js'
                ]
            }
        },*/
        uglify: {
            main: {
                expand: true,
                cwd: distclientapp,
                src: [
                    '**/*.js'
                ],
                dest: distclientapp,
                ext: '.js'
            },
            components: {
                expand: true,
                cwd: "bower_components",
                src: [
                    'requirejs/require.js'
                ],
                dest: "bower_components",
                ext: '.min.js'
            }
        },
        concat: {
            css:{
                files: [{
                    dest: distclient + 'styles/main.css',
                    src : [ distclient + 'styles/custom.css',
                            distclient + 'styles/markdown.css', 
                            distclient + 'styles/courseware.css',
                          'bower_components/libs-frontend-ebook/dist/epubreader-all.css',
                          'bower_components/video.js/dist/video-js/video-js.css',
                          'bower_components/libs-frontend-pythoneditor/dist/css/pythonEditor.min.css']
                }]
            }
        },
        clean: {              
            dist: {               
                src: [
                    dist
                ]
            },
            bower: {
               src: "bower_components"
            },
            tmp: {                               
                files: [
                        {
                            expand: true,
                            cwd: distclient,
                            src: [
                                'app.config.js',
                                'app/**/*.js',
                                'app/**/*.tpl.html',
                                '!app/main.js',
                                '!app/layout/main.js',
                                '!app/modules/course/main.js',
                                '!app/modules/course-teacher/main.js',
                                '!app/modules/course-student/main.js',                                
                                '!app/rconfig.js'
                            ]
                        }
                ]    
            }
        },
        copy: {           
            dist: {
                files: [
                        {
                            expand: true,
                            cwd: source,
                            src: [
                                '**/*',
                                '!**/*.less',
                                '../bower_components/video.js/dist/video-js/font'
                            ],
                            dest: dist
                        },
                        {
                            expand: true,
                            flatten:true,                            
                            src: [
                                'bower_components/video.js/dist/video-js/font/**/*.*'
                            ],
                            dest: distclient + "styles/font" 
                        }
                ]
                
            }     
            
        },
        requirejs: {
            app: {
                options: {
                    baseUrl: distclientapp,
                    mainConfigFile: distclientapp + 'rconfig.js',
                    name: "main",
                    optimize: 'none',                  
                    out: distclientapp + 'main.js',
                    done: function (done, output) {
                        console.log('Done requirejs for main.js');
                        done();
                    }
                }
            },
            layout: {
                options: {
                    baseUrl: distclientapp,
                    mainConfigFile: distclientapp + 'rconfig.js',
                    name: "layout/main", 
                    exclude:['layout/module','modules/classlist/module'],                   
                    optimize: 'none',                  
                    out: distclientapp + "layout/main.js",
                    done: function (done, output) {
                        console.log('Done requirejs for layout/main.js');
                        done();
                    }
                }
            },
            course: {
                options: {
                    baseUrl: distclientapp,
                    mainConfigFile: distclientapp + 'rconfig.js',
                    name: "modules/course/main", 
                    exclude:['layout/module','widget-module','lodash','modules/course/module'],                                      
                    optimize: 'none',                  
                    out: distclientapp + "modules/course/main.js",
                    done: function (done, output) {
                        console.log('Done requirejs for modules/course/main.js');
                        done();
                    }
                }
            },
            courseStudent: {
                options: {
                    baseUrl: distclientapp,
                    mainConfigFile: distclientapp + 'rconfig.js',
                    name: "modules/course-student/main", 
                    exclude:['modules/course-student/module','modules/course-take/module','modules/course-view/module'],                                      
                    optimize: 'none',                  
                    out: distclientapp + "modules/course-student/main.js",
                    done: function (done, output) {
                        console.log('Done requirejs for modules/course-student/main.js');
                        done();
                    }
                }
            },
            courseTeacher: {
                options: {
                    baseUrl: distclientapp,
                    mainConfigFile: distclientapp + 'rconfig.js',
                    name: "modules/course-teacher/main", 
                    exclude:['modules/course-teacher/module'],                                      
                    optimize: 'none',                  
                    out: distclientapp + "modules/course-teacher/main.js",
                    done: function (done, output) {
                        console.log('Done requirejs for modules/course-teacher/main.js');
                        done();
                    }
                }
            }
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: distclient + 'styles',
              src: ['*.css'],
              dest: distclient + 'styles',
              ext: '.css'
            }],
            options: {
              shorthandCompacting: false,
              roundingPrecision: -1
            }
          }
        },
        dlsVersion:{
            options:{
                index: distclient + 'index.html',
                src : [distclientapp + '**/*.js',distclient + 'styles/**/*.css'],
                css : ['main.css'],
                requireJs:{
                    updateRequireModules:true,
                    datamain :'app/main',
                    rconfigJs : 'app/rconfig.js'
                }
            }    
        },
        less:{
            main :{
                options: {
                    compress: false
                },
                files:[{
                        dest: distclient + 'styles/custom.css', 
                        src : srcclient + 'styles/custom.less'
                    },
                    {
                        dest: distclient + 'styles/markdown.css', 
                        src : srcclient + 'styles/markdown.less'
                    },
                    {
                        dest: distclient + 'styles/courseware.css', 
                        src : srcclient + 'styles/courseware.less'
                    }]
                }
        },
        useminPrepare: {
            html: srcclient + 'index.html'
        },
        // Performs rewrites based on useminPrepare configuration
        usemin: {
            html: [distclient + 'index.html']
        },
        bower: {
            install: {
              options: { 
                verbose: true,
                copy:false
              }             
            }
        },
        express: { 
            options: {
                port: port,
            },  
            uncompress: {
              options: {
                script: srcserver + 'index.js'
              }
            },
            compress: {
              options: {
                script: distserver + 'index.js'
              }
            }
        },
        watch:{ 
           options : {
                spawn:false
           },
           files: [srcserver + '**/*.*' , 'node_modules/module-app-base/**/*.*'],
           tasks:'express:uncompress'
        },
        replace: {
            less:{
              src: [distclient + 'index.html'],
              overwrite : true,
              replacements: [
                {
                  from: '<script src="bower_components/less/dist/less.min.js"></script>',
                  to: ''
                },
                {
                    from: '<link rel="stylesheet" type="text/less" media="screen" href="styles/custom.less"/>',
                    to: ''
                },
                {
                    from: '<link rel="stylesheet" type="text/less" media="screen" href="styles/markdown.less"/>',
                    to: ''
                },
                {
                    from: '<link rel="stylesheet" type="text/less" media="screen" href="styles/courseware.less"/>',
                    to: ''
                }
              ]
            },
            components:{
              src: [distclient + 'index.html'],
              overwrite : true,
              replacements: [
                {
                  from: 'libs-frontend-core.css',
                  to: 'libs-frontend-core-min-'+libsCoreVersion+'.css'
                },
                {
                  from: 'require.js',
                  to: 'require.min.js'
                }
                                
              ]
            }
        },
        cleanempty: {	   
    	    src: [distclientapp + '**/*'],
      	},
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:[{
                    expand: true,
                    cwd: distclient, 
                    src : ['**/*.html',
                           '!epub_content/**/*.html'],     
                    dest :  distclient
                }]
            }
        }

    });

    //Load grunt Tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-express-server');  
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');  
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-cleanempty');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');  
    grunt.loadNpmTasks('grunt-contrib-concat');  
    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadTasks('tasks');   

    //Default grunt task
    grunt.registerTask('build', [
        'clean:bower',
        'bower:install',  
        'clean:dist', 
        'copy:dist',       
        'turnOffPotatoDeclaration',
        'ngAnnotate',
        'turnOnPotatoDeclaration',        
        'html2js',
        'addIncludes', 
        'requirejs',
        'less', 
        'clean:tmp',
        'cleanempty',
        'concat:css', 
        'uglify',       
        'cssmin',
        'useminPrepare',
        'usemin',
        'replace',
        'htmlmin',
        'dlsVersion'
    ]);

    grunt.registerTask('express-keepalive', 'Keep grunt running', function(target) {
        this.async();       
    });
    
    //This task is meant for DEVELOPMENT (Not to be used in Production)
    grunt.registerTask('serve', function (target) {
        process.env.NODE_ENV = 'development';
        /****
        * compressed mode
        * No watches in this mode. If any file changes, we need to 
        * manually rebuild and restart the server.
        **/
        if(target === 'compress'){
            process.env.DLS_UNCOMPRESSED_MODE = false;
            grunt.task.run([
                'build',
                'express:compress',
                'express-keepalive'
            ]);
        }
        /****
        * uncompressed mode
        * Watches for changes in src/server, node_modules/module_app_base
        * folders. If any file changes, restarts the server automatically.
        **/
        process.env.DLS_UNCOMPRESSED_MODE = true;
        grunt.task.run([
            'clean:bower',
            'bower:install',
            'express:uncompress',
            'watch'
        ]);
    });

    //Task to run app on heroku servers
    grunt.registerTask('heroku','Runs the app in the compressed/uncompressed mode based on env variable', function() {
        var build_mode = process.env.DLS_UNCOMPRESSED_MODE;
        if(!build_mode){
            grunt.task.run([
                'express:compress',
                'express-keepalive'
            ]);
        } else{
            grunt.task.run([
                'express:uncompress',
                'express-keepalive'
            ]);
        }
    });

    grunt.registerTask('default', ['build']);   

};