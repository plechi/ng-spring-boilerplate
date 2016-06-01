
module.exports = function (grunt) {

    grunt.registerTask('bower_install', 'install the backend and frontend dependencies', function() {
        var exec = require('child_process').exec;
        var cb = this.async();
        exec('bower install', {cwd: './'}, function(err, stdout, stderr) {
            console.log(stdout);
            cb();
        });
    });


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower_concat: {
            default: {
                dest: 'target/javascript/libraries.js',
                cssDest: 'src/main/less/bower.less',
                dependencies: {
                    'angular': 'jquery'
                },
                bowerOptions: {
                    relative: false
                }
            }
        },

        concat: {
            default: {
                src: ['target/javascript/libraries.js', 'src/main/javascript/**/*.js'],
                dest: 'src/main/webapp/js/app.min.js'
            },
        },
        
        less: {
            all: {
                options: {
                    paths: ["src/main/less/"]
                },
                files: {
                    "src/main/webapp/js/style.css": "src/main/less/style.less"
                }
            }
        },

        watch: {
            default: {
                files: ['src/main/javascript/**/*.js','src/main/javascript/**/*.js','src/main/less/**/*.less'],
                tasks: ['concat', 'less']
            }
        }
    });
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['bower_install','bower_concat','concat','less']);
};