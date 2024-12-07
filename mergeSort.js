function merge(firstArray, secondArray) {
    const mergedArray = [];
    let firstIndex = 0;
    let secondIndex = 0;

    while (firstIndex < firstArray.length && secondIndex < secondArray.length) {
        if (firstArray[firstIndex] < secondArray[secondIndex]) {
            mergedArray.push(firstArray[firstIndex]);
            firstIndex++;
        } else {
            mergedArray.push(secondArray[secondIndex]);
            secondIndex++;
        };
    };

    while (firstIndex < firstArray.length) {
        mergedArray.push(firstArray[firstIndex]);
        firstIndex++;
    };

    while (secondIndex < secondArray.length) {
        mergedArray.push(secondArray[secondIndex]);
        secondIndex++;
    };

    return mergedArray;
}

console.log(merge([1, 2, 10, 13], [8, 9, 20, 23]));

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const middleOfArray = Math.floor(array.length / 2);
  
    const leftSideOfArray = mergeSort(array.slice(0, middleOfArray));    
    const rightSideOfArray = mergeSort(array.slice(middleOfArray));    
   
    return merge(leftSideOfArray, rightSideOfArray);
}

const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];

console.log(mergeSort(array1));
console.log(mergeSort(array2));
