function MergeSort(arr) {
    let length = arr.length;
    if(length === 1) {
        return arr;
    }
    let middle = Math.floor(length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, length);

    function merge(left, right) {
        let result = [];
        while(left.length && right.length) {
            if( left[0] <= right[0] ) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while(left.length) {
            result.push(left.shift());
        }

        while(right.length) {
            result.push(right.shift());
        }

        return result;
    }

    return merge(MergeSort(left), MergeSort(right));
}
