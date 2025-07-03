var formEl = document.getElementById("meuForm");

//chama a função captura_eventos
captura_eventos(formEl,'submit',formValid);

//função para capturar eventos
function captura_eventos(objeto,evento,funcao){
    //Teste addEventListener
    if(objeto.addEventListener){
        objeto.addEventListener(evento,funcao,true)
    }
    //Tete attachEvent
    else if(objeto.attachEvent){
        var evento = 'on' + evento;
        objeto.attachEvent(evento,funcao)
    }
}

//função para cancelar eventos
function cancela_eventos(evento){
    if(event.preventDefault){
       event.preventDefault()

    }else{
        window.event.returnValue = false
    }
}

//Função que verifica os campos radio e checkbox
function verificaCampos(campo){
    //variavel que verifica os radios
    var checados = false;
    //verifica os radios
    for(var i =0; i<campo.length; i++){
        if (campo[i].checked)
            checados=true;
    }
    if(!checados){
        alert('Marque o campo' + campo[0].name);
        cancela_eventos(evento);
        return false;
    }
}

function formValid(event){
    //pega os campos text e select
    var campoNome=  formEl.textname.value,
    campocidade = formEl.cidades,
    campoRadios = formEl.sexo,
    campoCheckbox = formEl.rede;
    //verifica o campo de texto
    if(campoNome.length==0){
        alert("O campo Nome é obrigatório")
        return false
    }
    //laço que percorre todas as opçoes
    for(var i =0;i<campocidade.length; i++){
        if(campoCidade[i].selected){
            if(campoCidade[i].value ==""){
                alert('selecione uma opção')
                cancela_evento(evento)
            }
        }
    }

    //chama a funcao verifica campos para o radio
    verificaCampos(campoRadios);

    //chama a função verificacampos para o checkbox
    verificaCampos(campoCheckbox);

}




