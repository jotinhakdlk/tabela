//MUDA OS TITULOS
var tsecundario = document.querySelector(".container-titulo-dois");
tsecundario.textContent = "Meus pacientes";

var titulo = document.querySelector(".container-titulo");
titulo.textContent = "João Nutrição";

//SELECIONA PACIENTE
var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    //OBTÉM O VALOR PESO
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //OBTÉM O VALOR ALTURA
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //CALCULA IMC
    var IMC = calculaIMC(peso, altura);

    //VALORES BOOLEANOS
    var pesoValido = true;
    var alturaValida = true;

    //AVISO DE VALOR INVÁLIDO
    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.innerText = IMC;
    }



    //ALERTAS DE PESO/ALTURA INVÁLIDA
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        alert("Peso inválido!");
        tdIMC.textContent = 'Peso inválido!';
        paciente.classList.add('paciente_invalido');
    }

    if(altura < 0 || altura > 3.00){
        var alturaValida = false;
        alert("Altura inválida!");
        tdIMC.textContent = 'Altura inválida!';
        paciente.classList.add('paciente_invalido');
    }
};

function calculaIMC(){
    var imc = peso / (altura * altura);
    
    return imc.toFixed(2);
};