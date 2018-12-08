// Binary Search

function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

// Max Stock Profit

function maxStockProfit(prices){
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeByPrice = true;

  for(var i=0; i<prices.length; i++){
    if(changeByPrice) buyPrice = prices[i];
    sellPrice = prices[i+1];

    if(sellPrice < buyPrice){
      changeByPrice = true;
    }else{
      var tempProfit = sellPrice - buyPrice;
      if(tempProfit > maxProfit){
        maxProfit = tempProfit;
      }
      changeByPrice = false;
    }
  }
  return maxProfit;
}


maxStockProfit([5,3,8,2,1,4])

// Merge Sort

function mergeSort(arr){
  if(arr.length<2){
    return arr;
  }
  var middleInd = Math.floor(arr.length/2);
  var firstHalf = arr.slice(0, middleInd);
  var secondHalf = arr.slice(middleInd);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(sortedArr1, sortedArr2){
  var result = [];
  while(sortedArr1.length && sortedArr2.length){
    var minElem;
    if(sortedArr1[0] < sortedArr2[0]){
      minElem = sortedArr1.shift();
    }else{
      minElem = sortedArr2.shift();
    }
    result.push(minElem);
  }
  if(sortedArr1.length) {
    result = result.concat(sortedArr1);
  }else{
    result = result.concat(sortedArr2);
  }
  return result;
}

console.log(mergeSort([5,3,8,2,1,4]))
// Bubble Sort
function bubbleSort(arr){
  for(var i=arr.length; i>0; i--){
    for(var j=0; j<i; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
}
bubbleSort([5,3,8,2,1,4]);

// Sieve of Eratostenes

function sieveOfErathosthenes(num){
  let primeArray = [];
  let results = [];
  for(let i=0; i<num; i++){
    primeArray[i] = true;
  }
  primeArray[0] = false;
  primeArray[1] = false;

  for(let i=2; i<Math.sqrt(num); i++){
    for(let j=2; j*i<num; j++){
      primeArray[i*j] = false;
    }
  }

  for(let i=0; i<num; i++){
    if(primeArray[i]){
      results.push(i);
    }
  };
  return results;
}

sieveOfErathosthenes(20);


// Memoized fibonacci the best

function fibMemo(index, cache){
  cache = cache || [];
  if(cache[index]){
    return cache[index];
  }
  else{
    if(index<3){
      return 1;
    }else{
      cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache);
    }
  }
  return cache[index];
}

fibMemo(50);

// Memoized fibonacci
function fibMemo(index){
  let arr = [];
  for(let i=1; i<=index; i++){
    if(i<3){
      arr[i] = 1;
    }else{
      arr[i] = arr[i-1] + arr[i-2];
    }
  }
  return arr[index];
}

fibMemo(50);

// fibonacci
function fibonacci(position){
  if(position<3){
    return 1;
  }
  return fibonacci(position-1) + fibonacci(position-2);
}
console.log(fibonacci(5))

// return sum of two
function twoSum(numArray, sum){
  let pairsArr = [];
  let hashTable = [];
  for(let i=0; i<numArray.length; i++){
    let curNum = numArray[i];
    let counterPart = sum - curNum;
    if(hashTable.indexOf(counterPart) !== -1){
      pairsArr.push([curNum, counterPart]);
    }
    hashTable.push(curNum);
  }
  return pairsArr;
}

twoSum([1,2,4,5,10,3,2,1], 12);

// Get MeanMedianMode
function getMean(arr){
  let sum = 0;
  arr.forEach((val) => {
    sum+=val;
  });
  return sum/arr.length;
}

function getMedian(arr){
  arr.sort((a,b) => {
    return a-b;
  });
  if(arr.length % 2 !== 0){
    return arr[Math.floor(arr.length/2)];
  }else{
    return (arr[arr.length/2] + arr[arr.length/2 -1]) / 2;
  }
}
function getMode(arr){
  let modeObj = {};
  arr.forEach((val) => {
    if(modeObj[val] >= 0){
      modeObj[val]++;
    }else{
      modeObj[val]=0;
    }
    modeObj;
  });
  var maxFreq = 0;
  var modes = [];
  for(var num in modeObj){
    if(modeObj[num] > maxFreq){
      modes = [num];
      maxFreq = modeObj[num];
    }else if(modeObj[num] == maxFreq){
      modes.push(num);
    }
  }
  if(modes.length === Object.keys(modeObj).length){
    modes = [];
  }
  return modes;
}
function meanMedianMode(arr){

  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}
console.log(meanMedianMode([1,2,3,4,5,6,7,7,9]));
// Reverse Array

function reverseArray(arrayToReverse){
  for(var i=0; i<(arrayToReverse.length/2); i++){
    let tempVal = arrayToReverse[i];
    let lastIndex = (arrayToReverse.length-1);
    arrayToReverse[i] = arrayToReverse[(lastIndex-i)];
    arrayToReverse[(lastIndex-i)] = tempVal;
  }
  console.log(arrayToReverse);
}

console.log(reverseArray([1,2,3,4,5,6,7,7,9]));

// Reverse Word

function reverseWord(sentence){
  var wordsArr = sentence.split(" ");
  wordsArr.forEach(function(val, index){
    let reversedWord = val.split('').reverse().join('');
    wordsArr[index] = reversedWord;
  })
  return wordsArr.join(" ");
}
console.log(reverseWord('Shalva Gelenidze'))

// Caecar Cipher
function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };

  return newString;
}
caesarCipher('Zoo Keeper', 2);



// Polindrome
function isPolindrome(word){
  word = word.toLowerCase();
  charactersArr = word.split('');
  var validCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'w'];
  var lettersArr = [];
  charactersArr.forEach((val) => {
    if(validCharacters.indexOf(val) > -1){
      lettersArr.push(val);
    }
  });
  if(lettersArr.join('') === lettersArr.reverse().join('')){
    return true;
  }else{
    return false;
  }

}
isPolindrome('race asad')

//Harmless Ronsome
function harmlessRonsome(noteText, magazineText){
  var noteArray = noteText.split(' ');
  var magazineArray = magazineText.split(' ');
  magazineObj = {};
  magazineArray.forEach(function(val){
    if (!magazineObj[val]) {magazineObj[val] = 0};
    magazineObj[val]++;
  });
  var notePossible = true;
  noteArray.forEach((val) => {
    if(!magazineObj[val]){
      notePossible = false;
    }else{
      magazineObj[val]--;
    }
  })
  return notePossible;
  console.log(magazineObj);
}
harmlessRonsome("This is a main", "This is a this is a this is the main texti shmeqsti in shmeqsti teqsti");

FizzVuzz
function fizBuzz(num){
  for(var i=1; i<=num; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }
    else if(i % 5 === 0){
      console.log("Buzz");
    }
    else if(i % 3 === 0){
      console.log("Fizz");
    }
    else{
      console.log(i)
    }
  }
}
fizBuzz(30);
