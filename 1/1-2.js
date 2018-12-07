/**
 * hash table-map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const valueIndexMap = new Map();
  nums.forEach((v, i) => valueIndexMap.set(v, i));
  for (let index = 0; index < nums.length; index++) {
    const anotherValue = target - nums[index];
    if (
      valueIndexMap.has(anotherValue) &&
      index !== valueIndexMap.get(anotherValue)
    ) {
      return [index, valueIndexMap.get(anotherValue)];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
