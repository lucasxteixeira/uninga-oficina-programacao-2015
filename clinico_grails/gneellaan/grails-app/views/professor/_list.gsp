         	  	<g:each in="${professores}" var="professor">		
	                <tr>
	                  <td>
	                  	<g:checkBox name="check${professor.id}" onChange="uncheck(this,'professor')"/>
	                  </td>
	                  <td>${professor.id}</td>
	                  <td>${professor.nome}</td>
	                  <td>(${professor.ddd}) ${professor.telefone}</td>
	                </tr>
                </g:each>
