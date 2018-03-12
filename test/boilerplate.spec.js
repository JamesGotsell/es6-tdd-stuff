/**
 * A boilerplate for testing ES6-Modules with
 * mocha + chai + sinon + mockery + jsdom
 *
 * It includes some chai-plugins for your convenience:
 * chai-dom + chai-as-promised + sinon-chai
 *
 * It uses iSparta for ES6 code coverage.
 *
 * - Delete what you don't need
 * - State your module under test to "moduleLocation"
 * - Setup the module dependencies to be mocked at "mockDependencies"
 * - Write our tests
 *
 * Use $ npm test
 *
 * @author martin.krause@razorfish.de
 * @version 1.0.0
 * @copyright Razorfish GmbH, 2016
 **/

/*eslint-env node, mocha */
/*eslint max-nested-callbacks: [2, 4]*/
/*eslint require: true*/

// import chai: the assertion framework (http://chaijs.com)
import chai from "../node_modules/chai/chai";
import { expect } from 'chai'

// import chai-plugin: assertions for promises (https://github.com/domenic/chai-as-promised)
import chaiAsPromised from "../node_modules/chai-as-promised/lib/chai-as-promised";

// import chai-plugin: assertions for the dom (https://github.com/nathanboktae/chai-dom)
import chaiDom from "../node_modules/chai-dom/chai-dom";

// import sinon: test spies, stubs and mocks (http://sinonjs.org/)
import sinon from "../node_modules/sinon/lib/sinon";
// import chai-plugin: assertions for sinon (https://github.com/domenic/sinon-chai)
import sinonChai from "../node_modules/sinon-chai/lib/sinon-chai";

// import mockery: intercept and mock module dependencies aka "the require calls" (https://github.com/mfncooper/mockery)
import mockery from "../node_modules/mockery/mockery";

// import test utilities
import * as utils from "./../utils.js";


// chai: setup assertion style and plugins
chai.should();
chai.expect();
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiDom);


const
	// module under test
	moduleLocation = "./../src/module.js"
	;


let module,
	mockDependency = {}
	;

/**
 * mock module dependencies
 * @return {void}
 */
function mockDependencies() {
	// register current module as allowed module
	mockery.registerAllowables([moduleLocation]);

	// make sure the mock matches import exactyly (path and filename)
	mockery.registerAllowable("./module-dependency");
	mockery.registerMock(`./module-dependency`, mockDependency);

	// mock dependency
	mockDependency.value = () => {
		return "I am the value from the mocked dependency";
	};

	// spy on mocked dependency's function
	sinon.spy(mockDependency, "value");
}



/**! Root test suite */
describe(`The module "${moduleLocation}" with mocked dependencies`, () => {

	/**! runs before all tests in this block */
	before(() => {
		// setup the dependency interception
		utils.setupMockModuleDependencies();

		// add the mocks and prepare interception of the module dependencies
		mockDependencies();

		// require module under test with mocked dependencies
		module = require(moduleLocation);
	});

	/**! runs before each test in this block */
	beforeEach(() => {
		// setup clean DOM before each test
		utils.setupFakeDOM();
	});

	/**! runs after each test in this block*/
	afterEach(() => {
		// reset spy after each test
		mockDependency.value.reset();
	});

	/**! runs after all tests in this block */
	after(() => {
		// remove all mocked module dependencies
		utils.removeMockedModuleDependencies();
	});

	/**! actual tests */

	it("should return the mocked message (mockery example)", () => {
		module.get().should.equal("Message: I am the value from the mocked dependency");
	});

	it("should have called the mocked dependency (sinon + sinon-chai example)", () => {
		module.get();
		mockDependency.value.should.have.been.calledOnce;
	});

	it("should work with async code (chai-as-promised example)", () => {
		var _string = module.get();
		return module.promise(_string).should.eventually.equal(_string);
	});

	it("should interact with the fake DOM (JSDOM example + chai-dom)", () => {
		document.body.innerHTML = "<div id='foo' class='bar'></div>";
		// attention: chai-dom did not work with jsdom until recently. check your version in case this fails
		// document.querySelector('#foo').should.have.class('bar')
	});

});


import Stuff from '../src/Stuff.js'

