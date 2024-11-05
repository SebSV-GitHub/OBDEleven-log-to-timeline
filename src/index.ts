import { readFile, writeFile } from "@/utils/file.js";
import getBlocks from "@/core/blocks.js";

const file = readFile();
const blocks = getBlocks(file).flat();

writeFile(blocks);

console.log("OK");
