// // class Node {
// //     constructor(value) {
// //         this.value = value;
// //         this.next = null;
// //     }
// // }

// // class LinkedList {
// //     constructor () {
// //         this.head = null;
// //         this.size = 0;
// //     }

// //     append(data) {
// //         let node = new Node(data)

// //         if(!this.head) {
// //             this.head = node;
// //         } else {
// //             let curr = this.head;
// //             while (curr.next) {
// //                 curr = curr.next;
// //             }

// //             curr.next = node;
// //         }
// //         this.size++;
// //     }

// //     prepend(data) {
// //         let node = new Node(data);

// //         if(!this.head){
// //             this.head = node;
// //         } else {
// //             node.next = this.head;
// //             this.head = node
// //         }
// //         this.size++
// //     }
// // }


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




function recfibo(n) {
    if( n < 2 ) {
        return n
    }

    return recfibo(n - 1) + recfibo(n - 2);
}


console.log(recfibo(6))




function recfac(n) {
    if(n <= 1) return 1

    return n * recfac(n - 1)
}

console.log(recfac(5))


