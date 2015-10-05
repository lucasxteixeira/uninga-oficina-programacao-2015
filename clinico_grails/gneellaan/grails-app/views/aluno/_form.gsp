	<g:form name="aluno" action="salvar" class="form-signin" role="form">
		<p><g:hiddenField name="id" value="${aluno?.id}" required="true"/></p>
		<p>Nome:<g:textField name="nome" value="${aluno?.nome}" class="form-control" required="true"/></p>
		<div class="row">
			<div class="col-xs-2">
				DDD:<g:field type="number" name="ddd" value="${aluno?.ddd}" maxlength="2" required="true" class="form-control"/>
			</div>
			<div class="col-xs-10">
			   	<p>Telefone:<g:field type="number" name="telefone" value="${aluno?.telefone}" maxlength="10" required="true" class="form-control"/></p>
			</div>
		</div>
		<p><g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/></p>
	</g:form>