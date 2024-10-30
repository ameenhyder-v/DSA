//! Data Structure
//* a Data Structure is a way to store and organize data so that it can be used efficiently
//* A Data Structure is a collection of data Values, the relationships among them, and the functions or operations that can be applied to that data

//? Why learn Data Structures?
//* Almost every application we build involves data that is modelled in a certain way 
//* To efficiently manage that data, we need data structures
//* Imagine walking into a library only to find out there is no efficient organization of the books and they are stored randomly, It would take hours to find the book or you might be never find the book
//* The difference between a function taking a few milliseconds vs a few seconds of even minutes come down to the selection of teh right Data Structure.
//* Data Structures help we to solve problems in a more efficient way, both in terms of time and memory
//* Learning about data structures also help you gain a more profound understanding of things you're already aware of 

//? > DOM - Tree Data Structure.
//? > Browser back and forward - Stack Data Structure.
//? > OS job sheduling - Queue data structure


//! Array in js

//* an array is a data structure that can hold a collection of values 
//* Arrays can contain a mix of different data types. That we can store strings, booleans, nmbers of even obkects all in the same array
//* Arrays are resizable. You don't have to declare the size of an array before creating it in js
//* JavaScript array are zero-indexed and the insertion order is maintained 

//? Array - Big-O Time Complexity
//* insert / remove from end                      -                    O(1)
//* insert / remove from beginning                -                    O(n)
//* Access                                        -                    O(1)
//* Search                                        -                    O(n)
//* Push / Pop                                    -                    O(1)
//* Shift / Unshift / concat / slice / splice     -                    O(n)
//* forEach / map / filter / reduce               -                    O(n)


//!  Object Data Structure in JavaScript

//* An Object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type 
//* To retrieve a value, you can use the corresponding key. This can be achieved ysing the dot notation or bracket notation 
//* Objects are not directly iterable, so you cannot use a for...of loop on an object as you would with an array, string, or other iterable. However, there are several ways to iterate over an object’s properties using: "for...in" loop: Iterates over all enumerable properties.
//* > Object.keys(): Returns an array of property keys.
//* > Object.values(): Returns an array of property values.
//* > Object.entries(): Returns an array of key - value pairs.

//? Object Big-O Time Complexity
//* Insert             -                  O(1)
//* Remove             -                  O(1)
//* Access             -                  O(1)
//* Search             -                  O(n)
//* Object.Keys()      -                  O(n)
//* Object.values()    -                  O(n)
//* Objext.entries()   -                  O(n)



//! Set Data Structure

//* A Set is a Data Sturcture that can hold a collection of values. The values however must be unique
//* Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set
//* Sets are dynamically sized. You don't hove to declare the size of a set before creating it
//* Sets do not maintain an insertion order
//* Sets are iterables.