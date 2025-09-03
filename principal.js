//MUDA OS TITULOS
var tsecundario = document.querySelector(".container-titulo-dois");
tsecundario.textContent = "Meus pacientes";

var titulo = document.querySelector(".container-titulo");
titulo.textContent = "João Nutrição";

//SELECIONA PACIENTE
var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    
    //OBTÉM O VALOR PESO
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    console.log(peso);

    //OBTÉM O VALOR ALTURA
    var tdAltura = document.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    console.log(altura);

    //CALCULA IMC
    var IMC = peso / (altura * altura);

    //VALORES BOOLEANOS
    var pesoValido = true;
    var alturaValida = true;

    //AVISO DE VALOR INVÁLIDO
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        alert("Peso inválido!");
    }

    if(altura < 0 || altura > 3.00){
        var alturaValida = false;
        alert("Altura inválida!");
    }

    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = IMC;
    }
}

