require.config({
	paths : {
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
			deps: ['jquery','underscore']
		},
		marionette: {
			exports : 'Backbone.Marionette',
			deps : ['backbone']
		}
	},
	deps : ['jquery','underscore'],
	//for debugging uncomment this lines
	//waitSeconds: 15,
	//urlArgs: "bust=" + new Date().getTime()
});

define(['app',
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
