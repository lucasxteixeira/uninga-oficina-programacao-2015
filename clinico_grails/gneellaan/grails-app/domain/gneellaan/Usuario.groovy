package gneellaan

class Usuario {

	String nome
	String email
	String login
	String senha
	
	// Banco
	String cnpj_cpf
	String banco
	String agencia
	String conta
	String telefone
	String ddd
	
	//Permissoes
	boolean atendimento 
	boolean cliente
	boolean contador
	boolean desenvolvedor
	boolean indicacao
	boolean listaContato
	boolean sistema
	boolean sociedade
	boolean usuario
	boolean financeiro
	boolean alteracao
	boolean arquivo
	
    static constraints = {
		nome blank: false
		email nullable: true
		login blank: false
		senha blank: false
		
		// Banco
		cnpj_cpf nullable: true, maxSize: 18
		banco nullable: true, maxSize: 160
		agencia nullable: true, maxSize: 60
		conta nullable: true, maxSize: 60
		ddd nullable: true, maxSize: 3
		telefone nullable: true, maxSize: 10
		
    }
}
