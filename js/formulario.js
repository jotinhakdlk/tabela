
var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click',
    function (event) {
        event.preventDefault();
        console.log('paciente adicionado');

        var form = document.querySelector('#form-adiciona');

        var paciente = dadosPacienteFormulario(form);
        console.log(paciente);
        var pacienteTr = criaTr(paciente);

        var erros = validarPaciente(paciente);

        if (erros.length > 0) {
            var mensagem_erro = document.querySelector('#mensagens-erro');
            exibirMensagemErro(erros);
            console.log('Peso inválido!');
            return
        }

        var tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr);
    }
);

function dadosPacienteFormulario(form) {

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

function criaTr(paciente) {
    //CRIA TAG <tr>
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.IMC, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classes) {
    var td = document.createElement("td");
    td.innerText = dado;
    td.classList.add(classes);
    return td;
}



function validarPaciente(paciente) {
    var erros = [];
    
    if(paciente.nome.length ==0) erros.push ('O nome não pode estar vazio');
    if(paciente.gordura.length ==0) erros.push ('A gordura não pode estar vazia');
    if(paciente.peso.length ==0) erros.push ('O peso não pode estar vazio');
    if(paciente.altura.length ==0) erros.push ('A altura não pode estar vazia');
    if(!validarPeso(paciente.peso)) erros.push('Peso Inválido!');
    if(!validarAltura(paciente.altura)) erros.push('Altura Inválida!');

    return erros;
};

function exibirMensagemErro(erros){
    //adicionar cada item do array dentro da <ul>


    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = '';

    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.innerText = erro
        ul.appendChild(li);
    })
;
}

const nome = "nome do aluno"