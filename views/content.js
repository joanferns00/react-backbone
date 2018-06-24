import $ from "jquery";
import _ from 'underscore';
import Backbone from 'backbone';

export default class Content extends Backbone.View {
	constructor(options) {
		super(options);
		this.options = options;
		
	}

	render() {
		$(this.options.el).append('<a href="#">content</a>');
		return this;
	}

	clickHandler() {
		console.log("click");
		return false;
	}
};