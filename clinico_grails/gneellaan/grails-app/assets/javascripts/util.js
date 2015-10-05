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

function uncheck(checkbox, element) {
    var form = document.getElementById("util");
    if(form) {
	    for (field in form.elements){
	        if (field.substring(0,5) == "check" && field != checkbox.name) {
	            document.getElementById(field).checked = false; 
	        }
	    }
    }
    if(element) {
        document.getElementById(element).value = checkbox.name.substring(5, checkbox.name.length);
    }
};

/*
 |--------------------------------------------------
 | redirect
 |--------------------------------------------------
 | Redireciona para uma action do controller
 |
 | @params op String  alterar ou excluir
 |	
 */

function redirect(op) {
    if (op != null || op != undefined || op != "") {
        var form = document.getElementById("util");
        for (field in form.elements){
            if (field.substring(0,5) == "check") {
                if (document.getElementById(field).checked) {
                    window.location.href = op + "/" + field.substring(5,field.length);
                }
            }
        }
    }
};

/*
 |--------------------------------------------------
 | orderBy
 |--------------------------------------------------
 | Realiza uma chamada ajax através de um objeto 
 | do tipo AjaxHandler, o objeto deve se chamar 
 | handler.
 |
 | @params param String nome de atributo da classe de dominio
 |	
 */

function orderBy(domainClass, param) {
    if (param != "0") {
        var handler = new AjaxHandler({
            element: domainClass + 'List',
            url: '/gneellaan/' + domainClass + '/index/',
            method: 'POST'
        }).sendRequest("order="+param);
    }
};