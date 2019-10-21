let question = prompt('სიტყვების რაოდენობა');
let i = 0;
let myArray = [];
while (i < question) {
    let words = prompt('სასურველი  სიტყვა');
    myArray.push(words);
    i++;

}
let newWord = '';
console.log(myArray)
if (question == i) {
    newWord = prompt('რას ეძებთ');
}

let lastArray = []
for (var j = 0; j < myArray.length; j++) {
    if (myArray[j].indexOf(newWord) != -1) {
        lastArray.push(myArray[j])
    }
}

console.log('ჰმმ...ვერა?', lastArray);