	<g:form name="professor" action="salvar" class="form-signin" role="form">
		<p><g:hiddenField name="id" value="${professor?.id}" required="true"/></p>
		<p>Nome:<g:textField name="nome" value="${professor?.nome}" class="form-control" required="true"/></p>
		<div class="row">
			<div class="col-xs-2">
				DDD:<g:field type="number" name="ddd" value="${professor?.ddd}" maxlength="2" required="true" class="form-control"/>
			</div>
			<div class="col-xs-10">
			   	<p>Telefone:<g:field type="number" name="telefone" value="${professor?.telefone}" maxlength="10" required="true" class="form-control"/></p>
			</div>
		</div>
		<p><g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/></p>
	</g:form>