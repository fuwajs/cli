// testing
const { join } = require("path")

class Client {
	public path: string
	public constructor() {
		this.path = join(__dirname, "..")
	}

	/**
	 * console logging
	 * @returns string
	 */
	public loader(): string {
		return "Path Found:"
	}

	/**
	 * The root path of the project
	 * @returns string
	 */
	public pathCheck(): string {
		return this.path
	}
}

let testClient = new Client()

console.log(testClient.loader())
console.log(testClient.pathCheck()) // sends back the project root
