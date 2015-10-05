package gneellaan

class PacienteController {

	BaseService baseService
	
	def index() {
		def search = baseService.index(Paciente, request, params, {search ->
				return Paciente.findAllByNomeIlikeOrTelefone("%" + search + "%", search)
			})
		request.xhr ? render(template: 'list', model: [pacientes: search]) : [pacientes: search]
	}
	
	def novo() {}
	
	def salvar() {
		try {
			baseService.salvar(Paciente, params)
			redirect(action: 'index')
		} catch(e) {
			render e
		}

	}
	
	def alterar() {
		[paciente: Paciente.get(params.id)]
	}
	
	def excluir() {
		try {
			baseService.excluir(Paciente, params.id)
			redirect(action: 'index')
		} catch(e) {
			render e
		}
	}
}
