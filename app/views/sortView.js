define(['app',
		'marionette',
		'handlebars',
		'text!templates/sort.hbs'], function(app, Marionette, Handlebars, template) {
		
	"use strict";

	return Marionette.CompositeView.extend({
		template: Handlebars.compile(template),

		ui: {
			button: '.js-sort-data'
		},
		events: {
			'click @ui.button': 'sortData'
		},

		sortData: function(event) {
			app.trigger('app.sortData', {sortType: $(event.target).data().sort});
		}
	});
});