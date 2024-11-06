//! Linked List 

//* A Linked List is a linear data structure that includes a series of connected nodes 
//* Each node consists of a data valude and a pointer that points to the next node 
//* The list enelments can be easily inserted or removed without reallocation or reorganization of the entire structure 
//* Random access of elements is not feasible and accessing an element has linear time complexity
//? > 
//* The linked list data structure supports three main operations 
//* > Insertion   -   To add an element at the beginning or end or at a given index in the list 
//* > Deletion    -   To remove an item given it's index or value
//* > Search      -   To find an element given it's value


//? creating a linked list 

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }


    // append(value) {
    //     const node = new Node(value);

    //     if (this.isEmpty()) {
    //         this.head = node
    //     } else {
    //         let prev = this.head;
    //         while (prev.next) {
    //             prev = prev.next;
    //         }
    //         prev.next = node
    //     }

    //     this.size++;
    // }



    // prepend(value) {
    //     const node = new Node(value);
        
    //     if(!this.isEmpty()) {
    //         node.next = this.head
    //     }

    //     this.head = node
    //     this.size++
    // }

//     prepend(value) {
//         const node = new Node(value);

//         if(this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }

//         this.size++
//     }

//     printList() {
//         if(this.isEmpty()) {
//             console.log("This linked list is empty!")
//         } else {
//             let curr = this.head;
//             let listValues = "";
//             while(curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next;
//             }
//             console.log(listValues)
//         }
//     }

// }


// console.log("List Size: ", list.getSize())

// list.printList()


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    append(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }
        this.size++
    }


    prepend(data) {
        const node = new Node(data);

        if(this.head){
            node.next = this.head;
        }
        this.head = node;
        this.size++
    }


    addAt(index, data) {
        if(index < 0 || index > this.size){
            console.error("invalid index");
            return;
        }
        const node = new Node(data);
        if(index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++){
                curr = curr.next
            }
            node.next = curr.next;
            curr.next = node;
        }
        this.size++
        
    }

    findIndex(value) {
        let curr = this.head;
        let count = 0
        while(curr) {
            if(curr.data === value) {
                return `founded at position: ${count}`;
            }

            count++;
            curr = curr.next; 
        }

        return "not found"
    }

    print() {
        let curr = this.head
        let s = ""
        while (curr) {
            s += `${curr.data}`; 
            curr = curr.next;
            if (curr) { 
                s += " -> ";
            }
        }
        console.log(s)
    }



}

const list = new LinkedList()
// console.log("List is Empty? ", list.isEmpty())

// console.log("List Size: ", list.getSize())

list.append(10);
list.append(20);
list.append(30);
list.append(40);
console.log("List Size: " ,list.size)

list.addAt(2, 23)
list.addAt(-3, 13)
list.addAt(8, 60)
list.addAt(0, 0)

console.log(list.findIndex(10));
console.log(list.findIndex(40));
console.log(list.findIndex(1))

list.print();
