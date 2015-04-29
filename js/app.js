define(['marionette'], function(Marionette) {
	"use strict";

	var app = new Marionette.Application();

	//add regions
	app.addRegions({
		mainRegion: '#app'
	});

	return app;
});
