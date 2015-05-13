'use strict';

angular.module('myApp.organizacao', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/organizacao', {
		templateUrl: 'view/view/organizacao/organizacao.html',
		controller: 'organizacaoCtrl'
	});
}])

.controller('organizacaoCtrl', [function() {
	/**
	 * aciona o methos de listagem de conteudo
	 */
	(function (){
		org.loadListOrg();
	})();
}]);

var org = {};

	/**
	 * @method configDisplay
	 * configura os elementos que podem se visualizados
	 */
	org.configDisplay = function () {
		
		var elements = [
			'listOrg',
			'listOrgTitle',
			'listOrgSubheagerTile',
			'btCadOrg',
			'cadOrg',
			'cadOrgTitle',
			//'cadOrgSubheagerTile',
			'btCadOrgSave',
			'btCadOrgCancel'
		];
		
		for (var _ in elements) {
			if(document.getElementById(elements[_]).style.display == "none"){
				document.getElementById(elements[_]).style.display = "block";
			} else {
				document.getElementById(elements[_]).style.display = "none"; 		
			}
		}
	};

	org.clearInputs = function (){
		document.getElementById("org_razao").value = '';
	}
	/**
	 * @method swhoCadastro
	 * Habilita o formulario para cadastrar organizacoes
	 */
	org.showCadastro = function () {
		
		this.configDisplay();
		
	};

	org.cancelCadastro = function () {
		this.clearInputs();
		this.configDisplay();
		this.loadListOrg();
	}
	/**
	 * @method saveCadastro
	 */
	org.saveCadastro = function () {
		
		var org_razao = document.getElementById("org_razao").value;
		
		if (!org_razao || org_razao == ' ') {
			toastr.options = {
				closeButton: true,
				progressBar: true,
				showMethod: 'slideDown',
				timeOut: 2000
			};
			toastr.warning('Campo de preenchimento obrigatório', 'Razão Social');
			return false;
		}
		
		var pageRequisitante  = 'organizacao';
		var metodoRequisitado = 'setData';
		var parametros        =  {
			set_org : true,
			org_razao : org_razao
		};
		var elementDestino    = 'cadOrg';
		
		Ajax.requisicao(pageRequisitante,metodoRequisitado,parametros,elementDestino);
		
		this.cancelCadastro();
	};

	/**
	 * @method loadListOrg
	 * mostra os registro de org cadastrados.
	 */
	org.loadListOrg = function () {
		var pageRequisitante  = 'organizacao';
		var metodoRequisitado = 'getData';
		var parametros        =  {org_listdata : true};
		var elementDestino    = 'listagemOrg';

		Ajax.requisicao(pageRequisitante,metodoRequisitado,parametros,elementDestino);
	};

	org.pesquisar = function () {
		var vpesq = document.getElementById("org_pesq").value;
		
		if (vpesq) {
			var pageRequisitante  = 'organizacao';
			var metodoRequisitado = 'getData';
			var parametros        =  {org_pesquisa : vpesq};
			var elementDestino    = 'listagemOrg';

			Ajax.requisicao(pageRequisitante,metodoRequisitado,parametros,elementDestino);
		} else {
			this.loadListOrg();
		}
	};