/*var path = '../node_modules/';
require.config({
	paths : {
		underscore : path + 'underscore/underscore',
		backbone   : path + 'backbone/backbone',
		marionette : path + 'backbone.marionette/lib/backbone.marionette.min',
		jquery     : path + 'jquery/dist/jquery',
		handlebars : path + 'handlebars/dist/handlebars.min',
		text       : path + 'requirejs-text/text'
	},
	shim : {
		underscore: {
			exports : '_'
		},
		backbone: {
			exports: 'Backbone',
			deps: ['jquery','underscore']
		},
		marionette: {
			exports : 'Backbone.Marionette',
			deps : ['backbone']
		}
	},
	deps : ['jquery','underscore']
});
*/
require(['app',
		'backbone',
		'routers/Router',
		'controllers/MainController'], function(app, Backbone, Router, Controller) {

	"use strict";
	app.start();
	new Router({
		controller: new Controller()
	});
	Backbone.history.start();
});
