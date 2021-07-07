import fs from "fs";
export * from "./esm/high-level.js";
import * as hdf5 from "./esm/high-level.js";

const file = "./batch_0.fast5";
var fileBuffer = fs.readFileSync(file, null).buffer;
const convFile = new hdf5.File(fileBuffer, file);

console.log(convFile);

export default hdf5;
