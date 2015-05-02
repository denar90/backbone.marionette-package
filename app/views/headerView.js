define(['marionette', 'handlebars', 'text!templates/header.html'], 
	function (Marionette, Handlebars, template) {

	"use strict";
	return Marionette.ItemView.extend({
		template: Handlebars.compile(template)
	});
});