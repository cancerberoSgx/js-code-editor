
define('Application', ['FolderDDManager', 'backbone', 'bootstrap'], function(FolderDDManager) {

	/**
	Main Namespace jsCodeEditor. You can access all the classes from here
	@class jsCodeEditor 
	*/
	// window.jsCodeEditor = {}; 

	// var ns = window.jsCodeEditor; 
	/**
	@class Application
	*/
	var Application=function(){

	}; 
	Application.template=jsCodeEditor.template;
	// debugger;
	var proto = Application.prototype;
	/**
	@method start
	*/
	proto.start = function(handler) {
		var layoutHtml = Application.template.Layout();
		// var main = jQuery('<div class="main"></div>'); 
		// jQuery(document.body).append(main); 
		document.body.innerHTML=layoutHtml; 

		/**
		@property folderDDManager
		*/
		this.folderDDManager = new FolderDDManager();

		if(handler){
			handler.apply(this, arguments); 
		}
	}; 
	return Application;
});
