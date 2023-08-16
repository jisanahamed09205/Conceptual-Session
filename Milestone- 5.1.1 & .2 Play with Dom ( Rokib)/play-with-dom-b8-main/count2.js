// const clicked = document.getElementById('plus-btn')
// console.log(clicked)
// console.log('ami ki ')
// let count = 0;
// function clickMe(){
//     const element = document.getElementById('count');
//     count ++;
//     element.innerText = count;
// }
let count = 0;
const btn1 = document.getElementById('plus-btn');
btn1.addEventListener('click',function (){
    const element1 = document.getElementById('count');
    count ++;
    element1.innerText = count;
})
const btn2 = document.getElementById('minus-btn');
btn2.addEventListener('click',function (){
    if(count > 0) {
    const element2 = document.getElementById('count');
    count --;
    element2.innerText = count;
    }
})
const resetBtn = document.getElementById('btn-reset');
resetBtn.addEventListener('click', function (){
    count = 0;
    const element = document.getElementById('count');
    element.innerText = count;
});