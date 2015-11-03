var should = chai.should();
var expect = chai.expect;

var app = {};
var itemModel = {};
require(['models/itemModel'], function(model) { itemModel = model;});
var itemView = {};
require(['views/itemView'], function(view) { itemView = view;});

describe("Application", function() {
	it("should app be present", function() {
		should.exist(app);
	})
})

describe("Item model", function() {
	beforeEach(function() {
		this.app = new itemModel();
	})
	it("should default name to be an empty string",function() {
		this.app.get('name').should.equal("");
	})
	it("should default age to be a null",function() {
		expect(this.app.get('age')).to.be.null;
	})
	it("should default city to be an empty string",function() {
		this.app.get('city').should.equal("");
	})
})

describe("Todo List Item View", function() {
	beforeEach(function(){
		this.app = new itemModel({
			name: 'Lorem Ipsum',
			age: '20',
			city: 'NY'
		});
		this.item = new itemView({model: this.app});
	})
	it('render() should return the view object', function() {
		this.item.render().should.equal(this.item);
	})
	it('should render item with class', function() {
		this.item.render().el.className.should.equal('col-lg-4');
	})
	describe("Template", function() {
		beforeEach(function() {
			this.item.render();
		})
		it('should contain placeholder image class', function() {
			this.item.$el.find('img').attr('class').should.equal('img-circle');
		})
		it('should contain name as text', function() {
			this.item.$el.find('.js-name').text().should.have.string('Lorem Ipsum');
		})
		it('should contain age as text', function() {
			this.item.$el.find('.js-age').text().should.have.string('20');
		})
		it('should contain city as text', function() {
			this.item.$el.find('.js-city').text().should.have.string('NY');
		})
	})
})
//@todo more tests

