# A boilerplate for testing ES6-Modules.

It helps you build fast robust JavaScript. ES6-Modules preferred. Code Coverage included.

## Features

* Build for `ES6`
* Extremely `delete-key friendly`. Remove whatever you don't need.
* Includes:
	* [mocha](http://mochajs.org): simple, flexible, fun JavaScript test framework running on Node.js
	* [chai](http://chaijs.com):  a BDD / TDD assertion library for Node.js.
	* [sinon](http://sinonjs.org/):  test spies, stubs and mocks for JavaScript.
	* [jsdom](https://github.com/tmpvar/jsdom): a JavaScript implementation of the WHATWG DOM and HTML standards, for use --
	* [mockery](https://github.com/mfncooper/mockery): simplifying the use of mocks with Node.js
	* [isparta](https://github.com/douglasduteil/isparta):  a code coverage tool for ES6.
	* [sinon-chai](https://github.com/domenic/sinon-chai): extends Chai with assertions for the Sinon.JS mocking framework.
	* [chai-as-promised](https://github.com/domenic/chai-as-promised): extends Chai with assertions about promises.
	* [chai-dom](https://github.com/nathanboktae/chai-dom): DOM assertions for the Chai assertion library using vanilla JavaScript
* Uses `babel` and `node`.
* Avoids `karma` and `phantomjs`

## Requires
- Babel v5: As long as the stack is not optimized for the new babel architecture, please stick to babel v5 without an `.bablerc`-file
- Nodejs v4: As long as the stack is not optimized for Nodejs +4, please stick to version 4.
## Use
Execute `$ npm test` or `$ npm run coverage`.

### License
Released under the [Modified BSD License](LICENSE).

