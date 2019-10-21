let str = 'როგორ  ხვდება  ჩვენს  კომპიუტერში  trojian  და   სხვა  სახის  ვირუსები  რეკლამების სახით;
document.querySelector('p').textContent = str;
let myArr = ['რეკლამა', 'ვირუსი', 'მარკეტინგი']
let dontsay = [];
for (var i = 0; i < myArr.length; i++) {
    if (str.indexOf(myArr[i]) != -1) {
        dontsay.push(myArr[i])
    } else {
        continue;
    }
}
if (dontsay.length > 0) {
    alert('აკრძალული  სიტყვები: ' + dontsay);
} else {
    alert('Wassap')
}