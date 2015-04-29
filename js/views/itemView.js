define(['app',
		'marionette',
		'handlebars',
		'text!templates/item.html'], function(app, Marionette, Handlebars, itemTemplate) {
		
	"use strict";
	return Marionette.ItemView.extend({
		className: 'col-lg-4',
		template: function(serialized_model) {
			var template = Handlebars.compile(itemTemplate);
			return template(serialized_model);
		}
	});
});