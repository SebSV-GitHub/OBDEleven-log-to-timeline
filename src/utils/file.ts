import fs from "node:fs";
import path from "node:path";
import getSetting from "./config.js";
import { craftFilename } from "./strings.js";

function readFile() {
	const inputsFolder = getSetting("input.folder") as string;
	const filename = getSetting("input.filename") as string;
	const filePath = path.resolve(inputsFolder, filename);
	return fs.readFileSync(filePath, "utf8");
}

function writeFile(content: unknown) {
	const filename = craftFilename();
	const outputFolder = getSetting("output.folder") as string;
	const filePath = path.resolve(outputFolder, filename);

	if (!fs.existsSync(filePath)) {
		fs.mkdirSync(path.resolve(outputFolder), { recursive: true });
	}

	fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
}

export { readFile, writeFile };
