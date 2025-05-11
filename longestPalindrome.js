/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const palMap = new Map ();
  for(let i=0; i<s.length; i++) {
     const chVal = palMap.get(s[i]);
     palMap.set(s[i], chVal ? (chVal + 1) : 1);
  }

  let oddCh = false;
  let len = Number.MIN_VALUE;
  palMap.forEach((key, value) => {
   const rem = key % 2;

   if(rem == 0) {
     len += key;
   } else if(rem == 1 && !oddCh) {
     oddCh = true;
     len += key;
   } else {
     len += (key - 1);
   }
  })

  return len;
};

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("bb")); // 2
console.log(longestPalindrome("ccc")); // 3
console.log(longestPalindrome("cccaa")); // 5
