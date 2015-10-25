define('controllers/MainController',
		[
			'app',
			'marionette',
			'collections/listCollection',
			'views/listView',
			'views/sortView',
			'layout/layout'
		], function(app, Marionette, ListCollection, ListView, SortView,  AppLayout) {

	'use strict';

	return Marionette.Object.extend({
		layout: null,
		listCollection: null,

		initialize: function() {
			var self = this;

			this.layout = new AppLayout();
			app.mainRegion.show(this.layout);

			app.on('app.getMoreData', function() {
				var listCollection = new ListCollection();
				listCollection.fetch({
					success : function(collection, response, options) {
						var listView = new ListView({
							collection: collection
						});
						//@todo make this code works
						console.warn('@TODO make attachView works');
						self.layout.getRegion('main').attachView(listView);
					},
					error: function() {
						console.warn('Some error happened during getting data from collection');
					}
				});
			});

			app.on('app.sortData', function(data) {
				self.listCollection.filter(data.sortType);
				var listView = new ListView({
					collection: self.listCollection
				});
				self.layout.getRegion('main').show(listView);
			});

		},

		home: function() {
			var self = this;
			self.listCollection = new ListCollection();

			self.listCollection.fetch({
				success : function(collection, response, options) {
					var listView = new ListView({ collection: collection });
					self.layout.getRegion('main').show(listView);
					self.layout.addRegion('sort', '#sorting');
					self.layout.getRegion('sort').show(new SortView());
				},
				error: function() {
					console.warn('Some error happened during getting data from collection');
				}
			});
		}
	});
});