function equation(str) {
   const calculate = new Function('return ' + str);
   return calculate();
};

console.log(equation("1+1")); // => 2
console.log(equation("7*4-2")); // => 26
console.log(equation("1+1+1+1+1")); // => 5