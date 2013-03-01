define([
	'text!templates/links.html'
], function(
	linksTemplate
){

	var View = Backbone.View.extend({
		initialize: function(){
		},
		render: function(){
			var template = _.template( linksTemplate, {} );
			this.$el.html(template);
		}
	});

	return View;
});