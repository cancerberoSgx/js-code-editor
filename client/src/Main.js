
define('Main', ['Application'], function(Application) {
	return function(){
		// var ns = jsCodeEditor;
		var application = new Application();
		application.start(function(){
			var dropZone = document.querySelector('[dropzone]');
			application.folderDDManager.install(dropZone); 
		});
	};
});
