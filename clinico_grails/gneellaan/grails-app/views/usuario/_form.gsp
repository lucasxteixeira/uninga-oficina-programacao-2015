	<g:form name="usuario" action="salvar" class="form-signin" role="form">
		<p><g:hiddenField name="id" value="${usuario?.id}" /></p>
		<p>Nome:<g:textField name="nome" value="${usuario?.nome}" class="form-control" required="true"/></p>
		<p>E-mail:<g:field type="email" name="email" value="${usuario?.email}" class="form-control" required="true"/></p>
		<p>Login:<g:textField name="login" value="${usuario?.login}" class="form-control" required="true"/></p>
		<p>Senha:<g:passwordField name="senha" class="form-control" required="true"/></p>
		<p><g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/></p>
	</g:form>