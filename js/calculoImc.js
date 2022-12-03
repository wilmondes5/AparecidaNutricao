
var titulo = document.querySelector(".titulo"); 
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i ++){ 

    var paciente = pacientes[i];
 
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    
    var tdimc = paciente.querySelector(".info-imc");
    
    var pesoehvalido = validapeso(peso);
    var alturaehvalida = validaAltura(altura);
    
    if (!pesoehvalido){
        console.log("Peso inválido");
        pesoehvalido = false;
        tdimc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-inválido");
    }
    if(!alturaehvalida){
        console.log("Altura inválida");
        alturaehvalida = false;
        tdimc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-inválido");
    }
    if(alturaehvalida && pesoehvalido){
        var imc = calculoImc(peso,altura);
        tdimc.textContent = imc;
    }
}

function calculoImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validapeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}


