//! selection sorting O(n^2)
// const sam = [1,2,3,4,4,5,5,5,3,3,4]

// for(let i = 0; i < sam.length - 1; i++) {
//     for(j = i+1; j < sam.length; j++){
//         if(sam[i] > sam[j]){
//             let temp = sam[i];
//             sam[i] = sam[j];
//             sam[j] = temp;
//         }
//     }
// }

// console.log(sam)

//? the time complexity of this is O(n) - linear, and the space complexity is O(1) - constant

// ============================================================================================================


//! Now moving to the Math Algorithms
//? what we are going to look? 
//  todo - Fibonacci Sequence!

//? Problem - Give a number "n", find the first "n" elements of the Fibonacci sequence?
//  In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the preceding ones.
//  The first two numbers in the sequence are 0 and 1;
//  fibonacci(2) = [0,1]
//  fibonacci(3) = [0, 1, 1]
//  fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
//  simple solution ( this solution will take O(n) linear time complexity )
function fibo(n) {
    const fib = [0, 1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// console.log(fibo(2)) //[0,1]
// console.log(fibo(3)) //[0, 1, 1]
// console.log(fibo(7)) //[0, 1, 1, 2, 3, 5, 8]


// =====================================================================================================================

//  todo - Factorial of a number!
//? Problem - give an integer "n" find the Factorial of that integer?
//  In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to "n";
//  Factorial of zero is 1.
//  4! = 4*3*2*1 = 24

// complexity is O(n) - linear time complexity!
function factorial(n) {
    if (n < 0) return "It is a negative number!";
    let fac = 1;
    if (n == 0 || n == 1) return fac;

    for(let i = 2; i <= n; i++){
        fac = fac * i;
    }
    return fac
}

// console.log(factorial(4))   // 24
// console.log(factorial(-1))  // It is a negative number!
// console.log(factorial(5))   // 120
// ============================================================================================================================
//  todo - Prime number!
//? Problem - Give a natural number "n", determine if the number is prime or not
//  A prime number is a whole number greater than 1 that has exactly two distinct divisors: 1 and itself. This means it cannot be divided evenly by any other numbers.
//  For example, 2, 3, 5, 7, and 11 are prime numbers because they have no divisors other than 1 and themselves.

// complexity is O(n) - linear time complexity!

function isPrime(n) {
    if(n < 2) return false;

    for (let i = 2; i <= n; i++){
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(5));  // true
// console.log(isPrime(4));  // false
// console.log(isPrime(31)); // true
// ====================================================================================================

//  todo - Power of two! 
//? Problem - give a positive integer "n", determine if the number is a power of 2 or not 
//  An integer is a power of two if there exists an integer "x" such that "n" === 2^x
// complexity is Big-O(n), - linear time complexity!


function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

// console.log(isPowerOfTwo(1))   // true
// console.log(isPowerOfTwo(2))   // true
// console.log(isPowerOfTwo(5))   //false
//  todo - Recursion!
//  todo - Fibonacci sequence with recursion!
//  todo - Factorial of a number with recursion!