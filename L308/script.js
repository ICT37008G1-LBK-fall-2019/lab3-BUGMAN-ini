let number = prompt('რამდენი  კლიენტის  შეყვანა გსურთ');
let arr = [];
let i = 0;
let name;
while (i < number) {
    name = prompt('შეიყვანეთ კლიენტის  სახელი')
    arr.push(name);
    i++;
}

document.write(arr.reverse())