<html>
<head>
	<title>Novo Paciente</title>
	<meta name="layout" content="main"/>
	<asset:javascript src="search.js"/>
	<asset:javascript src="util.js"/>
	<asset:javascript src="ajaxhandler.js"/>
	<asset:stylesheet href="searchForm.css"/>
	<style type="text/css">
		.btn {
			margin-top: 10px;
		}
		.row div {
			margin-bottom: 5px;
		}
		#novo {
			margin-top: -15px;
		}
	</style>
</head>
<body>
	<h2>Novo Paciente</h2>
	<g:render template="form"/>
</body>
</html>