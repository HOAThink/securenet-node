'use strict';
var assert = require('chai').assert; //http://chaijs.com/api/assert/
var SecureNet = require('../../index');
var example = require('../example.data');
var api;

describe('Spec', function () {
	beforeEach(function () {
		api = new SecureNet(example.config);
	});

	it('credential found in environment variable', function () {
		assert.typeOf(example.config.credentials.secureNetId, 'string');
		assert.typeOf(example.config.credentials.secureNetKey, 'string');
	});

	it('has expected base methods', function () {
		// todo: list all public functions
		assert.typeOf(api.getBatch, 'function');
	});

	it('has expected base properties', function () {
		assert.typeOf(api.mode, 'string');
		assert.typeOf(api.secureNetId, 'string');
		assert.typeOf(api.secureNetKey, 'string');
	});

	it('supports multiple instances', function () {
		var a = new SecureNet(example.config);
		var b = new SecureNet({
			mode: 'live',
			credentials: {
				secureNetId: 'fake',
				secureNetKey: 'fake'
			},
			developerApplication: {
				developerId: 12345678,
				Version: '1.2'
			}
		});

		assert.notEqual(b.mode, a.mode);
		assert.notEqual(b.secureNetKey, a.secureNetKey);
		assert.notEqual(b.secureNetId, a.secureNetId);
	});
});