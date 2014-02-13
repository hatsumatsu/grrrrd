module.exports = function(grunt){

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		less: {
		  development: {
		    files: {
		      "grrrrd.css": "grrrrd.less",
		      "demo/style.css": "demo/style.less",
		    }
		  }
		},

		autoprefixer: {
			styles: {
				src: ["*.css","demo/*.css"]
			},
			options: {
				browsers: "> 1%"
			}
		},

		watch: {
		    css: {
		        files: ['**/*.less'],
		        tasks: ['buildcss']
		    }
		}

    });

    grunt.registerTask('default', ['build']);
	grunt.registerTask('buildcss', ['less','autoprefixer']);
	grunt.registerTask('build', ['buildcss']);
};