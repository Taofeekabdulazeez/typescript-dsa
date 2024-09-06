function binarySearch(numbers: number[], element: number) {
  let start = 0;
  let end = numbers.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (numbers[middle] !== element && start <= end) {
    if (element < numbers[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return numbers[middle] === element ? middle : -1;
}

export { binarySearch };
