			<g:form name="permissoesForm" action="salvar" class="form-signin" role="form">
				<p><g:hiddenField name="id" value="${usuario?.id}"/></p>
				<p><g:hiddenField name="tab" value="permissoes"/></p>
				<p><g:checkBox name="atendimento" value="${usuario?.atendimento}"/>  Atendimentos</p>
				<p><g:checkBox name="alteracao" value="${usuario?.alteracao}"/>  Alterações</p>
				<p><g:checkBox name="arquivo" value="${usuario?.arquivo}"/>  Arquivos</p>
				<p><g:checkBox name="cliente" value="${usuario?.cliente}"/>  Clientes</p>
				<p><g:checkBox name="contador" value="${usuario?.contador}"/>  Contadores</p>
				<p><g:checkBox name="desenvolvedor" value="${usuario?.desenvolvedor}"/>  Desenvolvedores</p>
				<p><g:checkBox name="indicacao" value="${usuario?.indicacao}"/>  Indicações</p>
				<p><g:checkBox name="listaContato" value="${usuario?.listaContato}"/>  Lista de Contatos</p>
				<p><g:checkBox name="sistema" value="${usuario?.sistema}"/>  Sistemas</p>
				<p><g:checkBox name="sociedade" value="${usuario?.sociedade}"/>  Sociedades</p>
				<p><g:checkBox name="usuario" value="${usuario?.usuario}"/>  Usuários</p>
				<p><g:checkBox name="financeiro" value="${usuario?.financeiro}"/>  Financeiro</p>
				<p>
					<g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/>
				</p>
			</g:form>