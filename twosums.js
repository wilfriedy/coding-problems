// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// function twosums(nums, target) {
//   let start = 0;
//   let end = nums.length;
//   let sum = nums[start] + nums[end];
//   let pair__array = [];
//   if (sum === target) return pair__array[(start, end)];
//   while (sum != target && start <= end) {
//     if (sum > target) {
//       start++;
//     } else {
//       end--;
//     }
//     console.log(sum, nums[start], nums[end]);
//     sum = nums[start] + nums[end];
//   }
//   return sum === target ? [start, end] : pair__array;
//   //   for (let i = 1; i <= nums.length - 1; i++) {
//   //     if (nums[i] + nums[j] === target) {
//   //       return (pair__array = [j, i]);
//   //     }
//   //     j = i;
//   //   }
//   //   return pair__array; // if not found return []
// }

// function twosums(nums, target) {
//   let j = 0;
//   let sum;
//   for (i = 1; i < nums.length; i++) {
//     sum = nums[i] + nums[j];
//     console.log(nums[i], nums[j], sum);
//     if (sum == target) {
//       return [i, j];
//     } else {
//       j = i;
//     }
//   }
//   return [];
// }
function twosums(nums, target) {
  const obj = {};
  for (i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  console.log(obj);

  for (i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const complement = target - curr;
    console.log(i, curr, target, complement);

    if (complement in obj && obj[complement] != i) {
      return [i, obj[complement]];
    }
  }

  return [-1, -1];
}

// console.log(twosums([2, 7, 11, 15], 9)); // 9
// console.log(twosums([2, 7, 11, 15], 91)); // []
console.log(twosums([-1, -2, -3, -4, -5], -8)); // []
