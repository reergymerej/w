define([
	'text!templates/pos.html'
], function(
	posTemplate
){

	var View = Backbone.View.extend({
		initialize: function(){
		},
		render: function(){
			var template = _.template( posTemplate, {} );
			this.$el.html(template);
		}
	});

	return View;
});