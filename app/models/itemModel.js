define('models/itemModel', ['backbone'], function(Backbone) {
	
	'use strict';

	return Backbone.Model.extend({
		defaults: {
		    name: "",
		    age: null,
		    city: ""
		  }
	});
});