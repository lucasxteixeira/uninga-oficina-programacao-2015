			<g:form name="bancoForm" action="salvar" class="form-signin" role="form">
				<p><g:hiddenField name="id" value="${usuario?.id}"/></p>
				<p><g:hiddenField name="tab" value="banco"/></p>
				<div class="row">
					<div class="col-xs-2">
						DDD:<g:textField name="ddd" maxlength="2" value="${usuario?.ddd}" class="form-control" required="true"/>
					</div>
					<div class="col-xs-10">
						<p>Telefone:<g:textField name="telefone" maxlength="10" value="${usuario?.telefone}" class="form-control"/></p>
					</div>
				</div>
				<p>CPF/CNPJ:<g:textField name="cnpj_cpf" maxlength="18" value="${usuario?.cnpj_cpf}" class="form-control"/></p>
				<p>Banco:<g:textField name="banco" maxlength="160" value="${usuario?.banco}" class="form-control"/></p>
				<p>Agência:<g:textField name="agencia" maxlength="60" value="${usuario?.agencia}" class="form-control"/></p>
				<p>Conta:<g:textField name="conta" maxlength="60" value="${usuario?.conta}" class="form-control"/></p>
				<p>
					<g:submitButton name="enviar" value="Enviar" class="btn btn-lg btn-primary"/>
				</p>
			</g:form>