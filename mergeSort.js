function mergeSort(arr) {
    const length = arr.length;
    if (length <= 1) return arr;
    middle = Math.floor(length / 2);
    arrLeft = arr.slice(0, middle);
    arrRight = arr.slice(middle);

    let i = 0; //left array
    let j = 0; //right array

    for (; i < length; i++) {
        if (i < middle) {
            arrLeft[i] = arr[i];
        }
        else {
            arrRight[j] = arr[i];
            j++;
        }
    }
    mergeSort(arrLeft);
    mergeSort(arrRight);
    merge(arrLeft, arrRight, arr);
};

function merge(arrLeft, arrRight, arr) {
    const leftSize = arr.length / 2;
    const rightSize = arr.length - leftSize;
    let i = 0, l = 0, r = 0;
    //check merge conditions
    while (l < leftSize && r < rightSize) {
        if (arrLeft[l] < arrRight[r]) {
            arr[i] = arrLeft[l];
            i++;
            l++;
        }
        else {
            arr[i] = arrRight[r];
            i++;
            r++;
        }
    }
    while (l < leftSize) {
        arr[i] = arrLeft[l];
        i++;
        l++;
    }
    while (r < rightSize) {
        arr[i] = arrRight[r];
        i++;
        r++;
    }
}

mergeSort([1,4,5,6,9,5,2,7,8,3,24]);