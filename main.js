const inputBox = document.getElementById("inputBox");
const ListContainer = document.getElementById("ListContainer");
var error = document.getElementById("error");
function addTask(){
    if (inputBox.value === ''){
        error.innerHTML = "You must write something!";
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = '';
        error.innerHTML = '';
    }
    saveData();
}
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
ListContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();
