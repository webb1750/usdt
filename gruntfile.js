module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        svgstore: {
            options: {
              prefix : 'shape-', // This will prefix each <g> ID
            },
            default : {
                files: {
                  'assets/img/svg-defs.svg': ['assets/img/*.svg'],
                }
              }
            }
      });
    
      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-svgstore');
      
      // Default task(s).
      grunt.registerTask('default', ['svgstore']);
    
    };