function seqSearch(arr, data) {
    for (var i=0; i<arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

function seqSearchBoolean(arr, data) {
    for (var i=0; i<arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

function findMin(arr) {
    var min = arr[0];
    for (var i=1; i<arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    var max = arr[0];
    for (var i=1; i<arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}