var myArr = new Array();
for (let i = 1; i < 51; i++) {
  myArr.push(i);
}

let evenArr = [];
myArr.forEach((element) => {
  if (checkEvenNumber(element)) {
    evenArr.push(element);
  }
  return evenArr;
});

function checkEvenNumber(num) {
  let remainder = num % 2;
  if (remainder === 0) {
    return true;
  }
  return false;
}

console.log(evenArr);
