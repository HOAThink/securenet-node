securenet-node
==============

SecureNet PayOS API community library for Node.js.


## Usage

```javascript

var credentials = {
	secureNetId: ' your securenet id key ', //provided via signup email
	secureNetKey: ' your securenet secure key ' //provided inside virtual terminal
};
var developerApplication = {
	developerId: 12345678,
	version: '1.2'
};
var config = {
	credentials: credentials,
	developerApplication: developerApplication,
	mode: 'live' //live or test
};

var SecureNet = require('securenet');
var payos = new SecureNet(config);
```

## Features

All features of the PayOS are supported.

Payment Methods
- Credit Cards
	- Card Not Present (online)
	- Card Present (swipe/track)
- Bank Accounts
	- Savings accounts
	- checking accounts
- Pin-less debit cards
- Vault data

Supported Payments
- Charges
- Authorizations
- Capture
- Voids
- Refunds
- Credits
- Verify (card data)
- Settlement Batches (authorizations & captures)
	- Close
	- Retrieving closed batch
	- Retrieving current batch

Vault
- Customers
	- Create
	- Retrieve
	- Update
- Payment Method (associated with customer)
	- Create
	- Retrieve
	- Update
	- Delete
- Storing Customer & Payment Method at the same time
- Storing after charge
- Paying with stored data

Billing Plans
- Recurring Paymment Plan
	- Create
	- Update
	- Retrieve
- Installment Plan
	- Cretae
	- Update
	- Retrieve
- Variable Payment Plan
	- Create
	- Update
	- Retrieve

Transaction Reporting
- Searching
- Retrieving
- Update transaction

User Defined Fields
-

## API

Please see the [PayOS API docs](https://apidocs.securenet.com/docs/getstarted.html).

## Unit Tests

We are using [Mocha](http://mochajs.org/) for unit testing.

The unit test spec requires you to set your api credentials as environment variables.

```bash
export SECURENET_ID=xxxx
export SECURENET_KEY=yyyy
```

Install with npm:
```bash
$ npm install -g mocha
$ npm install -g should
```

Run unit tests:
```bash
$ mocha --recursive
```
## LICENSE

[BSD-2-Clause](https://github.com/HOAThink/securenet-node/blob/master/LICENSE)