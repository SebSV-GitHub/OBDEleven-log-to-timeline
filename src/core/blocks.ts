import {
	parseAdaptationBlock,
	parseAppBlock,
	parseLongCodingByteBlock,
	parseLongCodingFunctionsBlock,
} from "./parser.js";

enum Types {
	APP,
	LONG_CODING_BYTE,
	LONG_CODING_FUNCTION,
	ADAPTATION,
}

const regex = {
	app: /App\n+\r*(\t.+: .+\n*\r*)+/,
	longCoding: {
		byte: /Long coding\n+\r*\tControl unit: .+\n+\r*(\t(Old|New) value:\n+\r*\t{2}.+\n+\r*)+(\t.+: .+\n*\r*)+/,
		function:
			/Long coding\n+\r*\tControl unit: .+ .+\n+\r*\t{2}Values:\n+\r*(\t{3}.+:\n+\r*(\t{4}(Old|New) value: .+\n+\r*)+(\t+\n+\r*)?)+(\t.+: .+\n*\r*)+/,
	},
	adaptation:
		/Adaptation\n+\r*\tControl unit: .+ .+\n+\r*\t{2}Name: .+\n+\r*\t{2}Values:\n+\r*(\t{3}.+:\n+\r*(\t{4}(Old|New) value: .+\n+\r*)+(\t+\n+\r*)?)+(\t.+: .+\n*\r*)+/,
};

function splitIntoBlocks(file: string) {
	return file.split(/-+\n+\r*/);
}

function parseBlocks(blocks: string[]) {
	return blocks.splice(1).map((block) => {
		const type = getBlockType(block);
		switch (type) {
			case Types.APP: {
				return parseAppBlock(block);
			}

			case Types.LONG_CODING_BYTE: {
				return parseLongCodingByteBlock(block);
			}

			case Types.LONG_CODING_FUNCTION: {
				return parseLongCodingFunctionsBlock(block);
			}

			case Types.ADAPTATION: {
				return parseAdaptationBlock(block);
			}

			default: {
				throw new Error(`Error trying to identify block type at ${block}`);
			}
		}
	});
}

function getBlockType(block: string) {
	if (regex.app.test(block)) return Types.APP;
	if (regex.longCoding.byte.test(block)) return Types.LONG_CODING_BYTE;
	if (regex.longCoding.function.test(block)) return Types.LONG_CODING_FUNCTION;
	if (regex.adaptation.test(block)) return Types.ADAPTATION;
}

function getBlocks(file: string) {
	const stringBlocks = splitIntoBlocks(file);
	return parseBlocks(stringBlocks);
}

export default getBlocks;
export { Types };
