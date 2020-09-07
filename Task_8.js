function searcher(num) {
  //create the number and result array
  const numberArray = [];
  const resultArray = [];

  for (let i = 0; i <= num + 1; i++) {
    //fill the number array with data
    numberArray.push(i);

    //checks for 3s in the number array and fills in the result array
    if (String(numberArray[i]).indexOf("3") !== -1) {
      resultArray.push(i);
    }
  }
  //creates the object of required data
  const result = {
    count: resultArray.length,
    number: resultArray
  }
  console.log(result);
}
