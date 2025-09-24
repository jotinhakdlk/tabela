
var addPaciente = document.querySelector('#adicionar-paciente');

addPaciente.addEventListener('click',
    function (event){
        event.preventDefault();
        console.log('paciente adicionado');

        var form = document.querySelector('#form-adiciona');

        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;
        
        //CRIA TAG <tr>
        var pacienteTr = document.createElement('tr');

        //CRIA AS TAGS <td>
        var nomeTd = document.createElement('td');
        var pesoTd = document.createElement('td');
        var alturaTd = document.createElement('td');
        var gorduraTd = document.createElement('td');
        var imcTd = document.createElement('td');

        //ADICIONA OS VALORES DIGITADOS A <td> CRIADA
        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        imcTd.textContent = IMC;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        var tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr)
    }
);