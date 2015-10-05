         	  	<g:each in="${usuarios}" var="usuario">		
	                <tr>
	                  <td>
	                  	<g:checkBox name="check${usuario.id}" onChange="uncheck(this,'usuario')"/>
	                  </td>
	                  <td>${usuario.id}</td>
	                  <td>${usuario.nome}</td>
	                  <td>${usuario.email}</td>
	                  <td>${usuario.login}</td>
	                </tr>
                </g:each>