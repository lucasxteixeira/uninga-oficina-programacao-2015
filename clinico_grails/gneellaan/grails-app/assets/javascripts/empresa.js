/*
 |--------------------------------------------------
 | tipoEmpresa
 |--------------------------------------------------
 | Exibe os campos de cadastro de pessoa fisica
 | ou juridica a partir do valor do select de nome
 | tipo_empresa.
 |
 | 0 - Juridica
 | 1 - Fisica
 | 2 - Esconde todos
 |
 | @params tipo String um valor de 0 a 2 que define a ação a ser executada
 |	
 */

function tipoEmpresa(tipo) {
    switch(tipo){
        /*
         * Exibe os campos de cadastro de pessoa juridica
         */
        case "0":
            document.getElementById("juridica").style.display = "block";
            document.getElementById("fisica").style.display = "none";
            document.getElementById("cnpj").required = true;
            document.getElementById("razao").required = true;
            document.getElementById("ie").required = true;
            document.getElementById("cpf").required = false;
            document.getElementById("rg").required = false;
            break;
        /*
         * Exibe os campos de cadastro de pessoa fisica
         */
        case "1" :
            document.getElementById("fisica").style.display = "block";
            document.getElementById("juridica").style.display = "none";
            document.getElementById("cnpj").required = false;
            document.getElementById("razao").required = false;
            document.getElementById("ie").required = false;
            document.getElementById("cpf").required = true;
            document.getElementById("rg").required = true;
            break;
        /*
         * Esconde os campos de cadastro de pessoa fisica e juridica
         */
        case "2" :
            document.getElementById("fisica").style.display = "none";
            document.getElementById("juridica").style.display = "none";
            break;	
    }
};

/*
 |--------------------------------------------------
 | getEndereco
 |--------------------------------------------------
 | retorna as informações referentes ao cep utilizando
 | o web service da correiocontrol.
 |
 | @params cep String o cep ainda com -
 |	
 */

function getEndereco(field) {
    var brancos;
    var cep = field.value;
    for (var i = 0; i <= cep.length-1; i++) {
        if(cep.substring(i,i+1) == " ") {
            brancos = true;
            var div = document.getElementById("endereco");
            if (div.style.display != "none" || div.style.display != "") {
                div.style.display = "none";
            };
            break;
        }
    }
    if (!brancos) {
        document.getElementById("cepMessage").style.display = "block";
        document.getElementById("cepError").style.display = "none";
        cep = cep.replace("-", "");
        $.getJSON(
                "http://viacep.com.br/ws/"+cep+"/json", 
                function(endereco){
                    if (endereco) {
                        document.getElementById("cidade").value = endereco.localidade;
                        document.getElementById("estado").value = endereco.uf;
                        document.getElementById("bairro").value = endereco.bairro;
                        document.getElementById("logradouro").value = endereco.logradouro;    
                        document.getElementById("endereco").style.display = "block";
                    } else {
                        document.getElementById("cepError").style.display = "block";
                    }
                    document.getElementById("cepMessage").style.display = "none";
                    document.getElementById("numero").focus();
                }
            ).fail(function() {
                document.getElementById("cepMessage").style.display = "none";
                document.getElementById("cepError").style.display = "block";
                document.getElementById("endereco").style.display = "block";
        }); 
    };
};

/*
 |--------------------------------------------------
 | brPhone
 |--------------------------------------------------
 | Insere o - no numero do telefone
 | 
 | Se iniciar com 9 insere dps do quinto numero
 | Senao insere dps do quarto
 |
 | @params phone String valor do textfield telefone
 |	
 */
/*
function brPhone(phone) {
    if (phone.length == 4 && phone.substring(0,1) != "9") {
        document.getElementById("telefone").value = document.getElementById("telefone").value + "-";
    } else if (phone.length == 5 && phone.substring(0,1) == "9") {
        document.getElementById("telefone").value = document.getElementById("telefone").value + "-";
    };
};
*/

/*
 |--------------------------------------------------
 | ValidarCNPJ
 |--------------------------------------------------
 | Valida o cnpj a partir de um DOM Element input txt
 |
 | @params ObjCnpj input[text] DOM Element do tipo input que contem o cnpj
 | @return bool
 |	
 */

function validacaoCNPJ(ObjCnpj){
        var cnpj = ObjCnpj.value;
        var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
        var dig1= new Number;
        var dig2= new Number;

        exp = /\.|\-|\//g
        cnpj = cnpj.toString().replace( exp, "" ); 
        var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

        for(i = 0; i<valida.length; i++){
                dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
                dig2 += cnpj.charAt(i)*valida[i];       
        }
        dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
        dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));

        if(((dig1*10)+dig2) != digito) return false;
        return true;
}

/*
 |--------------------------------------------------
 | valida CNPJ
 |--------------------------------------------------
 | Exibe uma imagem de correto ou errado
 | 
 | verifica se ha campo em branco, se houver exibe
 | erro, senao checa o cnpj informado e exibe o
 | resultado correspondente.
 |
 | id da imagem : #validar
 |
 | @params cnpj DOM element campo do cnpj
 |	
 */



function validaCNPJ(cnpj) {
    var brancos;
    for (var i = 0; i <= cnpj.value.length-1; i++) {
        if(cnpj.value.substring(i,i+1) == " ") {
            brancos = true;
            document.getElementById("validar").src = "/gneellaan/assets/error.jpg";
            document.getElementById("cnpj").style.border = "1px solid #ae0531";
            document.getElementById("salvar").disabled = true;
            break;
        }
    }
    if (!brancos) {
        var divCnpj, cnpj, cnpjIco, value, salvar;
        if (validacaoCNPJ(cnpj)) {
            document.getElementById("validar").src = "/gneellaan/assets/check.jpg";
            document.getElementById("cnpj").style.border = "1px solid #289402";
            document.getElementById("salvar").disabled = false;
        } else {
            document.getElementById("validar").src = "/gneellaan/assets/error.jpg";
            document.getElementById("cnpj").style.border = "1px solid #ae0531";
            document.getElementById("salvar").disabled = true;
        };
    };
};


/*
 |--------------------------------------------------
 | Seta mascaras para os campos cnpj, cep, cpf
 |--------------------------------------------------
 */

jQuery(function($){
       $("#cnpj").mask("99.999.999/9999-99", {placeholder:" "});
       $("#cep").mask("99999-999", {placeholder:" "});
       $("#cpf").mask("999.999.999-99", {placeholder:" "});
});

/*
 |--------------------------------------------------
 | Remove os traços dos campos cep e telefone
 |--------------------------------------------------
 */

//window.onload = function() {
//    document.getElementById('empresa').onsubmit = function() {
//        var cep = document.getElementById('cep').value;
//        var telefone = document.getElementById('telefone').value;
//        document.getElementById('cep').value = cep.replace("-", "");
//        document.getElementById('telefone').value = telefone.replace("-", "");
//    };
//};