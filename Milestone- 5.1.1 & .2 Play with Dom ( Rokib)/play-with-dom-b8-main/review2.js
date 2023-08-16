// console.log('connected');
document.getElementById('btn-submit').addEventListener('click',function (){
    // console.log('clicked');
    const textAreaElement = document.querySelector("#text-area");
    const areaValue = textAreaElement.value;

    const p = document.createElement('p');
    p.innerText = areaValue;
    const container = document.querySelector("#review");
    container.appendChild(p);
    document.querySelector("#text-area").value = "";
})
document.querySelector('#text-area').addEventListener('keyup',function (event){
    if(event.key === 'Enter'){
        const textAreaElement = document.querySelector("#text-area");
    const areaValue = textAreaElement.value;

    const p = document.createElement('p');
    p.innerText = areaValue;
    const container = document.querySelector("#review");
    container.appendChild(p);
    document.querySelector("#text-area").value = "";
    }
})