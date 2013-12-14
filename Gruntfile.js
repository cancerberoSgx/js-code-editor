//@author sgurin
module.exports = function(grunt) {

	//variables about source files: 
	
	var jsSrcFiles = [ //don't include template generated files in here.
		// 'client/src/require-config.js'
		'client/src/Main.js'
	,	'client/src/util/FolderDD.js'
	,	'client/src/Application.js'
	// ,	'client/src/Config.js'
	];
	
	// var jsLibFiles = [
	// 	'client/lib/underscore-min.js'
	// ,	'client/lib/require-min.js'
	// ,	'client/lib/backbone-min.js'
	// ,	'client/lib/jquery/jquery-2.0.3.min.js'
	// ,	'client/lib/bootstrap/js/bootstrap-min.js'
	// ]; 

	var templatesPath = [ 'client/src/ui/template/**/*.html' ]; 
	// var dependencies = ['sgxjseditors/lib/underscore-min.js', 
	//                     'sgxjseditors/test/jquery/jquery-2.0.3.min.js'
	//                     ]; 
	
	var jsSrcAndTemplates = jsSrcFiles.slice(0); //clone
	jsSrcAndTemplates.push('client/src/ui/template/output.js');
	// var templateJsOutput = 'client/src/ui/templates/output.js'; 

	// var jsAllSrcFiles = jsSrcFiles.concat(templateJsOutput);
	

	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json')

		,
		jshint : {
			all : jsSrcFiles

			,
			options : {
				"predef" : [ '_', 'console', 'define' ],
				"laxcomma" : true
			}
		}

		,
		requirejs: {
		  compile: {
		    options: {
		    	baseUrl: "client",		    	
		    	name: 'Main',
		    	mainConfigFile: "client/require-config.js",
		    	out: "client/build/js-code-editor-optimized.js"
		    }
		  }
		}

		,
		clean : [ 'build', 'client/src/ui/templates/output.js' ]

		,
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			// mangle: false
			}
			,
			templates : {
				files : {
					'client/build/templates.min.js': ['client/src/ui/template/output.js']
				}
			}
			// ,
			// main_target : {
			// 	files : {
			// 		'client/build/<%= pkg.name %>-all.min.js' : jsSrcAndTemplates
			// 	// ,	'client/build/templates.min.js': ['client/src/ui/template/output.js']
			// 	}
			// }
			// ,
			// libs : {
			// 	files : {
			// 		'client/build/libs-all.min.js' : jsLibFiles
			// 	}
			// }
		}
		
		,
		jst : {
			compile : {
				options : {
					processName : function(filename) {
						return filename.substring(filename
								.lastIndexOf('/') + 1, filename
								.lastIndexOf('.html'));
					},
					namespace : 'jsCodeEditor.template'
				},
				files : {
					'client/src/ui/template/output.js' : templatesPath //todo how to use variable here ? 
				}
			}
		}

		,
		yuidoc : {
			compileClient : {
				name : '<%= pkg.name %>'
			,	description : '<%= pkg.description %>'
			,	version : '<%= pkg.version %>'
			,	url : '<%= pkg.homepage %>'
			,	logo: '../logo96.png'

			,	options : {
					paths : 'client/src'
//					themedir : 'path/to/custom/theme/',//js-editors/node_modules/grunt-contrib-yuidoc/node_modules/yuidocjs/themes/default
				,	outdir : 'apidoc'
   				,	linkNatives: "true"
				}
			}
		}

		// https://github.com/gruntjs/grunt-contrib-connect
		//run 'grunt run' and a server will be started for easy testing the example (http://localhost:8080/sgxjseditors/test/sgxjseditors.html) or even the apidocs. Thanks to grunt-contrib-watch the templates and apidocs are compiled each time you save a file.  
		,
		connect : { 
			server : {
				options : {
					port : 8080
				,	base : '.'
				// ,	keepalive: true
				// ,	open: 'http://localhost:8080/client/index.html'
				}
			}
		}

		,
		watch : {
			templates : {
				files : templatesPath,
				tasks : [ 'jst' ]
			}

		,	
			apidoc : {
				files : jsSrcFiles,
				tasks : [ 'yuidoc' ]
			}
		},

		// jasmine : {
		// 	customTemplate : {
		// 		src : jsSrcFiles.concat(templatesJsOutput),
		// 		options : {
		// 			vendor : dependencies,
		// 			specs : 'sgxjseditors/spec/*spec.js',
		// 			keepRunner: true
		// 		}
		// 	}
		// }

		});
	

	
	/////TASK DEFINITIONS
	
	grunt.registerTask('default', [ 'clean', 'jshint', 'jst', 'uglify', 'requirejs' ]);
	grunt.registerTask('run', [ 'connect', 'watch' ]);
	grunt.registerTask('apidoc', [ 'clean', 'yuidoc' ]);
	
	grunt.registerTask('test', [ 'jasmine' ]);
	

};