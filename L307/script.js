let firstPrompt = prompt('მოსწავლეების  რაოდენობის არჩევა პირველ ჯგუფში');

let i = 0;
let firstArr = []
let secAr = [];
let names;

while (i < firstPrompt) {
    names = prompt('შეიყვანეთ მათი სახელები');
    firstArr.push(names);
    i++;
}
if (i == firstPrompt) {
    let secPrompt = prompt('მოსწავლეების  რაოდენობის არჩევა  მეორე ჯგუფში');
    let j = 0;
    while (j < secPrompt) {
        var secNames = prompt('მეორე ჯგუფის  მოსწავლეების  სახელები');
        secAr.push(secNames);
        j++;

    }
}
let mainArr = [...firstArr, ...secAr];
let listingArr = []

document.write('First List: ' + firstArr);
document.write('<br>');
document.write('Second List: ' + secAr);
document.write('<br>');
for (let k = 0; k < mainArr.length; k++) {

    if (listingArr.indexOf(mainArr[k]) === -1) {
        listingArr.push(mainArr[k]);
    }


}
document.write('Main List: ' + listingArr)