	<g:form name="paciente" action="salvar" class="form-signin" role="form">
		<p><g:hiddenField name="id" value="${paciente?.id}" required="true"/></p>
		<p>Nome:<g:textField name="nome" value="${paciente?.nome}" class="form-control" required="true"/></p>
		<p>Responsavel:<g:textField name="responsavel" value="${paciente?.responsavel}" class="form-control"/></p>
		<div class="row">
			<div class="col-xs-2">
				DDD:<g:field type="number" name="ddd" value="${paciente?.ddd}" maxlength="2" required="true" class="form-control"/>
			</div>
			<div class="col-xs-10">
			   	<p>Telefone:<g:field type="number" name="telefone" value="${paciente?.telefone}" maxlength="10" required="true" class="form-control"/></p>
			</div>
		</div>
		<p><g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/></p>
	</g:form>