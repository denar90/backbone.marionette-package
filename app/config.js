require.config({
	baseUrl: 'app',
	paths : {
		requirejs : '../vendor/requirejs/require',
		underscore : '../vendor/underscore/underscore',
		backbone   : '../vendor/backbone/backbone',
		marionette : '../vendor/marionette/lib/backbone.marionette',
		jquery     : '../vendor/jquery/dist/jquery',
		handlebars : '../vendor/handlebars/handlebars',
		text       : '../vendor/requirejs-text/text'
	},
	shim : {
		underscore: {
			exports : '_'
		},
		backbone: {
			exports: 'Backbone',
			deps: ['jquery','underscore', 'requirejs']
		},
		marionette: {
			exports : 'Backbone.Marionette',
			deps : ['backbone']
		}
	},
	deps : ['jquery','underscore']
});