<html>
<head>
	<title>Alterar Usuário</title>
	<meta name="layout" content="main"/>
</head>
<body>
	<ul class="nav nav-tabs" role="tablist">
	  <li id="informacoes-li" class="active"><a href="#informacoes-pane" role="tab" data-toggle="tab">Informações Cadastrais</a></li>
	  <li id="banco-li"><a href="#banco-pane" role="tab" data-toggle="tab">Informações Bancárias</a></li>
	  <li id="permissoes-li"><a href="#permissoes-pane" role="tab" data-toggle="tab">Permissões</a></li>
	</ul>
	<div class="tab-content">
 		 <div class="tab-pane active" id="informacoes-pane">
			<h2>Informações Cadastrais</h2>
			<g:render template="form" var="${usuario}"/>
		</div>
 		 <div class="tab-pane" id="banco-pane">
			<h2>Informações Bancárias</h2>
			<g:render template="banco" var="${usuario}"/>
		</div>
 		 <div class="tab-pane" id="permissoes-pane">
			<h2>Permissões</h2>
			<g:render template="permissoes" var="${usuario}"/>
		</div>
	</div>
</body>
</html>