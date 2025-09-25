
var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click',
    function (event){
        event.preventDefault();
        console.log('paciente adicionado');

        var form = document.querySelector('#form-adiciona');

        var paciente = dadosPacienteFormulario(form);
        console.log(paciente);

        //CRIA TAG <tr>
        var pacienteTr = document.createElement('tr');

        //CRIA AS TAGS <td>
        var nomeTd = document.createElement('td');
        var pesoTd = document.createElement('td');
        var alturaTd = document.createElement('td');
        var gorduraTd = document.createElement('td');
        var imcTd = document.createElement('td');

        //ADICIONA OS VALORES DIGITADOS A <td> CRIADA
        nomeTd.textContent = paciente.nome;
        pesoTd.textContent = paciente.peso;
        alturaTd.textContent = paciente.altura;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = IMC;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

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