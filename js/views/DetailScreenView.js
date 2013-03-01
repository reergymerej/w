define([
	'text!templates/detailScreen.html'
], function(
	detailScreenTemplate
){

	var View = Backbone.View.extend({
		initialize: function(){
		},
		render: function(){
			var template = _.template( detailScreenTemplate, {} );
			this.$el.html(template);
		}
	});

	return View;
});