define(['app',
		'marionette',
		'handlebars',
		'text!templates/footer.html'], function (app, Marionette, Handlebars, template) {

	"use strict";

	return Marionette.ItemView.extend({
		template: Handlebars.compile(template),
		className: 'footer',

		ui: {
			button: '.js-get-more-data'
		},

		events: {
			'click @ui.button': 'getMoreData'
		},

		getMoreData: function() {
			app.trigger('app.getMoreData');
		}
	});
});