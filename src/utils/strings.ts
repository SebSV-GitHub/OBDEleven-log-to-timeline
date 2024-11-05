import { v6 as v6uuid } from "uuid";
import getSetting from "./config.js";

type OutputSettings = {
	folder: string;
	filename: string;
	unique: boolean;
};

function craftFilename() {
	const { filename, unique } = getSetting("output") as OutputSettings;
	if (unique) {
		return `${v6uuid()}.json`;
	}

	return filename;
}

export { craftFilename };
