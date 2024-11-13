let array = [3, 4, 1, -6, 7, 9, 2]

function selectionSort(arr1) {
    let arr = [...arr1];

    for(let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}


console.log(selectionSort(array));


function selectionS(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp
        }

    }

    
    return arr;
}


console.log(selectionS(array))


