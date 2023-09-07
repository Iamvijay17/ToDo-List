let button = document.getElementById('add')
let display = document.getElementById('display')
let input = document.getElementById('input');


let datas = [];
window.onload = ()=>{
    datas = JSON.parse(localStorage.getItem('datas')) || []
    datas.forEach(data=>adddata(data))
}

button.addEventListener('click',()=>{
    datas.push(input.value)
    localStorage.setItem('datas',JSON.stringify(datas))
    adddata(input.value)
    input.value=''
})

function adddata(data){
    let para = document.createElement('p');
    para.innerText = data;
    display.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(data)
    })
    para.addEventListener('dblclick',()=>{
        display.removeChild(para)
        remove(data)
    })
}

function remove(data){
    let index = datas.indexOf(data)
    if (index > -1) {
        datas.splice(index, 1);
      }

    localStorage.setItem('datas',JSON.stringify(datas))
}
