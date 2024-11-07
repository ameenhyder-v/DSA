class Node {
    constructor (data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data)

        newNode.next = this.head;
        if(this.head) {
             this.head.prev = newNode;
        }
        this.head = newNode;
    }


    addLast(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head
        while(current.next) {
            current = current.next;
        }

        newNode.prev = current;
        current.next = newNode;
    }


    size() {
        let count = 0;
        let curr = this.head;
        while(curr) {
            count++
            curr = curr.next;
        }

        return count;

    }

    insertAt(index, data) {
        if(index < 0 || index > this.size()) {
            console.error("Invalid index");
            return
        }

        const newNode = new Node(data);
        if(index === 0) {
            newNode.next = this.head;
            if(this.head) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.prev = current;
        newNode.next = current.next;

        if (current.next) {
            current.next.prev = newNode;
        }

        current.next = newNode;
    }

    
}