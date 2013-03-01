define([
	'text!templates/servlet-index.html',
	'collections/ServletInfoCollection'
], function(
	servletTemplate,
	servlets
){

	var View = Backbone.View.extend({
		initialize: function(){
			this.collection = servlets.servlets;
		},
		render: function(){
			var template = _.template( servletTemplate, {collection: this.collection.toJSON()} );
			this.$el.html(template);
		}
	});

	return View;
});