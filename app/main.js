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
