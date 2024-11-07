//!  Linear Search
// todo - Problem, Geven an array of "n" elements and a traget element "t", find the index of "t" in the array. return "Not Found" if the target element is not found?
 

// function linearSearch (arr, t) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === t){
//             return `Found at position ${i}`;
//         }
//     }
//     return "Not Found";
// }

// console.log(linearSearch([2, 34, 5, 3, 5, 56], 5));
// console.log(linearSearch([2, 34, 5, 3, 5, 56], 1));
// console.log(linearSearch([2, 34, 5, 3, 5, 56], 56));
// console.log(linearSearch([2, 34, 5, 3, 5, 56], 3));

//* Time complexity is Big-O(n) - linear time complexity that why it is calling 
//  if the length of the array is n then in worst case the algorithm takes Big-O(n), and in the best case the algorithm take Big O(1);
//  but we take only the Big O(n) as the complexity of this algorithm


//! Binary search 
// todo - Problem, Given a sorted arry of "n", elements and a target element "t", find the index of "t" in the array. Return "Not Found" if the target element is not found?

//* POINT - Binary Search only WORKS on a SORTED array!
//* Time complexity  = Big-O(log n) and Space Complexity = Big O(1)

// function binarySearch(arr, t){
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     while ( leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if(t == arr[middleIndex] ) {
//             return `Found at position ${middleIndex}`;
//         }
//         if (t < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         }
//         if (t > arr[middleIndex]) {
//             leftIndex = middleIndex + 1;
//         }
//     }

//     return "Not Found"
// }



console.log(binarySearch([-5, -3, 2, 4, 5, 6, 7, 56], 5))
console.log(binarySearch([-5, -3, 2, 4, 5, 6, 7, 56], 7))
console.log(binarySearch([-5, -3, 2, 4, 5, 6, 7, 56], -5))
console.log(binarySearch([-5, -3, 2, 4, 5, 6, 7, 56], 45))

//* Binary Searchy with for loop


// function binarySearch(arr, t){
//     for (let i = 0, j = arr.length - 1; i <= j;) {
//         let mid = Math.floor((i + j) / 2);
//         if(arr[mid] == t){
//             return `Found at position ${mid}`
//         }
//         if(t < arr[mid]){
//             j = mid - 1
//         }
//         if (t > arr[mid]) {
//             i = mid + 1
//         }
//     }
//     return "Not Found"
// }


//* Binary search with recursion
//* Time Complexity of this one is also Big-O(log n) and Space Complexity is also now Big-O(log n)

// function binarySearch(arr, t) {
//     return search(arr, t, 0, arr.length - 1)
// }
// function search(arr, t, start, end) {
//     if (start > end) {
//         return "Not Found"
//     }
//     let mid = Math.floor((start + end) / 2);
    
//     if (t === arr[mid]) {
//         return `Found at position ${mid}`
//     }

//     if (t < arr[mid]){
//         return search(arr, t, start, mid - 1)
//     } else {
//         return search(arr, t, mid + 1, end)
//     }
// }


// function search(arr, t, start, end) {
//     if( start > end){
//         return "Not found"
//     }
//     let mid = Math.floor((start + end) / 2) 
//     if(t == arr[mid]) {
//         return `Found at position ${mid}`
//     }

//     if(t < arr[mid]) {
//         return search(arr, t, start, mid - 1)
//     } else {
//         return search(arr, t, mid + 1, end)
//     }
// }


// function recSearch(arr, t, start, end) {
//     if(start > end) {
//         return "not found"
//     }

//     let mid = Math.floor((start + end) / 2)
//     if(t == arr[mid]){
//         return `founded at position ${mid}`
//     }

//     if(t > arr[mid]) {
//         return recSearch(arr, t, mid + 1, end)
//     } else if (t > arr[mid]) {
//         return recSearch(arr, t, start, mid - 1)
//     }
// }


