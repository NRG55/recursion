//--------------MERGE verson 1---------------
// Functions merge and mergeVersionTwo merge two sorted arrays 

function merge(firstArray, secondArray) {
    const mergedArray = [];
    let firstArrayIndex = 0;
    let secondArrayIndex = 0;

    while (firstArrayIndex < firstArray.length && secondArrayIndex < secondArray.length) {
        if (firstArray[firstArrayIndex] < secondArray[secondArrayIndex]) {
            mergedArray.push(firstArray[firstArrayIndex]);
            firstArrayIndex++;
        } else {
            mergedArray.push(secondArray[secondArrayIndex]);
            secondArrayIndex++;
        };
    };

    while (firstArrayIndex < firstArray.length) {
        mergedArray.push(firstArray[firstArrayIndex]);
        firstArrayIndex++;
    };

    while (secondArrayIndex < secondArray.length) {
        mergedArray.push(secondArray[secondArrayIndex]);
        secondArrayIndex++;
    };

    return mergedArray;
}

//-------------MERGE Version 2----------------

function mergeVersionTwo(leftArray, rightArray) {
    let mergedArray = [];
  
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
        mergedArray.push(leftArray.shift());
      } else {
        mergedArray.push(rightArray.shift());
      }
    }  
    return [...mergedArray, ...leftArray, ...rightArray];
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const middleOfArray = Math.floor(array.length / 2);
  
    const leftSideOfArray = array.slice(0, middleOfArray);    
    const rightSideOfArray = array.slice(middleOfArray);     
    
    return merge(mergeSort(leftSideOfArray), mergeSort(rightSideOfArray));
}

const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];

console.log(mergeVersionTwo([1, 2, 10, 13], [8, 9, 20, 23, 24, 63]));

console.log(mergeSort(array1));
console.log(mergeSort(array2));

