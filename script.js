debugger
function createDiv() {
    let div = document.createElement('div');
    div.className = "submit";
    div.id = "id_" + i;
    div.addEventListener('click', myFunc);
    return div;
}

for (var i = 0; i < 10; i++) {
    document.body.appendChild(createDiv());
}

let buttonClick = document.querySelectorAll('.submit');


function myFunc() {
    document.querySelector("#id_1").remove();
    
    alert();
}