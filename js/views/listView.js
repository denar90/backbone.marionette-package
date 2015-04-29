define(['app',
		'marionette',
		'handlebars',
		'views/itemView',
		'text!templates/list.html'], function(app, Marionette, Handlebars, ItemView, template) {
		
	"use strict";
	return Marionette.CompositeView.extend({
		template: Handlebars.compile(template),
		childView: ItemView,
		className: 'row'
	});
});