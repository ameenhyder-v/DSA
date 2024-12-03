//! ********************************** HEAP IN DS *************************************************
//? Min - Heap

class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[index]) break;

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    remove() {
        if (this.heap.length === 0) return null;

        const root = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return root;
    }

    heapifyDown() {
        let index = 0; 

        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }
}


let h = new MinHeap();

h.insert(10);
h.insert(20);
h.insert(30);
h.insert(12);
h.insert(15);
h.insert(11);
h.insert(1)

h.remove()
h.remove()
h.remove()

console.log(h.heap)