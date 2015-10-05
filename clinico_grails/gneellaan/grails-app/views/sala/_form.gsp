	<%@ page import="gneellaan.enums.TipoSalaEnum" %>
	<g:form name="sala" action="salvar" class="form-signin" role="form">
		<p><g:hiddenField name="id" value="${sala?.id}" required="true"/></p>
		<p>Descrição:<g:textField name="descricao" value="${sala?.descricao}" class="form-control" required="true"/></p>
		<p>Tipo:<g:select name="tipo" value="${sala?.tipo?.key}" from="${TipoSalaEnum.values()}" optionKey="key" required="true" class="form-control"/></p>
		<p><g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/></p>
	</g:form>