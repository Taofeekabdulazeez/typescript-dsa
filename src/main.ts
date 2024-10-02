import { binarySearch } from "./arrays/searching/binarySearch";
import { bubbleSort } from "./arrays/sorting/bubbleSort";
import { insertionSort } from "./arrays/sorting/insertionSort";
import { selectionSort } from "./arrays/sorting/selectionSort";

console.log(binarySearch([76, 65, 30, 80, 12, 36], 80));
console.log("Bubble sort ==>", bubbleSort([76, 65, 30, 80, 12, 36]));
console.log("Selection sort ==>", selectionSort([76, 65, 30, 80, 12, 36]));
console.log("Insertion sort ==>", insertionSort([76, 65, 30, 80, 12, 36]));
