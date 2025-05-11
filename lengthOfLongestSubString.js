function lengthOfLongestSubstring(s) {
  let n = s.length;
  let max = 0;
  let left = 0;
  let charIndex = new Array(128);
  
  for (let i = 0; i < n; i++) {
      let currentChar = s.charAt(i);      
      if (charIndex[currentChar] > left) {
        left = charIndex[currentChar];
      }
      charIndex[currentChar] = i + 1;
      max = Math.max(max, i - left + 1);
  }

  return max;
}



console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("a")); // Output: 1
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3