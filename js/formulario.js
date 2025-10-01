
var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click',
    function (event){
        event.preventDefault();
        console.log('paciente adicionado');

        var form = document.querySelector('#form-adiciona');

        var paciente = dadosPacienteFormulario(form);
        console.log(paciente);

        var pacienteTr = criaTr(paciente);
        var tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr);
    }
);

function dadosPacienteFormulario(form){

//objeto = {
    //propriedade/caracteristica = valor,
    //propriedade/caracteristica = valor,
    //propriedade/caracteristica = valor
//}

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        IMC: calculaIMC(form.peso.value, form.altura.value)
    };

    return paciente;
}

function criaTr(paciente){
        //CRIA TAG <tr>
        var pacienteTr = document.createElement('tr');
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(criaTd(paciente. IMC, "info-imc"));

        return pacienteTr;
}

function criaTd(dado, classes){
    var td = document.createElement("td");
    td.innerText = dado;
    td.classList.add(classes);
    return td;
}