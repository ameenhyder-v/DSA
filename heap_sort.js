function heapify(arr, n, i) {
    let largest = i;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;

    if (leftChild < n && arr[leftChild] > arr[largest]){
        largest = leftChild;
    }
    if (rightChild < n && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}



function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
 
    for(let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0)
    }
    return arr;
}


const array = [12, 11, 13, 5, 6, 7];
heapSort(array);
console.log("Sorted array is:", array);  // Sorted array is: [ 5, 6, 7, 11, 12, 13 ]