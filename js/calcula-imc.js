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
    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);    

        var tdIMC = paciente.querySelector(".info-imc");

    //AVISO DE VALOR INVÁLIDO

    if(pesoValido && alturaValida){
        tdIMC.innerText = IMC;
    }

    //ALERTAS DE PESO/ALTURA INVÁLIDA
    if(!validarPeso(peso)){
        var pesoValido = false;
        alert("Peso inválido!");
        tdIMC.textContent = 'Peso inválido!';
        paciente.classList.add('paciente_invalido');
    }

    if(!validarAltura(altura)){
        var alturaValida = false;
        alert("Altura inválida!");
        tdIMC.textContent = 'Altura inválida!';
        paciente.classList.add('paciente_invalido');
    }
};

function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
};

function validarPeso(peso){
    if (peso >= 0 && peso <=1000){
    return true;
    }else{
        return false;
    }
};

function validarAltura(altura){
    if (altura > 0 && altura < 4.0){
        return true;
        }else{
            return false;
        }
};