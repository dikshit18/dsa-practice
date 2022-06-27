function MissingNumber(array, n) {
    const sortedArray = array.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i + 1 !== sortedArray[i]) {
        return i + 1;
        }
    }
}

console.log(MissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10], 10));
