/* global describe it cy beforeEach require afterEach */

var helper = require('../../common/helper');
var calcHelper = require('../../common/calc_helper');

describe('Calc sidebar dialog image caching', function() {
	var testFileName = 'many-sizes.ods';

	beforeEach(function() {
		helper.beforeAll(testFileName, 'calc');

		// Wait until the Formula-Bar is loaded.
		cy.get('.inputbar_container', {timeout : 10000});
	});

	afterEach(function() {
		helper.afterAll(testFileName, this.currentTest.state);
	});

	it('Sidebar image caching', function() {

		// Just go through the cells A1:30. Each cell has a
		// different font size. This will exercise the caching
		// of the tunnelled dialog images for the siderbar.
		calcHelper.clickOnFirstCell();

		for (var i = 0; i < 30; i++) {
			helper.typeIntoDocument('{enter}');
		}
	});
});
