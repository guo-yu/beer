module.exports = function(grunt) {
  // init configs
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          strictImports: false,
          syncImport: true
        },
        files: {
          'build/beer.css': 'src/less/beer.less'
        }
      },
      production: {
        options: {
          strictImports: false,
          syncImport: true,
          yuicompress: true,
          cleancss: true
        },
        files: {
          'build/beer.min.css': 'src/less/beer.less'
        }
      },
    },
    autoprefixer: {
      min: {
        src: 'build/beer.min.css'
      },
      src: {
        src: 'build/beer.css'
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // sign tasks
  grunt.registerTask('default', ['less:development','autoprefixer:src']);
  grunt.registerTask('production', ['less:production','autoprefixer:min']);
}