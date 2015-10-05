package gneellaan

class ProfessorController {

	BaseService baseService
	
	def index() {
		def search = baseService.index(Professor, request, params, {search ->
				return Professor.findAllByNomeIlikeOrTelefone("%" + search + "%", search)
			})
		request.xhr ? render(template: 'list', model: [professores: search]) : [professores: search]
	}
	
	def novo() {}
	
	def salvar() {
		try {
			baseService.salvar(Professor, params)
			redirect(action: 'index')
		} catch(e) {
			render e
		}

	}
	
	def alterar() {
		[professor: Professor.get(params.id)]
	}
	
	def excluir() {
		try {
			baseService.excluir(Professor, params.id)
			redirect(action: 'index')
		} catch(e) {
			render e
		}
	}
}
