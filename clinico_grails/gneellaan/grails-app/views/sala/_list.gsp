         	  	<g:each in="${salas}" var="sala">		
	                <tr>
	                  <td>
	                  	<g:checkBox name="check${sala.id}" onChange="uncheck(this,'sala')"/>
	                  </td>
	                  <td>${sala.id}</td>
	                  <td>${sala.descricao}</td>
	                  <td>${sala.tipo.key}</td>
	                </tr>
                </g:each>
