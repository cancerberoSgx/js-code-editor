/**
@class LayoutView
*/

define('LayoutView', ['BaseView'], function(BaseView) {	
	// var makeClassExtension(baseClass, function()
	var LayoutView = function(){		
		BaseView.apply(this, arguments); 
	}; 
	LayoutView.prototype = new BaseView();
	_.extend(BaseView.prototype, {
		template: 'Layout'
	});
	return LayoutView; 
});