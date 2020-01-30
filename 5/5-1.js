/**
 * 先找到所有的中心点坐标，依次向两边扩散，保存最大的长度的字符串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s.length) {
    return "";
  }
  const strLength = s.length;
  const charArr = s.split("");
  const centerPoints = Array(strLength * 2 - 1)
    .fill(0)
    .map((_, i) => i / 2);
  let maxLength = 1;
  let maxString = charArr[0];
  centerPoints.forEach(centerPoint => {
    let str = charArr[centerPoint] || "";
    let left = Math.ceil(centerPoint - 1);
    let right = Math.floor(centerPoint + 1);
    while (left >= 0 && right < charArr.length) {
      if (charArr[left] !== charArr[right]) {
        break;
      }
      str = `${charArr[left]}${str}${charArr[right]}`;
      if (str.length > maxLength) {
        maxLength = str.length;
        maxString = str;
      }
      left -= 1;
      right += 1;
    }
  });
  return maxString;
};

console.log(longestPalindrome("cbbd"));
