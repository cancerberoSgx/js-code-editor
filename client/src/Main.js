(function(){

	/**
	Main Namespace jsCodeEditor. You can access all the classes from here
	@class jsCodeEditor 
	*/
	window.jsCodeEditor = {}; 

	var ns = window.jsCodeEditor; 
	/**
	@class Application
	*/
	ns.Application=function(){

	}; 
	var proto = ns.Application.prototype;
	/**
	@method start
	*/
	proto.start = function(handler) {
		var layoutHtml = ns.template.Layout();
		// var main = jQuery('<div class="main"></div>'); 
		// jQuery(document.body).append(main); 
		document.body.innerHTML=layoutHtml; 

		/**
		@property folderDDManager
		*/
		this.folderDDManager = new ns.FolderDDManager();

		if(handler){
			handler.apply(this, arguments); 
		}
	}; 

})(); 