// let n = 8;
// let sum = 0;

// let num = n;
// while (n > 0) {
//   let rem = n % 10;
//   console.log(sum, rem);
//   sum = (sum * 10) + rem;  

//   n = (n/10).toFixed(0);
// }

// console.log(sum, num);

// if(sum == num) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// var isPalindrome = function(x) {
//   let n = x;
//   let sum = 0;
//   if(n < 0) return false;
//   if (n >= 0 && n < 10) return true;
//   while(n > 0) {
//     const rem = n % 10;
//     sum = (sum * 10) + rem;
    
//     n = parseInt(n / 10);
//   }

//   return sum == x;
// };


var isPalindrome = function(x) {
  if (x < 0) return false;

  x += "";

  for(let i = 0; i < x.length/2; i++) {
    if(x[i] != x[x.length - i - 1]) return false; 
  }

  return true;
};

console.log(isPalindrome(9999));





// class Solution {
//   public boolean isPalindrome(int x) {
//       if (x < 0 || (x % 10 == 0 && x != 0)) {
//           return false;
//       }
//       int revertedNumber = 0;
//       while (x > revertedNumber) {
//           revertedNumber = revertedNumber * 10 + x % 10;
//           x /= 10;
//       }
//       return x == revertedNumber || x == revertedNumber / 10;
//   }
// }





