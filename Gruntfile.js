//Concatinate all third party libraries into one file.

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
        options: {
          separator: '\n',
        },
        css: {
            src: ['./src/assets/libs/codemirror/codemirror.css', './src/assets/libs/codemirror/addon/show-hint.css', './src/assets/libs/automizy/automizy-email-editor.css',
                './src/assets/libs/grapesJs/css/grapes.min.css', './src/assets/libs/grapesJs/css/grapes-email-preset.min.css'],
            dest: './src/assets/libs/workspace/libraries.css'
        },
        js: {
            src: [
                //codemirrror
                './src/assets/libs/codemirror/codemirror.js',
                //codemirror modes
                './src/assets/libs/codemirror/modes/xml.js', './src/assets/libs/codemirror/modes/javascript.js', './src/assets/libs/codemirror/modes/css.js', './src/assets/libs/codemirror/modes/htmlmixed.js',
                //codemirror addons
                './src/assets/libs/codemirror/addon/show-hint.js', './src/assets/libs/codemirror/addon/xml-hint.js', './src/assets/libs/codemirror/addon/html-hint.js',
                
            ],
            dest: './src/assets/libs/workspace/libraries.js'
        }
    },

    uglify: {
      build: {
          src: './src/assets/libs/workspace/libraries.js',
          dest: './src/assets/libs/workspace/libraries.min.js'
      }
    }
  });
    
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};