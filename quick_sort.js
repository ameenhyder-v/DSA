function quickSort(arr1, left = 0, right = arr1.length - 1) {
    let arr = arr1
    if(left < right) {
        const pivotIndex = partition(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}


function partition(arr, left, right) {
    const pivot = arr[left];

    let start = left;
    let end = right;

    while (start <= end) {
        while (arr[start] <= pivot) {
            start++
        }

        while (arr[end] > pivot) {
            end--
        } 
        
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }

    [arr[left], arr[end]] = [arr[end], arr[left]]
    return end;
}


const array = [8, 3, 1, 7, 0, 10, 2];
// console.log(quickSort(array))


function qsort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
          left.push(arr[i])  
        } else {
            right.push(arr[i])
        }
    }
    return [...qsort(left), pivot, ...qsort(right)]
}

console.log(qsort(array))

