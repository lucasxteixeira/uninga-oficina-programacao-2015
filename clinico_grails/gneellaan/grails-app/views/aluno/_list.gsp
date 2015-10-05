         	  	<g:each in="${alunos}" var="aluno">		
	                <tr>
	                  <td>
	                  	<g:checkBox name="check${aluno.id}" onChange="uncheck(this,'aluno')"/>
	                  </td>
	                  <td>${aluno.id}</td>
	                  <td>${aluno.nome}</td>
	                  <td>(${aluno.ddd}) ${aluno.telefone}</td>
	                </tr>
                </g:each>
