let array = [5, 6, 3, -4, 7, 88, 35, 0, 1]


//! Sort Descending order "Bubble Sort"
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swaped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaped = true;
            }
        }
        if(!swaped) break;
    }
}


//! Sort Ascending Order "Bubble Sort"
function bubSo(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swaped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaped = true;
            }
        }

        if(!swaped) break;
    }
}

bubSo(array);
console.log("-------------------------------------");
console.log(array)



//! Sort Ascending Order "Bubble Sort" (using Do While loop)

let array1 = [5, 6, 3, -3, 1, 0]


function bubbleSortDoWhile(arr) {
    let swapped;
    do {
        swapped = false;
        let count = 0
        for(let i = 0; i < arr.length - 1 - count; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        count++
    } while (swapped)

}

bubbleSortDoWhile(array1)


console.log(array1)


function bubSort(arr) {
    for (let i = 0; i < arr.lenght - i; i++) {
        let swaped = false;

        for (let j = 0; j < arr.lenght - i - 1; j++) {
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swaped = true;
            }
        }

        if (!swaped) break;
    }
    return arr
}


