const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const arrMiddle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, arrMiddle);
  const arrRight = arr.slice(arrMiddle, arr.length);

  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

const merge = (arrLeft, arrRight) => {
  const sorted = [];
  let i = 0;
  let j = 0;

  while (i < arrLeft.length && j < arrRight.length) {
    if (arrLeft[i] < arrRight[j]) {
      sorted.push(arrLeft[i]);
      i++;
    } else {
      sorted.push(arrRight[j]);
      j++;
    }
  }

  while (i < arrLeft.length) {
    sorted.push(arrLeft[i]);
    i++;
  }

  while (j < arrRight.length) {
    sorted.push(arrRight[j]);
    j++;
  }

  return sorted;
};

console.log(mergeSort([5]));
console.log(mergeSort([3, 2, 1, 18, 8, 5, 0, 1]));
