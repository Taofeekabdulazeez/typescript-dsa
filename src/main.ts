import { binarySearch } from "./arrays/searching/binarySearch";
import { linearSearch } from "./arrays/searching/linearSearch";

const index = linearSearch([21, 89, 63, 26, 47, 32], 26);
const x = binarySearch([11, 25, 30, 36, 23, 41, 60], 41);

console.log(x);
