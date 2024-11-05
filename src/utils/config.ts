import config from "config";

function getSetting(setting: string) {
	if (!config.has(setting)) {
		throw new Error(`Setting ${setting} is not defined in the config file`);
	}

	return config.get(setting);
}

export default getSetting;
