	<%@ page import="gneellaan.enums.SituacaoConsultaEnum" %>
	<script type="text/javascript">
		function validate() {
			var sala = $("#sala").val();
			var data = $("#data").val();
			var inicio = $("#inicio").val();
			var fim = $("#fim").val();
			var params = 'sala=' + sala + '&data=' + data + '&inicio=' + inicio + '&fim=' + fim;
			var ajaxHandler = new AjaxHandler({
				url: '/gneellaan/consulta/disponibilidade/',
			    element: '$var',
			    method: 'POST',
			    after: function(response) {
					if(!!!response) {
						$("#disponibilidade-modal").modal();
						console.log(response);
					} else {
						//document.getElementById('consulta').submit();
					}
			    }
			}).sendRequest(params);
		};
		$(document).ready(function(){
			$("#inicio").mask("99:99");
			$("#fim").mask("99:99");
		});
	</script>
	<g:form name="pacienteForm" action="" class="form-signin" role="form">
		<g:if test="${consulta?.paciente == null }">
			<p>Paciente:<g:textField name="search" onkeyup="searchByPropertyName('paciente', this.value);return false" onfocus="searchByPropertyName('paciente', this.value);return false" required class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:if>
		<g:else>
			<p>Paciente:<g:textField name="search" value="${consulta?.paciente?.nome} - (${consulta?.paciente?.ddd}) ${consulta?.paciente?.telefone}" onkeyup="searchByPropertyName('paciente', this.value);return false" onfocus="searchByPropertyName('paciente', this.value);return false" required class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:else>
		<table id="pacienteList" class="table table-striped"></table>
	</g:form>
	<g:form name="alunoForm" action="" class="form-signin" role="form">
		<g:if test="${consulta?.aluno == null }">
			<p>Aluno:<g:textField name="search" onkeyup="searchByPropertyName('aluno', this.value);return false" onfocus="searchByPropertyName('aluno', this.value);return false" required class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:if>
		<g:else>
			<p>Aluno:<g:textField name="search" value="${consulta?.aluno?.nome} - (${consulta?.aluno?.ddd}) ${consulta?.aluno?.telefone}" onkeyup="searchByPropertyName('aluno', this.value);return false" onfocus="searchByPropertyName('aluno', this.value);return false" required class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:else>
		<table id="alunoList" class="table table-striped"></table>
	</g:form>
	<g:form name="salaForm" action="" class="form-signin" role="form">
		<g:if test="${consulta?.sala == null }">
			<p>Sala:<g:textField name="search" onkeyup="searchByPropertyName('sala', this.value);return false" onfocus="searchByPropertyName('sala', this.value);return false" required class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:if>
		<g:else>
			<p>Sala:<g:textField name="search" value="${consulta?.sala?.descricao} - ${consulta?.sala?.tipo?.key}" onkeyup="searchByPropertyName('sala', this.value);return false" onfocus="searchByPropertyName('sala', this.value);return false" required class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:else>
		<table id="salaList" class="table table-striped"></table>
	</g:form>
	<g:form name="professorForm" action="" class="form-signin" role="form">
		<g:if test="${consulta?.professor == null }">
			<p>Professor:<g:textField name="search" onkeyup="searchByPropertyName('professor', this.value);return false" onfocus="searchByPropertyName('professor', this.value);return false" class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:if>
		<g:else>
			<p>Professor:<g:textField name="search" value="${consulta?.professor?.nome} - ((${consulta?.professor?.ddd})) ${consulta?.professor?.telefone}" onkeyup="searchByPropertyName('professor', this.value);return false" onfocus="searchByPropertyName('professor', this.value);return false" class="form-control" required="true"/><img src="/gneellaan/assets/search.jpg" id="searchIcon"/></p>
		</g:else>
		<table id="professorList" class="table table-striped"></table>
	</g:form>
	<g:form name="consulta" action="salvar" class="form-signin" role="form">
		<p><g:hiddenField name="id" value="${consulta?.id}" required="true"/></p>
		<p><g:hiddenField name="paciente" value="${consulta?.paciente?.id}" required="true"/></p>
		<p><g:hiddenField name="aluno" value="${consulta?.aluno?.id}" required="true"/></p>
		<p><g:hiddenField name="sala" value="${consulta?.sala?.id}" required="true"/></p>
		<p><g:hiddenField name="professor" value="${consulta?.professor?.id}"/></p>
		<p>Data:<g:field type="date" name="data" value="${formatDate(format: 'yyyy-MM-dd', date: consulta?.data)}" class="form-control" required="true"/></p>
		<p>Início:<g:textField name="inicio" value="${formatDate(format: 'HH:mm', date: consulta?.inicio)}" class="form-control" placeholder="__:__" required="true"/></p>
		<p>Fim:<g:textField name="fim" value="${formatDate(format: 'HH:mm', date: consulta?.fim)}" class="form-control" placeholder="__:__" required="true"/></p>
		<p>Situação:<g:select name="situacao" from="${SituacaoConsultaEnum.values()}" optionKey="key" class="form-control" required="true"/></p>
		<p>Descrição:<g:textArea name="descricao" value="${consulta?.descricao}" rows="20" class="form-control"/></p>
		<p><button onclick="validate()" name="enviar" value="Enviar" class="btn btn-lg btn-primary">Enviar</button></p>
	</g:form>
	<div class="modal fade" id="disponibilidade-modal">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title">Horário Indisponível</h4>
	      </div>
	      <div class="modal-body">
	        <p id="modal-message">Já existe um atendimento entre os horários selecionados</p>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->