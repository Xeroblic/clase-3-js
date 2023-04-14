


function alerta(){
    var elemento = document.getElementById("prueba").value;
    alert(elemento);

}

function imgAlerta(){
    alert("EasterEgg!");

}

function imgAlertaO(){
    alert("Adios");

}

function cargado(){
    alert("Página cargada");

}

//&& = y and || or u o != diferente de === igual a


function alertaTexto(){
    var texto = document.getElementById("cuadro-texto").value;
    if(texto!=""){
        document.getElementById("texto").innerHTML = "Escribiste!";
    }   

}

function reestablecer(){
    document.getElementById("texto").innerHTML = "";
    document.getElementById("prueba").value = '';
    document.getElementById("cuadro-texto").value = '';
}


function calcular(){
    var operacion = parseInt(document.getElementById("prueba").value);
    var numero1 = parseInt(document.getElementById("cuadro-texto1").value);
    var numero2 = parseInt(document.getElementById("cuadro-texto2").value);
    


    if (operacion === 1){
        var resultado = numero1 * numero2;
        alert(resultado);
    }
    else if(operacion === 2){
        var resultado = numero1 / numero2;
        alert(resultado);
    }
    else if(operacion === 3){
        var resultado = numero1 + numero2;
        alert(resultado);
    }
    else if(operacion === 4){
        var resultado = numero1 - numero2;
        alert(resultado);
    }
    else{
        alert("seleccione un elemento");
    }

}