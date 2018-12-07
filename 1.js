/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const otherIndex = nums.slice(index + 1).indexOf(target - nums[index]);
    if (otherIndex !== -1) {
      return [index, otherIndex + index + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
