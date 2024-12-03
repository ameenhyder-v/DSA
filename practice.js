// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor () {
//         this.head = null;
//         this.size = 0;
//     }

//     append(data) {
//         let node = new Node(data)

//         if(!this.head) {
//             this.head = node;
//         } else {
//             let curr = this.head;
//             while (curr.next) {
//                 curr = curr.next;
//             }

//             curr.next = node;
//         }
//         this.size++;
//     }

//     prepend(data) {
//         let node = new Node(data);

//         if(!this.head){
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }
// }


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }


// class LinkedList {
//     constructor () {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     append(value) {
//         const newNode = new Node(value)

//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++
//     }


//     prepend(value) {
//         const newNode = new Node(value);
//         if(this.head) {
//            newNode.next = this.head; 
//         } else {
//             this.tail = newNode
//         }
//         this.head = newNode;
//         this.size++
//     }


//     insertAt(value, index) {
//         if(index < 0 || index > this.size) {
//             console.error("invalid index");
//             return
//         }

//         const node = new Node(value);
//         if(index === 0) {
//             node.next = this.head;
//             this.head = node;
//         } else {
//             let curr = this.head;
//             for(let i = 0; i < index - 1; i++) {
//                 curr = curr.next
//             }

//             node.next = curr.next;
//             curr.next = node;
            
//         }


//     }

//     printLs() {
//         let curr = this.head;
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next;
//         }
//     }

//     removeFirst(){

//     }
// }


// const ll = new LinkedList();

// ll.append(20)
// ll.append(30)
// ll.append(40)

// ll.prepend(2)
// ll.insertAt(10, 1)


// ll.printLs()




// function recfibo(n) {
//     if( n < 2 ) {
//         return n
//     }

//     return recfibo(n - 1) + recfibo(n - 2);
// }


// console.log(recfibo(6))




// function recfac(n) {
//     if(n <= 1) return 1

//     return n * recfac(n - 1)
// }

// console.log(recfac(5))


// class HashTable{
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for(let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         // this.table[index] = value;
//         const bucket = this.table[index];
//         if(!bucket) {
//             this.table[index] = [[key, value]];
//         } else {
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem) {
//                 sameKeyItem[1] = value;
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }


//     get(key) {
//         const index = this.hash(key);
//         // return this.table[index];
//         const bucket = this.table[index];

//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] === key)  
//             if(sameKeyItem) {
//                 return sameKeyItem[1];
//             }
//         }
//         return undefined;
//     }

//     remove(key) {
//         const index = this.hash(key);
//         // this.table[index] = undefined
//         const bucket = this.table[index];
//         if(bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if(sameKeyItem) {
//                 bucket.splice(bucket.indexOf(sameKeyItem), 1);
//             }
//         }
//     } 


//     display() {
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// const table = new HashTable(50);

// table.set("name", "Bruce");
// table.set("age", 25);
// table.display()

// table.set("mean", "Shakir")
// table.display()
// console.log(table.get("name"));



//! Heap Sort using max heapify

// function heapify (arr, n, i) {
//     let largest = i;
//     const left = 2 * i + 1;
//     const right = 2 * i + 2;

//     if(left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     if(right < n && arr[right] > arr[largest]) {
//         largest = right
//     }

//     if(largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest)
//     }
// }


// function heapSort(arr) {
//     let n = arr.length;

//     //build heap first 
//     for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }
// }



// let a = [12, 11, 13, 5, 6, 7];
// heapSort(a);

// console.log('sorted array: ' , a)



//! simple tree General Tree
// let a = {
//     value : "a"
// };
// let b = {
//     value : "b"
// };

// let c = {
//     value: "c"
// };
// let d = {
//     value: 'd'
// };


// let e = {
//     value: "e"
// };

// let f = {
//     value: 'f'
// };
// let g = {
//     value: 'g'
// };

// let h = {
//     value: 'h'
// };

// let i = {
//     value: 'i'
// };
// let j = {
//     value: "j"
// };
// a.one = b;
// a.two = c;
// a.three = d;

// a.one.one = e;
// a.one.two = f;
// a.one.three = g;

// a.two.one = h;
// a.two.two = j;
// a.two.three = i;

// console.log(a)
