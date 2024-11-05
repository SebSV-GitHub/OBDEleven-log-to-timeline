import { TZDate } from "@date-fns/tz";
import getSetting from "./config.js";

function getDate(block: string) {
	const date = /Date: (.+)\n*\r*/.exec(block)?.[1];
	const timezone = getSetting("timezone");
	return new TZDate(new Date(date!), timezone as string);
}

function getControlUnit(block: string) {
	return /Control unit: (.+)\n+\r*/.exec(block)?.[1];
}

function getName(block: string) {
	return /Name: (.+)\n+\r*/.exec(block)?.[1];
}

function splitFunctions(block: string) {
	const regex = /(\t.+:\n+\r*\t+Old value: .+\n+\r*\t+New value: .+\n+\r*)/g;
	let match: RegExpExecArray | null; // eslint-disable-line @typescript-eslint/ban-types
	const array: string[] = [];

	while ((match = regex.exec(block)) !== null) {
		array.push(match[1]);
	}

	return array;
}

export { getDate, getControlUnit, getName, splitFunctions };
