// testing
const { join } = require("path")

class Client {
	constructor() {
		this.path = join(__dirname, "..")
	}

	/**
	 * console logging
	 * @returns string
	 */
	loader() {
		return "Path Found:"
	}

	/**
	 * The root path of the project
	 * @returns string
	 */
	pathCheck() {
		return this.path
	}
}

let testClient = new Client()

console.log(testClient.loader())
console.log(testClient.pathCheck()) // sends back the project root
