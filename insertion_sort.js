let array = [3, 2, 1, 45, -4, 10]



function insertionSort(arr1) {
    let arr = [...arr1];

    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}


//! using array method (splice)

function insertionSortMethods(arr1){

    let arr = [...arr1];
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            j--;
        }

        arr.splice(i, 1);
        arr.splice(j + 1, 0, temp);
    }

    return arr;
}




console.log( "insertion : ", insertionSort(array))
console.log("insertion : ", insertionSortMethods(array))
console.log(array)


