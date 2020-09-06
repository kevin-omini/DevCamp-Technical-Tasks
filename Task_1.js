function sumArray(array) {
  const evenArray = [];
  const oddArray = [];
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }

  for (let i = 0; i < evenArray.length; i++) {
    evenSum += evenArray[i];
  }

  for (let i = 0; i < oddArray.length; i++) {
    oddSum += oddArray[i];
  }

  const resultArray = [evenSum, oddSum];
  console.log(resultArray);
