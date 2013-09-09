
module.exports = function(grunt) {
  
  "use strict";

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      sourse: {
        src: ['src/talking-image.js']
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['libs/jdataview/src/jdataview.js', 'libs/jbinary/src/jbinary.js', 'src/talking-image.js'],
        dest: 'build/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.title %> v<%= pkg.version %> by <%= pkg.author %>. Built on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['concat', 'uglify']);

};
