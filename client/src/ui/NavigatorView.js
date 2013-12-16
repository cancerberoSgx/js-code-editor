/**
@class LayoutView
*/

define('NavigatorView', ['BaseView'], function(BaseView) {	
	// var makeClassExtension(baseClass, function()
	var NavigatorView = function(){		
		BaseView.apply(this, arguments); 
	}; 
	NavigatorView.prototype = new BaseView();
	_.extend(BaseView.prototype, {
		template: 'NavigatorView'
	});
	return NavigatorView; 
});