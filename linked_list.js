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

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }


    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node
        }

        this.size++;
    }


    
    // prepend(value) {
    //     const node = new Node(value);
        
    //     if(!this.isEmpty()) {
    //         node.next = this.head
    //     }

    //     this.head = node
    //     this.size++
    // }

    prepend(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++
    }

    printList() {
        if(this.isEmpty()) {
            console.log("This linked list is empty!")
        } else {
            let curr = this.head;
            let listValues = "";
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValues)
        }
    }

}

const list = new LinkedList()
console.log("List is Empty? ", list.isEmpty())

console.log("List Size: ", list.getSize())

list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("List Size: ", list.getSize())

list.printList()
