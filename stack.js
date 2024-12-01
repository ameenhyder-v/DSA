class Stack {
    constructor() {
        this.items = [];
    }

    // Push element to the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
// console.log(stack.pop());    // Output: 30
// console.log(stack.peek());   // Output: 20
// console.log(stack.size());   // Output: 2


//! Stack work like Queue or Queue using Stack

class QueueStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(value) {
        this.stack1.push(value);
    }

    pop(value) {
        if(this.stack1.length === 0) return "This stack is empty"
        while(this.stack1.length >= 1){
            this.stack2.push(this.stack1.pop())
        }

        return this.stack2.pop()
    }
}


let queueStack = new QueueStack()

queueStack.push(10);
queueStack.push(20);
queueStack.push(30);
queueStack.push(40);

console.log(queueStack.pop())
console.log(queueStack.pop())
console.log(queueStack.pop())
console.log(queueStack.pop())
console.log(queueStack.pop())