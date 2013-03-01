define([
	'views/GeneralInfoView',
	'views/LinksView',
	'views/DownloadsView',
	'views/POSView',
	'views/DetailScreenView'
], function(
	GeneralInfoView,
	LinksView,
	DownloadsView,
	POSView,
	DetailScreenView
){

	var currentView;

	var AppRouter = Backbone.Router.extend({
		routes: {
			'tab/:id': 'showTab',
			'*path': 'defaultRoute'
		},
		defaultRoute: function(path){
			console.log('yo');

			this.showTab('links');
		},
		showTab: function(id){

			var content = $('#content'),
				viewData = {
					el: content
				};

			content.empty();

			//	change active tab
			$('.navbar a').not('[href$="' + id + '"]').parent('li').removeClass('active');
			$('.navbar a[href$="' + id + '"]').parent('li').addClass('active');

			switch(id){
				case 'general':
					currentView = new GeneralInfoView(viewData);
					break;
				case 'links':
					currentView = new LinksView(viewData);
					break;
				case 'downloads':
					currentView = new DownloadsView(viewData);
					break;
				case 'pos':
					currentView = new POSView(viewData);
					break;
				case 'detail':
					currentView = new DetailScreenView(viewData);
					break;
				default:
					console.log('no view defined for ', id);
					return;
			};

			currentView.render();
		}
	});

	function initialize(){
		var router = new AppRouter();

		Backbone.history.start();

		$('.navbar a').click(function(){
			$(this).parent('li').addClass('active');
		});
	};

	return {
		initialize: initialize
	};
});