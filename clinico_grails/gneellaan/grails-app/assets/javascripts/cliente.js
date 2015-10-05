/*
 |--------------------------------------------------
 | uncheck
 |--------------------------------------------------
 | Desmarca todos os outros checkbox e garante que
 | apenas um vai estar marcado.
 |
 | @params checkbox HTML DOM Input Checkbox Object
 |	
 */

function uncheck(checkbox, formName) {
    var form = document.getElementById(formName+"Form");
    for (field in form.elements){
        if (field.substring(0,5) == "check" && field != checkbox.name) {
            document.getElementById(field).checked = false; 
        }
    }
    document.getElementById(formName).value = checkbox.name.substring(5, checkbox.name.length);
};

/*
 |--------------------------------------------------
 | selectTab
 |--------------------------------------------------
 | Altera a tab ativa para a tab retornada pelo controller.
 |	
 */

function selectTab(tab) {
    document.getElementById('informacoes-pane').className = 'tab-pane';
    document.getElementById('informacoes-li').className = '';
    document.getElementById(tab + '-pane').className = 'tab-pane active';
    document.getElementById(tab + '-li').className = 'active';
}

/*
 |--------------------------------------------------
 | showDate
 |--------------------------------------------------
 | Exibe o campo div e altera o valor de hidden.
 |	
 */

function showDate(hidden, div) {
    if (document.getElementById(hidden).value === 'true') {
        document.getElementById(div).style.display = 'none';
        document.getElementById(hidden).value = false;
    } else {
        document.getElementById(div).style.display = 'block';
        document.getElementById(hidden).value = true;
    }
}
//
//window.onload = function() {
//    document.getElementById('ecfForm').onsubmit = function() {
//        if (document.getElementById('data-lacre').value === 'true') {
//            document.getElementById('data-lacre').remove();
//        } else {
//            document.getElementById('data-lacre').remove();
//            document.getElementById('lacre-selects').remove();
//        }
//    }
//}

function readImage(files) {
    var file = files[0];
    var reader = new FileReader();
    var image  = new Image();

    reader.readAsDataURL(file);  
    reader.onload = function(_file) {
        image.src    = _file.target.result;              // url.createObjectURL(file);
        image.onload = function() {
            if(file.size >= 1048576){
                document.getElementById('imagemMessage').innerHTML = 'A imagem selecionada é maior que 1mb!';
                document.getElementById('imagemDiv').className = 'form-group has-error has-feedback';   
                document.getElementById('imagemSpan').className = 'glyphicon glyphicon-remove form-control-feedback';   
            } else {
                document.getElementById('imagemMessage').innerHTML = 'A imagem deve ter o tamanho maximo de 1mb.';
                document.getElementById('imagemDiv').className = 'form-group has-success has-feedback';  
                document.getElementById('imagemSpan').className = 'glyphicon glyphicon-ok form-control-feedback'; 
            }
        };
    };

}