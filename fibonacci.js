function fibs(n) {
  if (n === 0) console.log([0]);
  if (n === 1) console.log([0, 1]);
  let fibArr = [0, 1];
  for (let i = 2; i < n - 2; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  console.log("This was not printed recursively");
  console.log(fibArr);
  return fibArr;
}

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let fibArr = fibsRec(n - 1);
  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]); 
  console.log("This was printed recursively");
  console.log(fibArr);
  return fibArr;
}

fibs(8);
fibsRec(8);
