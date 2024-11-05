import type { TZDate } from "@date-fns/tz";
import { Types } from "./blocks.js";
import {
	getControlUnit,
	getDate,
	getName,
	splitFunctions,
} from "@/utils/blocks.js";

function parseAppBlock(block: string) {
	return {
		type: Types.APP,
		name: getName(block),
		oldValue: /Old value: (.+)\n+\r*/.exec(block)?.[1],
		newValue: /New value: (.+)\n+\r*/.exec(block)?.[1],
		date: getDate(block),
	};
}

function parseLongCodingByteBlock(block: string) {
	return {
		type: Types.LONG_CODING_BYTE,
		controlUnit: getControlUnit(block),
		oldValue: /Old value:\n+\r*\t{2}(.+)\n+\r*/.exec(block)?.[1],
		newValue: /New value:\n+\r*\t{2}(.+)\n+\r*/.exec(block)?.[1],
		date: getDate(block),
	};
}

function parseLongCodingFunction(controlUnit: string, date: TZDate) {
	return (function_: string) => ({
		type: Types.LONG_CODING_FUNCTION,
		controlUnit,
		name: /\t{3}(.+):\n+\r*/.exec(function_)?.[1],
		oldValue: /Old value: (.+)\n+\r*/.exec(function_)?.[1],
		newValue: /New value: (.+)\n*\r*/.exec(function_)?.[1],
		date,
	});
}

function parseLongCodingFunctionsBlock(block: string) {
	const controlUnit = getControlUnit(block);
	const date = getDate(block);
	return splitFunctions(block).map(parseLongCodingFunction(controlUnit!, date));
}

function parseAdaptationFunction(
	controlUnit: string,
	name: string,
	date: TZDate
) {
	return (function_: string) => ({
		type: Types.ADAPTATION,
		controlUnit,
		name,
		oldValue: /Old value: (.+)\n+\r*/.exec(function_)?.[1],
		newValue: /New value: (.+)\n*\r*/.exec(function_)?.[1],
		date,
	});
}

function parseAdaptationBlock(block: string) {
	const controlUnit = getControlUnit(block);
	const name = getName(block);
	const date = getDate(block);
	return splitFunctions(block).map(
		parseAdaptationFunction(controlUnit!, name!, date)
	);
}

export {
	parseAppBlock,
	parseLongCodingByteBlock,
	parseLongCodingFunctionsBlock,
	parseAdaptationBlock,
};
