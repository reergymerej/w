define([
	'models/ServletInfo'
], function(
	ServletInfo
){
	var ServletInfoCollection = Backbone.Collection.extend({
		model: ServletInfo,
		comparator: function(servlet){
			return servlet.get('name');
		}
	});

	// normally this is what we would return
	// return ServletInfoCollection;

	var servlets = new ServletInfoCollection();

	servlets.add({
		name: 'CelerantIndexServlet.do',
		purpose: 'n/a'
	});
	servlets.add({
		name: 'ClearAllCacheServlet.do',
		purpose: 'kill session, redirect to main'
	});
	servlets.add({
		name: 'DetailScreenJsonServlet.do',
		purpose: 'get initial tables for Detail Screen'
	});
	servlets.add({
		name: 'ListScreenActionDispatcherServlet.do',
		purpose: 'search'
	});
	servlets.add({
		name: 'ListScreenDispatcher.do',
		purpose: 'get html for List Screen'
	});
	servlets.add({
		name: 'RetrievalCachedDropDownDataServlet.do',
		purpose: 'get options from app cache'
	});
	servlets.add({
		name: 'SettingsServlet.do',
		purpose: 'n/a'
	});
	servlets.add({
		name: 'UserAuthenticationServlet.do',
		purpose: 'validate login'
	});
	servlets.add({
		name: 'WPOSLogoutServlet.do',
		purpose: 'kill session, redirect to main'
	});
	servlets.add({
		name: 'WPOSNavJsonServlet.do',
		purpose: 'get "right-nav" buttons and "transaction buttons"'
	});
	servlets.add({
		name: 'WPOSSavingSaleServlet.do',
		purpose: 'save a receipt'
	});
	servlets.add({
		name: 'WPOSScreenJsonServlet.do',
		purpose: 'get initial tables for POS Screen'
	});
	servlets.add({
		name: 'POSLookupServlet.do',
		purpose: 'used for lookups'
	});
	
	return {
		servlets: servlets
	};
});