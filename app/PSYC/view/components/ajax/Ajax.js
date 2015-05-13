var Ajax = new function () {
	
	'use strict';
	
	this.requisicao = function (pageRequisitante,metodoRequisitado,parametros,elementDestino) {
		
		if (!pageRequisitante) { 
			console.log('Informe a pagina que esta requisitando');
			return false;
		}
		
		if (!metodoRequisitado) { 
			console.log('Informe o metodo que esta sendo requisitado');
			return false;
		}
		
		if (!elementDestino) { 
			console.log('Informe o elemento que recebera a resposta');
			return false;
		}
		
		var param = '';
		if (parametros) {
			param = '?';
			for (var parametro in parametros) {
				param += parametro + '=' + parametros[parametro] + '&';
			}
			param = param.substr(0,(param.length - 1));
		}
		
		var url     = './controller/' + pageRequisitante + '/' + metodoRequisitado + '.php' + param;
		var xmlhttp;
		
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById(elementDestino).innerHTML = xmlhttp.responseText;
			}
		};
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}
};
