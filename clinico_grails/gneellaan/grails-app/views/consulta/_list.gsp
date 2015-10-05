         	  	<g:each in="${consultas}" var="consulta">		
	                <tr>
	                  <td>
	                  	<g:checkBox name="check${consulta.id}" onChange="uncheck(this,'consulta')"/>
	                  </td>
	                  <td>${consulta.id}</td>
	                  <td>${consulta.situacao.value}</td>
	                  <td>${consulta.sala?.descricao}</td>
	                  <td>${consulta.aluno?.nome}</td>
	                  <td>${consulta.paciente?.nome}</td>
	                  <td><g:formatDate format="dd/MM/yyyy" date="${consulta.data}"/></td>
	                  <td><g:formatDate format="HH:mm" date="${consulta.inicio}"/></td>
	                  <td><g:formatDate format="HH:mm" date="${consulta.fim}"/></td>
	                </tr>
                </g:each>
