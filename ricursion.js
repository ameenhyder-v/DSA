//! ********************************************************************** Recursion in JS! *************************************************************************************************
//? What is Recursion? 
//* Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem
//* Recursion is when a function calling itself

//? Why do we need Recursion?
//* Recursion is a great technique to simplify your solution
//* If you find yourself breaking down your problem into smaller version of the same problem, Recursion is very useful!

//? Key Concepts of Recursion
//* Base Case: The condition under which the recursion stops.This prevents the function from calling itself indefinitely.
//* Recursive Case: The part where the function calls itself, breaking down the problem into smaller subproblems.

//* Ricursion might simplify solving a problem but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution
//* Ricursion is a topic that is not the most stright forward to understand. Do not give up if you struggle with the concepe. 
//! Ricursion - Practice more!!!!!!!!!
//? Problem - Print dicreesing order n to 1;
// function printDic(n){
//     if(n < 1) return;

//     console.log(n);
//     printDic(n - 1);
// }

// printDic(5) // 5 4 3 2 1

//! Problems solving with Ricursion

//  todo - Fibonacci sequence with recursion!

function recursiveFibonacci(n) {
    if (n < 2 ){
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(3));  // 2
console.log(recursiveFibonacci(6));  // 8
console.log(recursiveFibonacci(1));  // 1
console.log(recursiveFibonacci(2));  // 1

//* Time Complexity: Big O(2^n) and the Space Complexity: Big O(n) - when using recursive approch
//* Recursive approch is not best for finding the fibonacci it is better to use the iterative approch

//  todo - Factorial of a number with recursion!

// function recursiveFactorial(n) {
//     if(n <= 1)  return 1

//     return n * recursiveFactorial(n - 1);
// }

// console.log(recursiveFactorial(5))   // 120
// console.log(recursiveFactorial(4))   //24
// console.log(recursiveFactorial(12))  // 479001600
// console.log(recursiveFactorial(6))   // 720
// console.log(recursiveFactorial(9))   // 362880