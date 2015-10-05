package gneellaan

class SalaController {

	BaseService baseService
	
	def index() {
		def search = baseService.index(Sala, request, params, {search ->
				return Sala.findAllByDescricaoIlike("%" + search + "%")
			})
		request.xhr ? render(template: 'list', model: [salas: search]) : [salas: search]
	}
	
	def novo() {}
	
	def salvar() {
		try {
			baseService.salvar(Sala, params)
			redirect(action: 'index')
		} catch(e) {
			render e
		}

	}
	
	def alterar() {
		[sala: Sala.get(params.id)]
	}
	
	def excluir() {
		try {
			baseService.excluir(Sala, params.id)
			redirect(action: 'index')
		} catch(e) {
			render e
		}
	}
	
}
