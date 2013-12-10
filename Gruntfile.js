//@author sgurin
module.exports = function(grunt) {

	//variables about source files: 
	
	var jsSrcFiles = [ //don't include template generated files in here.
		'client/src/Main.js'
	,	'client/src/FolderDD.js'
	];
	
	var templatesPath = [ 'client/src/ui/template/**/*.html' ]; 
	// var dependencies = ['sgxjseditors/lib/underscore-min.js', 
	//                     'sgxjseditors/test/jquery/jquery-2.0.3.min.js'
	//                     ]; 
	
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
		clean : [ 'build', 'client/src/ui/templates/output.js' ]

		,
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			// mangle: false
			}
		
			,
			main_target : {
				files : {
					'client/build/<%= pkg.name %>-all.min.js' : [jsSrcFiles]
				,	'client/build/templates.min.js': ['client/src/ui/template/output.js']
				}
			}
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
	
	grunt.registerTask('default', [ 'clean', 'jshint', 'jst', 'uglify' ]);
	grunt.registerTask('run', [ 'connect', 'watch' ]);
	grunt.registerTask('apidoc', [ 'clean', 'yuidoc' ]);
	
	grunt.registerTask('test', [ 'jasmine' ]);
	

};