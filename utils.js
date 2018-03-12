/**
 * A boilerplate for testing ES6-Modules.
 * Covariance functions.
 *
 * @author martin.krause@razorfish.de
 * @version 1.0.0
 * @copyright Razorfish GmbH, 2016
 **/

/*eslint global:true*/
// import mockery: intercept and mock module dependencies aka "the require calls" (https://github.com/mfncooper/mockery)
import mockery from "./node_modules/mockery/mockery";

// import jsdom: JavaScript implementation of the WHATWG DOM and HTML for basic DOM-testing (https://github.com/tmpvar/jsdom)
import jsdom from  "./node_modules/jsdom/lib/jsdom";

/**
 * setup fake dom
 * @return {void}
 */
export function setupFakeDOM () {
	// jsdom: setup fake dom (to avoid the karam route)
	global.document = jsdom.jsdom("<!doctype html><html><head><meta charset='utf-8'></head><body></body></html>");
	global.window = document.defaultView;
	global.navigator = global.window.navigator;
}

/**
 * add module dependency mocking
 * @return {void}
 */
export function setupMockModuleDependencies () {
	// enable module interception, start with a clean (npm)cache
	mockery.enable({"useCleanCache": true});
}

/**
 * remove module dependency mocking
 * @return {void}
 */
export function removeMockedModuleDependencies () {
	// deregister all mocked dependencies
	mockery.deregisterAll()

	// disable mocking
	mockery.disable();
}
