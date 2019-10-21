let number = prompt('რამდენი მომხმარებლის შეყვანა გსურთ');
let arr = [];
let i = 0;
let name;
while (i < number) {
    name = prompt('შეიყვანეთ სახელი')
    arr.push(name);
    i++;
}

document.write(arr.sort())