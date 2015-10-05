	<g:form name="remoteForm" action="index" class="form-signin" role="form">
		<p><g:textField name="search" maxlength="50" onkeyup="searchByPropertyName('${params.controller}', this.value);return false" class="form-control"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		<div style="margin-bottom: 12px" class="row">
			<div style="margin-top: 6px" class="col-xs-1">De:</div>
			<div class="col-xs-3">
				<g:field type="date" name="de"  class="form-control" required="true"/>
			</div>
			<div style="margin-top: 6px" class="col-xs-1">Até:</div>
			<div class="col-xs-3">
				<g:field type="date" name="ate" class="form-control" required="true"/>
			</div>
			<div class="col-xs-2">
				<g:select name="tipoData" from="${['Vencimento', 'Emissao', 'Quitacao']}" class="form-control"/>
			</div>
			<div class="col-xs-1">
				<a class="btn btn-primary" href="#" onclick="searchByDate('${params.controller}', 'search', 'de', 'ate', 'tipoData');return false">Aplicar</a>
			</div>
		</div>
		<p>
			<select name="order" onChange="orderBy('${params.controller}', this.value);return false" class="form-control">
				<option selected value="0">Selecione a ordenação</option>
				<g:each in="${options}" var="option">
					<option value="${option.value}">${option.key}</option>
				</g:each>
			</select>
		</p>
	</g:form>