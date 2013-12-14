define('Application', ['FolderDDManager', 'LayoutView', 'backbone', 'bootstrap'], 
	function(FolderDDManager, LayoutView) {

	/**
	@class Application
	*/
	var Application=function(){
	}; 

	// debugger;
	var proto = Application.prototype;
	/**
	@method start
	*/
	proto.start = function(handler) {
		/** the template function global dictionary
		@property template {Object string->function}
		*/
		this.template = jsCodeEditor.template;
		/** the application layout view
		@property layout {LayoutView}
		*/
		this.layout = new LayoutView({application: this});
		this.layout.render();
		jQuery(document.body).empty().append(this.layout.$el);

		// var layoutHtml = this.template.Layout();
		// var main = jQuery('<div class="main"></div>'); 
		// jQuery(document.body).append(main); 
		// document.body.innerHTML=layoutHtml; 

		/**
		@property folderDDManager {FolderDDManager}
		*/
		this.folderDDManager = new FolderDDManager();

		if(handler){
			handler.apply(this, arguments); 
		}
	}; 
	return Application;
});
