let p = document.querySelector('.why');
let p2 = document.querySelector('.me');
let str = 'YASUO MAINS ARE  ALL  RETARDS  GG WP  REP YASUO';
p.textContent = str;

if (str.length > 15) {
    p2.textContent = str.substr(0, 15) + ' ...'
}
let lari = prompt('შეიყვანეთ რიცხვი');
let h2 = document.querySelector('h2');
let newlari;


if (lari.indexOf('L') === 0) {
    console.log(lari);
    newlari = lari.substr(1, 3);
    h2.textContent = newlari / 2.6 + ' დოლარში';
} else if (lari.indexOf('$') === 0) {
    newlari = lari.substr(1, 3);
    h2.textContent = newlari * 2.6 + ' ლარში';

} else {
    alert('აირჩიეთ ვალუტა')
}