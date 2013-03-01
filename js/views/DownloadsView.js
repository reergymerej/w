define([
	'text!templates/downloads.html'
], function(
	downloadsTemplate
){

	var View = Backbone.View.extend({
		initialize: function(){
		},
		render: function(){
			var template = _.template( downloadsTemplate, {} );
			this.$el.html(template);
		}
	});

	return View;
});