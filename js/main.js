require.config({
	paths: {
		'text': '../lib/text',
		'templates': '../templates',
		'models': 'models',
		'collections': 'collections',
		'views': 'views'
	},
	urlArgs: '_' + Date.now()
})

$(function(){
	require(['app'], function(App){
		App.initialize();
	});
});