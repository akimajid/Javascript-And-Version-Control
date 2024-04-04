function randomNumbers() {
  let arrNumbers = [];
  
  for (let i = 0; i < 100; i++) {
    arrNumbers.push(Math.floor(Math.random() * 50 + 1))
  }
  return arrNumbers
}

function splitOddAndEven(num) {
  let arrOdd = [];
  let arrEven = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      arrEven.push(num[i]);
    } else {
      arrOdd.push(num[i]);
    }
  }
  const returnObject = {
    arrOdd,
    arrEven,
  };
  return returnObject;
}

console.log(splitOddAndEven(randomNumbers()));