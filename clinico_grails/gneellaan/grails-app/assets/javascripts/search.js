/*
 |--------------------------------------------------
 | searchByPropertyName
 |--------------------------------------------------
 | Realiza uma chamada ajax e busca a propriedade informada.
 |
 | @params domainClass String classe de dominio a qual a propriedade pertence
 | @params property String texto a ser buscado
 |	
 */

function searchByPropertyName(domainClass, property) {
    var request = 'search=' + property;
    if (document.getElementById('params') && document.getElementById('params').value != 'null') {
        request = request + '&params=' + document.getElementById('params').value;
    }
    console.log(request);
    var ajaxHandler = new AjaxHandler({
        url: '/gneellaan/' + domainClass + '/index/',
        element: domainClass + 'List',
        method: 'POST',
        after: function() {
            $("#listTable").trigger("update"); 
        }
    }).sendRequest(request);
    
};

function searchWithParams(domainClass, search) {
    searchByPropertyName(domainClass, document.getElementById(search).value);
}


function searchByDate(controller, search, from, to, of) {
    console.log("&of=" + document.getElementById(of).value);
    var ajaxHandler = new AjaxHandler({
        url: '/gneellaan/' + controller + '/index/',
        element: controller + 'List',
        method: 'POST'
    }).sendRequest( "search=" + document.getElementById(search).value + 
                    "&from=" + document.getElementById(from).value + 
                    "&to=" + document.getElementById(to).value + 
                    "&of=" + document.getElementById(of).value)
};

/*
 |--------------------------------------------------
 | searchById
 |--------------------------------------------------
 | Realiza uma chamada ajax e busca a propriedade informada.
 |
 | @params domainClass String classe de dominio a qual a propriedade pertence
 | @params id int id do registro a ser buscado
 |	
 */

function searchById(domainClass, id) {
    var ajaxHandler = new AjaxHandler({
        url: '/gneellaan/' + domainClass + '/index/',
        element: '$var',
        method: 'POST',
        after: function(response) {
            formElements = document.getElementById(domainClass + 'Form').elements;
                for (var key in response) {
                    if (formElements.namedItem(key)) {
                        if (key.match(/check/)) {
                            formElements.namedItem(key).checked = response[key];
                        } else if (key.match(/data/)) {
                            if (response[key]) {
                                var date = new GrailsDate(response[key]);
                                date.datePickerUpdate(formElements.namedItem(key + '_day'), 'day');
                                date.datePickerUpdate(formElements.namedItem(key + '_month'), 'month');
                                date.datePickerUpdate(formElements.namedItem(key + '_year'), 'year');       
                            } else {
                                formElements.namedItem(key).value = 'date.struct';
                            }
                        } else if (key.match(/imagem/)) {
                            formElements.namedItem(key + 'Tag').src = '/gneellaan/' + domainClass + '/gerar/' + response.id;
                        } else {
                            formElements.namedItem(key).value = response[key];
                        }
                    }
                }
                formElements.namedItem('excluir').onclick = function() {
                    var controller;
                    if (document.getElementById('idDesenvolvedor')) {
                        controller = 'desenvolvedor';
                    } else if(document.getElementById('idCliente')) {
                        controller = 'cliente';
                    }
                    window.location.href = 
                        "/gneellaan/" + domainClass 
                        + "/excluir/" + id 
                        + '?tab=' + domainClass 
                        + '&from=' + controller;
                }
            }
    }).sendRequest('search=' + id);
}

function searchBetween(index) {
    var de = $("#de").val();
    var ate = $("#ate").val();
    if (de != undefined && de!= null && de != '' && ate != undefined && ate != null && ate != '') {	
        de = de.split('-');
        ate = ate.split('-');
        de = new Date(de[0], de[1], de[2]);
        ate = new Date(ate[0], ate[1], ate[2]);
        $("#listTable tr td:nth-child(" + index + ")").each(function(){
            var date = $(this).html().split('/');
            date = new Date (date[2], date[1], date[0]);
            if(de > date || ate < date) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }
        });
    }
}

function bindData(domainClass, id) {
    var ajaxHandler = new AjaxHandler({
        url: '/gneellaan/' + domainClass + '/index/',
        element: '$var',
        method: 'POST',
        after: function(response) {
            formElements = document.getElementById(domainClass + 'Form').elements;
                for (var key in response) {
                    if (formElements.namedItem(key)) {
                        if (key.match(/check/)) {
                            formElements.namedItem(key).checked = response[key];
                        } else if (key.match(/data/)) {
                            if (response[key]) {
                                var date = new GrailsDate(response[key]);
                                formElements.namedItem(key).value = date.getYear()+'-'+date.getMonth()+'-'+date.getDay();
                            }
                        } else {
                            formElements.namedItem(key).value = response[key];
                        }
                    }
                }
                formElements.namedItem('excluir').onclick = function() {
                    window.location.href = 
                        "/gneellaan/" + domainClass 
                        + "/excluir/" + id 
                        + '?tab=' + domainClass;
                }
            }
    }).sendRequest('search=' + id);
}