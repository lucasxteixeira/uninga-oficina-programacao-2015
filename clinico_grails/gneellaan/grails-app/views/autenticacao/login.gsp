<html>
<head>
	<title>Login</title>
	<meta name="layout" content="main"/>
</head>
<body>
	<h2>Login</h2>
	<g:form name="login" action="autenticar" class="form-signin" role="form">
		<p>Login:<g:textField name="login" class="form-control"/></p>
		<p>Senha:<g:passwordField name="senha" class="form-control"/></p>
		<p><g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/></p>
	</g:form>
</body>
</html>