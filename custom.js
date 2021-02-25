let listTask = [];


let input = document.getElementById("input");
let btnAdd = document.getElementById("addTodoList");
let ul = document.getElementById("list");

let newTaskContent = '';

btnAdd.addEventListener('click',()=>{
    showListFull();
})

input.addEventListener('input',()=>{
    newTaskContent = input.value;
})
input.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        showListFull();
    }
})

input.addEventListener('keyup',()=>{
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        //a = li[i].getElementsByTagName("a")[0];
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
        console.log(li[i].textContent.toUpperCase().indexOf())
      }

})

// input.addEventListener('click',()=>{
//     input.value = '';
// })


function addList(value, index){
    //add li
    let li = document.createElement('li');
    li.className = (index % 2 == 0) ? 'odd' :'even';
    li.innerText = value;

    //add button delete
    let button = document.createElement('span');
    button.innerText = 'x';

    ul.appendChild(li);
    li.appendChild(button);
    storeData();

    button.addEventListener('click',()=>{
        listTask.splice(index, 1);
        renderList(listTask);
        storeData();
    });
}

function renderList(arr){
   ul.innerHTML = '';
   arr.forEach(addList);
}

function showListFull(){
    if (!newTaskContent) {
        alert('Bạn fải nhập nội dung')
        return;
    }
    listTask.push(newTaskContent);
    renderList(listTask);
    newTaskContent = '';
    input.value = '';
}

function storeData() {
    localStorage.setItem('text', JSON.stringify(listTask));
}

function fetchData() {
    let data = localStorage.getItem('text');
    data = JSON.parse(data);
    listTask = data;
    renderList(listTask); 
}

fetchData()
