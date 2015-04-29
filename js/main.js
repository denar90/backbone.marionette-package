require.config({
	paths : {
		underscore : '../bower_components/underscore/underscore',
		backbone   : '../bower_components/backbone/backbone',
		marionette : '../bower_components/marionette/lib/backbone.marionette',
		jquery     : '../bower_components/jquery/dist/jquery',
		handlebars : '../bower_components/handlebars/handlebars',
		text       : '../bower_components/text/text'
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
