define('collections/listCollection',
		[
			'backbone', 
			'models/itemModel'
		], function(Backbone, ItemModel) {
	
	'use strict';

	return Backbone.Collection.extend({
		url: 'data.json',
		model: ItemModel,

		parse: function(response, options) {
			return response.data;
		},

		filter: function(type) {
			this.models = _(this.models).sortBy(function(model) {
				return model.get(type);
			});
		}
	});
});