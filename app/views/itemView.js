define('views/itemView',
		[
			'app',
			'marionette',
			'handlebars',
			'text!templates/item.hbs'
		], function(app, Marionette, Handlebars, itemTemplate) {
		
	'use strict';

	return Marionette.ItemView.extend({
		className: 'col-lg-4',
		template: function(serialized_model) {
			var template = Handlebars.compile(itemTemplate);
			return template(serialized_model);
		}
	});
});