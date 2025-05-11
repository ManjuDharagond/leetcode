let string = "A man, a plan, a canal: Panama";

const isValidPalindrome = (str) => {

  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

  let start = 0;
  let end = str.length - 1;
  while(start <= end) {
    if(str[start] != str[end]) return false;

    start++;
    end--;
  }

  return true;
}

console.log(isValidPalindrome(string));


// var isPalindrome = function(s) {
//   let l = 0
//   let r = s.length - 1

//   while (l <= r) {
//       if (!isAlphaNum(s[l])) {
//           l++
//           continue
//       } else if (!isAlphaNum(s[r])) {
//           r--
//           continue
//       }

//       if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
      
//       l++
//       r--
//   }

//   return true
// };

// function isAlphaNum (c) {
//   return (c !== " ") && ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9"))
// }