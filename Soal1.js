//Fungsi untuk membuat 100 nilai random 1-50
function randomNumbers() {
  let arrNumbers = [];

  for (let i = 0; i < 100; i++) {
    arrNumbers.push(Math.floor(Math.random() * 50 + 1))
  };
  return arrNumbers;
};

//Fungsi untuk membagi array menjadi ganjil dan genap  
function splitOddAndEven(num) {
  let arrOdd = [];
  let arrEven = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      arrEven.push(num[i]);
    } else {
      arrOdd.push(num[i]);
    };
  };
  const returnObject = {
    arrOdd,
    arrEven,
  };
  return returnObject;
};

//Fungsi untuk mencari nilai Minimal dan Maksimal setiap array
function findMinMaxNumbers(arr) {
  let minNumber = arr[0];
  let maxNumber = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    } else if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    };
  };
  const minMaxObject = {
    minNumber,
    maxNumber
  };
  return minMaxObject;
};

//fungsi untuk menghitung total dan rata-rata nilai
function totalAndAverageArray (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  
  let average = total / arr.length;
  
  return {
    total,
    average
  };
}

//-----OUTPUT------

//Pembuatan 100 nilai random 1-50
console.log(randomNumbers())

//Membagi array menjadi ganjil dan genap
console.log(splitOddAndEven(randomNumbers()));

//Mencari nilai max dan min pada array ganjil
console.log("Nilai Min dan Max Ganjil:", findMinMaxNumbers(splitOddAndEven(randomNumbers()).arrOdd));

//Mencari nilai max dan min pada array genap
console.log("Nilai Min dan Max Genap:", findMinMaxNumbers(splitOddAndEven(randomNumbers()).arrEven));

//Mencari total nilai pada array ganjil
console.log("Total nilai array ganjil:", totalAndAverageArray(splitOddAndEven(randomNumbers()).arrOdd).total);

console.log("Rata-rata nilai array ganjil:", totalAndAverageArray(splitOddAndEven(randomNumbers()).arrOdd).average);

// Mencari total nilai pada array genap
console.log("Total nilai array genap:", totalAndAverageArray(splitOddAndEven(randomNumbers()).arrEven).total);

console.log("Rata-rata nilai array genap:", totalAndAverageArray(splitOddAndEven(randomNumbers()).arrEven).average);
