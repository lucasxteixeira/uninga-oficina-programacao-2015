package gneellaan

class AutenticacaoController {

    def autenticar() {
		Usuario user = Usuario.findByLoginAndSenha(params.login, params.senha)
		if(user){
			session.userId = user.id
			session.nome = user.nome
			session.permissoes = []
			user.properties.each{ key, val ->
				if (val == true) session.permissoes.add(key)
			}
		}
		redirect(controller: 'atendimento', action: 'index')
	}
	
	def login() { }
	
	def logout() {
		session.userId = null
		session.nome = null
		redirect(controller: 'Autenticacao', action: 'login')
	}
}
