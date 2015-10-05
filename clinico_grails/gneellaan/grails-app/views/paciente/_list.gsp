         	  	<g:each in="${pacientes}" var="paciente">		
	                <tr>
	                  <td>
	                  	<g:checkBox name="check${paciente.id}" onChange="uncheck(this,'paciente')"/>
	                  </td>
	                  <td>${paciente.id}</td>
	                  <td>${paciente.nome}</td>
	                  <td>${paciente.responsavel}</td>
	                  <td>(${paciente.ddd}) ${paciente.telefone}</td>
	                </tr>
                </g:each>
