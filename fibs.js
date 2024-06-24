const fibs = (n) => {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};

const fibsRec = (n, arr = [0, 1]) => {
  if (arr.length >= n) {
    return arr.slice(0, n);
  }

  arr.push(arr.at(-1) + arr.at(-2));
  return fibsRec(n, arr);
};

console.log(fibs(8));
console.log(fibsRec(8));
