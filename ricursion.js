//  todo - Recursion!
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

//  todo - Fibonacci sequence with recursion!
// function recursivefivonacci(n) {
//     if (n < 2 ){
//         return n
//     }
//     return recursivefivonacci(n - 1) + recursivefivonacci(n - 2);
// }

// console.log(recursivefivonacci(3));
// console.log(recursivefivonacci(6));
// console.log(recursivefivonacci(1));
// console.log(recursivefivonacci(2));

//  todo - Factorial of a number with recursion!
// function recursiveFactorial(n) {
//     if(n <= 1)  return 1

//     return n * recursiveFactorial(n - 1);
// }

// console.log(recursiveFactorial(5))
// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(12))
// console.log(recursiveFactorial(6))
// console.log(recursiveFactorial(9))