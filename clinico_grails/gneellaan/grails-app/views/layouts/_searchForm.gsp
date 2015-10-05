	<g:form name="remoteForm" action="index" class="form-signin" role="form">
		<p>
			<g:textField 
				name="search" 
				maxlength="50" 
				onkeyup="searchByPropertyName('${params.controller}', this.value);return false" 
				class="form-control" 
				placeholder="Pesquisa" 
				required="true"
			/>
			<i id="searchIcon" class="glyphicon glyphicon-search"></i>
		</p>
	</g:form>