define('views/headerView',
		[
			'marionette', 
			'handlebars', 
			'text!templates/header.hbs'
		], function (Marionette, Handlebars, template) {

	'use strict';

	return Marionette.ItemView.extend({
		template: Handlebars.compile(template)
	});
});