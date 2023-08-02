function largestOfFour(arr) {
  let LargeNumberArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentLargestNumber = arr[i][0]; //-Infinity
    //Nested Loops because the array is a nested array
    for (let k = 0; k < arr[i].length; k++) {
      let currentNumber = arr[i][k];
      if (currentNumber > currentLargestNumber) {
        currentLargestNumber = currentNumber;
      }
    }
    // console.log (currentLargestNumber);
    LargeNumberArr.push(currentLargestNumber);
    // console.log ( LargeNumberArr);
  }
  return LargeNumberArr
}

console.log(largestOfFour([[17, 23, 25, 12, 2], [25, 7, 34, 48, 69], [4, -10, 18, 21, 6], [-72, -3, -17, -10, -1]]));



 // [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
