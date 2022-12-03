var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    //var alvoEvento = event.target;
   // var paiEvento = alvoEvento.parentNode;
   // paiEvento.remove();
    

    setTimeout(function(){
        event.target.parentNode.remove()
    },500);
    //event.target.parentNode.remove();-Forma reduzida do código.(Não é necessário criar as variáveis acima)
});