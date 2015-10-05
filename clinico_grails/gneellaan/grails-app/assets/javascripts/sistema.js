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

function uncheck(checkbox) {
    var form = document.getElementById("search");
    for (field in form.elements){
        if (field.substring(0,5) == "check" && field != checkbox.name) {
            document.getElementById(field).checked = false; 
        }
    }
};

/*
 |--------------------------------------------------
 | searchBy
 |--------------------------------------------------
 | Realiza uma chamada ajax através e busca a
 | string informada.
 |
 | @params param String text a ser buscado
 |	
 */

function searchBy(param) {
    alert('oi');
    handler.sendRequest("search="+param);
};