module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    'watch': {
      scripts: {
        files: ['avatar.jsx', 'run.jsx'],
        tasks: ['build'],
        options: {
          spawn: false
        },
      },
    },
    'browserify': {
      dist: {
        files: {
          'bundle.js': ['run.jsx'],
        },
        options: {
          transform: ['reactify']
        }
      }
    },
    'gh-pages': {
        src: [
            'bundle.js', 'style.css', 'index.html'
        ]
    },
    'jshint': {
        all: [
            'avatar.jsx',
            'run.jsx',
            'Gruntfile.js'
        ],
        options: grunt.file.readJSON('.jshintrc')
    },
    'connect': {
      demo: {
        options: {
          open: true,
          keepalive: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build',  ['jshint','browserify']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('server', ['connect']);

};
