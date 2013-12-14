define('Application', ['FolderDDManager', 'LayoutView', 'html-templates', 'backbone', 'bootstrap'], 
	function(FolderDDManager, LayoutView) {

	/**
	@class Application
	*/
	var Application=function(){
	}; 

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
