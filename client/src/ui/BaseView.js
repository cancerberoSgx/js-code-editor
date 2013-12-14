/**
 * extends Backbone.View render() for rendering the tempalte indicated by this.template property
 */
(function ()
{
	'use strict';
	
	_.extend(Backbone.View.prototype, {
		render: function () {
			this.undelegateEvents();
			(this.model || this.collection) && Backbone.Validation.bind(this);
			var tmpl = SC.template(this.template, {view: this});
			this.$el.html(tmpl);
			this.delegateEvents();
			return this;
		}
	});
})();