describe('Class stuff', () => {
	describe('#constructor()', () => {
		it(' constructor ', () => {
			() => {
				new Stuff();
			}

		});
	});

	describe('hello world', () => {
		let stuff;

		beforeEach(() => {
			stuff = new Stuff;
		});

		it('returns string hello world ', () => {
			stuff.hello().should.equal('hello world');
		});


	});


	describe('digital root function on the class', () => {
		let stuff

		beforeEach(() => {
			stuff = new Stuff
		})

		it('digital root pass 11 return 2', () => {
			let num = 11
			expect(stuff.digitalRoot(num)).to.equal(2)
		})
		it('digital root pass 111 return 3', () => {
			let num = 111
			expect(stuff.digitalRoot(num)).to.equal(3)
		})
		it('digital root pass 123 return 6', () => {
			let num = 123
			expect(stuff.digitalRoot(num)).to.equal(6)
		})
		it('digital root pass 999 return ', () => {
			let num = 999
			expect(stuff.digitalRoot(num)).to.equal(27)
		})
	})

	describe('factorize function on the class', () => {
		let stuff

		beforeEach(() => {
			stuff = new Stuff
		})
		it('factorize pass 5 return 120', () => {
			let num = 5
			expect(stuff.factorize(num)).to.equal(120)
		})
		it('factorize pass 3 return ', () => {
			let num = 3
			expect(stuff.factorize(num)).to.equal(6)
		})
		it('factorize pass 4 return ', () => {
			let num = 4
			expect(stuff.factorize(num)).to.equal(24)
		})
		it('factorize pass 10 return ', () => {
			let num = 6
			expect(stuff.factorize(num)).to.equal(720)
		})
	})

	describe('panlindromCheck  function on the class', () => {
		let stuff

		beforeEach(() => {
			stuff = new Stuff
		})
		it('panlimdromCheck to check if a string is a palimdrome ', () => {
			expect(stuff.panlindromCheck('boob')).to.equal(true)
		})
		it('panlimdromCheck return false if  not a palimdrome ', () => {
			expect(stuff.panlindromCheck('booa')).to.equal(false)
		})
	})

	describe('find longest word function on the class', () => {
		let stuff

		beforeEach(() => {
			stuff = new Stuff
		})
		it('longestWord function to return  to check if a string is a palimdrome ', () => {
			expect(stuff.longestWord('my name is james')).to.equal(5)
		})
	})
	describe('captilize first word', () => {
		let stuff

		beforeEach(() => {
			stuff = new Stuff
		})
		it('captilize first word in a sentence', () => {
			expect(stuff.captailize('my name is james')).to.equal('My Name Is James')
		})
	})

	describe('reverse function ', () => {
		let stuff;

		beforeEach(() => {
			stuff = new Stuff;
		});
		it('should only take a string  ', () => {
			let str = 'hello world'
			expect(stuff.reverse(str)).to.be.a('string');
		});
		it('takes string and reverses ', () => {
			let str = 'hello world'
			expect(stuff.reverse(str)).to.be.equal('dlrow olleh');
		});
	});
	describe('hello world func function ', () => {
		let stuff;

		beforeEach(() => {
			stuff = new Stuff;
		});
		it('should return hello world  ', () => {

			expect(stuff.helloWorld()).to.equal('hello world');
		});

	});


	describe('fetch request ', () => {
		let stuff;

		beforeEach(() => {
			stuff = new Stuff;
		});
		// it('should take an url as string', () => {
		//   let url = 'http://loremricksum.com/api/?paragraphs=1&quotes=1'
		//   expect(stuff.apiRequest(url)).to.be.a('string');
		// });
		it('data should be returned promises', function () {
			let url = 'http://loremricksum.com/api/?paragraphs=1&quotes=1'
			var result = stuff.apiRequest(url);
			console.log(result)
			return result.then(function (data) {
				expect(data).to.be.a('object');
			});
		});
	});
	describe('add fetch data to new array ', () => {
		let stuff;
		let data;
		beforeEach(() => {
			stuff = new Stuff;
			let url = 'http://loremricksum.com/api/?paragraphs=1&quotes=1'
			data = stuff.apiRequest(url);
		});

		it('add data from fetch to new array ', function () {
			expect(stuff.addToArray(data)).to.be.an('array')
		});
	});

});

