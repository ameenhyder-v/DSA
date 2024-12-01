
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        } else sortedArr.push(right.shift())
    }

    return [...sortedArr, ...left, ...right];
}

const arr = [38, 27, 43, 3, 9];
console.log(mergeSort(arr));