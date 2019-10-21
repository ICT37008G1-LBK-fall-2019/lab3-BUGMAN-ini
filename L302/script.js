let p = document.querySelector('.why');
let p2 = document.querySelector('.me');
let str = 'YASUO MAINS ARE  ALL  RETARDS  GG WP  REP YASUO';
p.textContent = str;

if (str.length > 15) {
    p2.textContent = str.substr(0, 15) + ' ...'
}