define(['marionette', 'handlebars', 'views/headerView', 'views/footerView', 'text!templates/main.hbs'],
	function (Marionette, Handlebars, HeaderView, FooterView, mainTemplate) {

	"use strict";
	return Marionette.LayoutView.extend({
		template: Handlebars.compile(mainTemplate),

		regions: {
			header: '#header',
			main  : '#data',
			footer: '#footer'
		},

		onBeforeShow: function() {
			this.getRegion('header').show(new HeaderView());
			this.getRegion('footer').show(new FooterView());
		}
	});
});