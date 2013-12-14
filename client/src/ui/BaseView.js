 /**
 the native Backbone.View, see backbonejs.org
 @class Backbone.View  
 */
 /**
 render() for rendering the tempalte indicated by this.template property
 @class BaseView
 @extend Backbone.View 
 */
define('BaseView', ['backbone'], function() {	
	var BaseView = function(){
		Backbone.View.apply(this, arguments);
		var self = this;
		if(arguments.length>0 &&  _(arguments[0]).isObject()) {
			_(arguments[0]).each(function(val, key){
				self[key] = val; 
			}); 
		} 
	}; 
	BaseView.prototype = new Backbone.View();
	_.extend(BaseView.prototype, {
		/**
		implicit reference to the mother application. the instantiator is responsible of assigning ones
		@property application {Application}
		*/
		/**
		@method render
		*/
		render: function () {
			// this.undelegateEvents();
			this.renderTemplate(this.template, this, this.$el); 
			// this.delegateEvents();
			this.renderDataTemplates();
			return this;
		}
		/**
		@method renderTemplate
		@param context optional
		*/
	,	renderTemplate: function(templateName, view, targetEl, context) {		
			context = _.extend(context || {}, {view: view});
			// debugger;
			var tmpl = this.application.template[templateName](context);
			jQuery(targetEl).html(tmpl);
			// this.$el.html(tmpl);
		}
		/**
		@method renderDataTemplates
		*/
	,	renderDataTemplates: function(){
			var self = this;
			this.$el.find('[data-template]').each(function(){
				var templateName = jQuery(this).data('template');
				if(self.application.template[templateName]) {
					self.renderTemplate(templateName, self, jQuery(this)); 
				}//TODO: log template not found?
			}); 
		}
	});
	return BaseView;

});