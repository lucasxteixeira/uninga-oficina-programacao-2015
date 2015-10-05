<!DOCTYPE html>
<html lang="pt-br">
<html>
  <head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="googlebot" content="INDEX" />
	<meta name="robots" content="index" />
	<meta name="revisit-after" content="01 Day" />
	<meta name="rating" content="General" />
	<meta name="distribution" content="Global" />
	<meta name="geo.region" content="BR-PR" />
	<meta name="geo.placename" content="Maringá" />
	<meta name="author" content="José Carlos S.A. Tissei - z.94@live.com" />

	<style type="text/css">
		@font-face {
		  font-family: 'Glyphicons Halflings';
		  src: url('../assets/glyphicons-halflings-regular.eot');
		  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');
		}
	</style>

    <title><g:layoutTitle default="Grails"/></title>

    <!-- Bootstrap core CSS -->
    <asset:stylesheet href="bootstrap.min.css"/>
    <asset:javascript src="jquery-1.11.1.min.js"/>
    <asset:javascript src="bootstrap.js"/>
    
    <asset:stylesheet href="bootstrap-table.css"/>
	<asset:javascript src="bootstrap-table.js"/>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
	    li {
			list-style: none;
	    }
    	.starter-template{
    		margin-top: 20px;
    	}
    	.list-group {
    		margin-top: 20px;
    	}
    	.table-striped {
    		border-top: 1px solid #dddddd
    	}
    	.table-striped thead tr td {
    		font-weight: bold;
    		color: #505050;
    	}
    </style>
    <g:layoutHead/>
  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand logo" href="${createLink(controller: "agenda", action: "index")}">CLINICO</a>
          
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
         	<g:if test="${session.userId != null}">
         		<g:if test="${controllerName != 'index' && controllerName != 'agendamentoListagem'}">
		            <li><a href="${createLink(action: "novo")}">Novo</a></li>
		            <li><a href="#" onclick="redirect('${createLink(action: 'alterar')}');return false;">Alterar</a></li>
		            <li><a href="#" onclick="redirect('${createLink(action: 'excluir')}');return false;">Excluir</a></li>
		            <g:if test="${params.controller == 'contasReceber' }">
		            	<li><a href="#" onclick="redirect('${createLink(action: 'estornar')}');return false;">Estornar</a></li>
		            </g:if>
		        </g:if>
		        <g:elseif test="${controllerName == 'agendamentoListagem'}">
		            <li><a href="${createLink(controller: "indicacao",  action: "novo")}">Novo</a></li>
		            <li><a href="#" onclick="redirect('${createLink(controller: "indicacao", action: 'alterar')}');return false;">Alterar</a></li>
		            <li><a href="#" onclick="redirect('${createLink(controller: "indicacao", action: 'excluir')}');return false;">Excluir</a></li>

		        </g:elseif>
		        <g:if test="${controllerName == 'painelAtendente' || controllerName == 'atendimento' }">
		        	<li><a href="#" onclick="redirect('${createLink(action: 'finalizar')}');return false;">Finalizar</a></li>
		        </g:if>
		        <g:if test="${controllerName == 'listaGeracao' && params.action == 'index'}">
		        	<li><a href="#" onclick="redirect('${createLink(action: 'arquivos')}');return false;">Arquivos</a></li>
		        </g:if>
		        <g:if test="${controllerName == 'listaGeracao' && params.action == 'arquivos'}">
		        	<li><a href="#" onclick="redirect('${createLink(action: 'gerar')}');return false;">Gerar</a></li>
		        </g:if>
		        <li><a href="${createLink(action: "index")}">Listar</a></li>
	            <li><a href="#">${session.nome}</a></li>
	            <li><a href="${createLink(controller: "Autenticacao", action: "logout")}">Sair</a></li>
            </g:if>
          </ul>
        </div>
      </div>
    </div>
    
  	<hr/>
      <div class="container">

      <div class="starter-template">
      <div class="row">
      	<g:if test="${session.userId != null}">
	      	<div class="col-md-2 sidebar">
	   			<div class="list-group">
	   				<li><a href="${createLink(controller: "agenda")}" class="list-group-item">Agendas</a></li>
					<li><a href="${createLink(controller: "aluno")}" class="list-group-item">Alunos</a></li>
					<li><a href="${createLink(controller: "consulta")}" class="list-group-item">Atendimentos</a></li>
					<li><a href="${createLink(controller: "paciente")}" class="list-group-item">Pacientes</a></li>
					<li><a href="${createLink(controller: "professor")}" class="list-group-item">Professores</a></li>
					<li><a href="${createLink(controller: "sala")}" class="list-group-item">Salas</a></li>
					<g:if test="${'usuario' in session.permissoes}">
						<li><a href="${createLink(controller: "usuario")}" class="list-group-item">Usuários</a></li>
					</g:if>
	         	</div>
	      	</div>
      	</g:if>
 		 <div class="col-md-10"><g:layoutBody/></div>
  	  </div>
  	  </div>

    </div><!-- /.container -->

  </body>
</html>