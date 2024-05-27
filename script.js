let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7"); 
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function getDataAtual() {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function addElemento() {
    let inputValue = document.getElementById("tarefa").value.toUpperCase();
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
        return;
    }
    let li = document.createElement("li");
    let data = getDataAtual();
    let texto = `- ${inputValue}(${data})`;
    let t = document.createTextNode(texto);

    let inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("class", "data-tarefa");

    li.appendChild(t);
    li.appendChild(inputDate);

    document.getElementById("itemLista").appendChild(li);

    document.getElementById("tarefa").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}


function limparLista() {
    let lista = document.getElementById("itemLista");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

