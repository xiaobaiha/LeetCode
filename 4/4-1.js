/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const joinArr = nums1.concat(nums2);
    joinArr.sort((a, b) => a > b ? -1 : 1);
    if(joinArr.length % 2 === 0){
        const index = joinArr.length / 2;
        return (joinArr[index] + joinArr[index - 1]) / 2;
    }
    return joinArr[(joinArr.length - 1) / 2];
};