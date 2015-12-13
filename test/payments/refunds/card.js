'use strict';

var _ = require('lodash');
var assert = require('chai').assert; //http://chaijs.com/api/assert/
var SecureNet = require('../../../index');
var example = require('../../example.data');
var api, customerId, transactionId;

describe('Payments/refund settled transaction to card', function() {

	//set the timeout
	this.timeout(15000);

	beforeEach(function() {
		api = new SecureNet(example.config);
	});

	it('charge card so we have something to void', function(next) {

		//setup
		var params = {
			amount: 11.00,
			card: example.card,
			extendedInformation: example.extendedInformation
		};
		api.charge(params, function(err, res) {
			if (err) return next(err);

			//console.log('res', res);

			/**/

			//confirm response
			assert.typeOf(res, 'object');
			assert.ok(res.success);
			//assert.typeOf(res.customerId, 'string');

			//setup for next test
			transactionId = res.transaction.transactionId;

			next();
		});
	});

	it('void preivous (settled or unsettled) transaction', function(next) {

		var params = {
			transactionId: transactionId
		};

		api.refund(params, function(err, res) {
			if (err) return next(err);

			//console.log('res', res);

			//confirm response
			assert.typeOf(res, 'object');
			assert.ok(res.success);

			//setup for next test

			next();
		});
	});
});


