var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
// Extraindo informações do paciente do form dirato da página principal
   var paciente = dadosDoPaciente(form);
    
// Cria a tr e a td do paciente
    
var pacienteTr = montaTr(paciente);

var erros = validaPaciente(paciente);

if(erros.length > 0 ){
    exibeMensagensDeErro(erros)
    return;
}
    
// Adicionando o paciente na tabela
 adicionaPacienteNaTabela(paciente);
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);  
    });
}

function dadosDoPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
           
    }
    return paciente;
 }

 function montaTr(paciente){
 var pacienteTr = document.createElement("tr");
 pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montatd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montatd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montatd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montatd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montatd(paciente.imc,"info-imc"));

return pacienteTr;
}

function montatd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add = (classe);
    
    return td;
}

function validaPaciente(paciente){

var erros = [];

if (paciente.nome.length == 0){
    erros.push("O campo nome não pode ser em branco");
}

    if(!validapeso(paciente.peso)){
        erros.push("Peso inválido");
}

if(!validaAltura(paciente.altura)){
    erros.push("Altura inválida");
}

if (paciente.gordura.length == 0){
    erros.push("O campo gordura não pode ser em branco");
}

if (paciente.peso.length == 0){
    erros.push("O campo peso não pode ser em branco");
}

if (paciente.altura.length == 0){
    erros.push("O campo altura não pode ser em branco");
}

return erros;
}
        

       


    