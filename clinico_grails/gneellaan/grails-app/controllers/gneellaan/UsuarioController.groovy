package gneellaan

class UsuarioController {
	
	BaseService baseService
	
	def beforeInterceptor = {
		if (session.userId) {
			if (!('usuario' in session.permissoes)) redirect(controller: 'permissao')
		}
	}
	
    def index() { 
		def search = baseService.index(Usuario, request, params, {search ->
			return Usuario.findAllByNomeIlikeOrLoginIlike("%" + search + "%","%" + search + "%")
		})
		request.xhr ? render(template: 'list', model: [usuarios: search]) : [usuarios: search]
	}
	
	def novo() {}
	
	def salvar() {
		try {
			if (baseService.salvar(Usuario, params) == session.userId)
				redirect(controller: 'autenticacao', action: 'logout')
			else 
				redirect(action: 'index')
		} catch(e) {
			render e
		}
	}
	
	def alterar() {[usuario: Usuario.get(params.id)]}
	
	def excluir() {
		try {
			if (baseService.excluir(Usuario, params.id) == session.userId)
				redirect(controller: 'autenticacao', action: 'logout')
			else
				redirect(action: 'index')
		} catch(e) {
			render e
		}
	}
	
}
