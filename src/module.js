/**
 * The sample module.
 * It will import a dependency which we'll mock using mockery
 */
import {value} from "./module-dependency";

export function get() {
	return "Message: " + value();
}

export function promise(string) {
	return new Promise((resolve, reject) => {
		resolve(string);
	})
}
