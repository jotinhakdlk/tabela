//MUDA OS TITULOS
var paciente = document.querySelector(".container-titulo-dois");
paciente.textContent = "Meus pacientes";

var titulo = document.querySelector(".container-titulo");
titulo.textContent = "João Nutrição";

//SLECIONA PACIENTE
var paciente = document.querySelector("#primeiro-cliente");

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
var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = IMC;
console.log(IMC);