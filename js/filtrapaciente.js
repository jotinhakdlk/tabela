const campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){


    const pacientes = document.querySelectorAll(".paciente");
    for(let i = 0; i < pacientes.length; i++){
        let paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.innerText;
    }
});