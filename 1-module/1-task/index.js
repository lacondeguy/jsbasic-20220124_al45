function factorial(n) {
   if (n == 0 || n == 1) {
      return 1;
   } else {
     let result = n
         while (n > 1) {
         --n;
         result *= n;
         } 
     return result;
   }
}

console.log(factorial(5))