/*jshint laxcomma:true*/
require.config({
	baseUrl: ''
,	paths: {
		'jquery': 'lib/jquery/jquery-2.0.3.min'
	,	'backbone': 'lib/backbone-min'
	,	'underscore': 'lib/underscore-min'
	,	'bootstrap': 'lib/bootstrap/js/bootstrap.min'

	,	'Application': 'src/Application'
	,	'FolderDDManager': 'src/util/FolderDDManager'
	,	'Main': 'src/Main'

	,	'BaseView': 'src/ui/BaseView'
	,	'LayoutView': 'src/ui/LayoutView'
	}
,	shim: {
		'backbone': {
			deps: ['underscore','jquery']
		}
	,	'bootstrap': {
			deps: ['jquery']
		}

	// ,	'Main':{deps: ['Application']}
	// ,	'Application': {deps: ['FolderDD']}
	}
});