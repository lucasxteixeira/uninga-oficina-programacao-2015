<html>
<head>
	<title>Atedimentos</title>
	<meta name="layout" content="main"/>
	<asset:stylesheet href="searchForm.css"/>
	<asset:stylesheet href="table-sorter.css"/>
	<asset:javascript src="util.js"/>
	<asset:javascript src="search.js"/>
	<asset:javascript src="ajaxhandler.js"/>
	<asset:javascript src="jquery-latest.js"/>
	<asset:javascript src="jquery.tablesorter.js"/>
	<script type="text/javascript">
		$(document).ready(function() 
			    { 
			        $("#listTable").tablesorter({
				        headers: { 0: {sorter: false} }
			        }); 
			    } 
		); 
	</script>
</head>
<body>
	<h2>Atendimentos</h2>
	<g:render template="../layouts/searchForm" model="${options = [ID:'id', Data:'data']}"/>
	<div class="table-responsive">
		<g:form name="util" class="form-signin" role="form">
			<div class="panel panel-default">
				<table id="listTable" class="table table-hover">
					<thead>
						<tr>
							<th class="col-sm-1"></th>
							<th>ID <i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Situação<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Sala<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Aluno<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Paciente<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Data<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Início<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Fim<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
						</tr>
					</thead>
			              <tbody id="consultaList">
			 					<g:render template="list" var="${consultas}" />
			              </tbody>
			    </table>
		    </div>
	    </g:form>
	</div>
</body>
</html>