function linearSearch(numbers: number[], value: number) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value) return i;
  }

  return -1;
}

export { linearSearch };
