<html>
<head>
	<title>Professores</title>
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
	<h2>Professores</h2>
	<g:render template="../layouts/searchForm" model="${options = [ID:'id', Nome:'nome']}"/>
	<div class="table-responsive">
		<g:form name="util" class="form-signin" role="form">
			<div class="panel panel-default">
				<table id="listTable" class="table table-hover">
					<thead>
						<tr>
							<th class="col-sm-1"></th>
							<th>ID <i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Nome<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
							<th>Telefone<i class="glyphicon glyphicon-chevron-up"></i><span class="glyphicon glyphicon-chevron-down"></span></th>
						</tr>
					</thead>
			              <tbody id="professorList">
			 					<g:render template="list" var="${professores}" />
			              </tbody>
			    </table>
		    </div>
	    </g:form>
	</div>
</body>
</html>