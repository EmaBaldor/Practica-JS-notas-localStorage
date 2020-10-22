
 window.onload = iniciar;
 
 function iniciar(){
    var btnAgregar = document.getElementById("BtnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)

    var btnBorrar = document.getElementById("BtnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar)
}

function clickBtnAgregar() {
//traemos txtNotas
    var txtNota = document.getElementById("txtNota");

    var notas = [];
    if (localStorage.notas){
        notas = JSON.parse(localStorage.notas);
    }  
    notas.push(txtNota.value);

//queda asignado a localstorage
//con JSON.stringify transformo arreglo a strig
    localStorage.notas = JSON.stringify(notas);
    mostrarNotas();
    
}

function clickBtnBorrar() {
    
    //borro el localstorage
    localStorage.clear();
    mostrarNotas();
        
    }

function mostrarNotas(){
//tre el div notas
    var divNotas = document.getElementById("divNotas");
    //le asigna notas desde localstorage
    var notas = [];
    if (localStorage.notas){
        notas = JSON.parse(localStorage.notas);
    } 
    var html = "";
    for (var nota of notas){
        html += nota + "<br/>";
    }  
    divNotas.innerHTML = html;
}
