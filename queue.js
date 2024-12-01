// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     // Enqueue element to the queue
//     enqueue(element) {
//         this.items.push(element);
//     }

//     // Dequeue element from the queue
//     dequeue() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.items.shift();
//     }

//     // Peek at the front element of the queue
//     front() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         return this.items[0];
//     }

//     // Check if queue is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Get the size of the queue
//     size() {
//         return this.items.length;
//     }

//     // Clear the queue
//     clear() {
//         this.items = [];
//     }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.dequeue()); // Output: 10
// console.log(queue.front());   // Output: 20
// console.log(queue.size());    // Output: 2

// class Queue {
//     constructor() {
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(val) {
//         this.items[this.rear] = val;
//         this.rear++;
//     }

//     dequeue() {
//         const item = this.items[this.front]
//         delete this.items[this.front];
//         this.front++
//         return item;
//     }

//     isEmpty() {
//         return this.rear - this.front === 0;
//     }

//     peek() {
//         return this.items[this.front];
//     }
    
//     getSize() {
//         return this.rear - this.front;
//     }

//     print() {
//         return this.items
//     }
// }

// const queue = new Queue()

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.getSize())

// console.log(queue.print())

// // queue.dequeue();

// console.log(queue.peek())



//! Circular Queue;

//* The size of the queue is fixed and a single block of memory is used as if the firse element is connected to the last element;
//* A circular queue is also referred to as circular buffer or ring buffer and follows the FIFO principle
//* A circular queue will reuse the empty block created during the dequeue operation
//* When working with queues of fixed macimun size, a circular queue is a great implimentation choice 
//* The Circular Queue data structure supports two main operaions 
//todo - Enqueue, Which adds an element to the rear/tail of the collection;
//todo - Dequeue, which removes an element from the front/head of the collection


class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(val) {
        if(!this.isFull()) {
            this.rear =(this.rear + 1) % this.capacity;
            this.items[this.rear] = val;
            this.currentLength += 1;
            if(this.front === -1) {
                this.front = this.rear;
            }
        } else {
            console.error("the queue is full");
        }
    }


    dequeue() {
        if(this.isEmpty()) {
            console.error("queue is empty")
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;

        if(this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        } 

        return item;
    }
    print() {
        console.log(this.items)
    }
}


const cQ = new CircularQueue(5);
cQ.enqueue(18);
console.log(cQ.front, cQ.capacity, cQ.rear)
cQ.enqueue(20);
console.log(cQ.front, cQ.capacity, cQ.rear)
cQ.enqueue(30);
cQ.enqueue(40);
cQ.enqueue(50);
cQ.print()
cQ.dequeue()
cQ.enqueue(45);


console.log(cQ.front, cQ.capacity, cQ.rear)
cQ.print()