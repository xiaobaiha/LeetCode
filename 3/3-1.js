/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let tempStr = "";
    let innerIndex = 0;
    while (
      i + innerIndex < s.length &&
      tempStr.indexOf(s[i + innerIndex]) === -1
    ) {
      innerIndex++;
      tempStr = s.slice(i, i + innerIndex);
      if (innerIndex > max) {
        max = innerIndex;
      }
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
