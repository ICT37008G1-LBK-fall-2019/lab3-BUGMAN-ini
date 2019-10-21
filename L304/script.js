let number = prompt('შეიყვანეთ რაოდენობა');
let arr = [];
let i = 0;
let name;
while (i < number) {
    name = prompt('შეიყვანეთ სახელი')
    arr.push(name);
    i++;
}

document.write(arr)