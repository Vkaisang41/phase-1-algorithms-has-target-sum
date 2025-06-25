function hasTargetSum(array, target) {
  // Check every pair of numbers in the array
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  => O(n²) - because we use a nested loop to compare each pair
*/

/* 
  Add your pseudocode here
  - For each number in the array:
    - Check every other number after it
    - If their sum equals the target, return true
  - If no pair adds up to the target, return false
*/

/*
  Add written explanation of your solution here
  We use a nested loop to go through each possible pair of numbers in the array.
  If any pair adds up to the target, we return true.
  If we finish checking all pairs without finding a match, we return false.
*/

if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
