package gneellaan

class AlunoController {
	
	BaseService baseService
	
	def index() {
		def search = baseService.index(Aluno, request, params, {search ->
				return Aluno.findAllByNomeIlikeOrTelefone("%" + search + "%", search)
			})
		request.xhr ? render(template: 'list', model: [alunos: search]) : [alunos: search]
	}
	
	def novo() {}
	
	def salvar() {
		try {
			baseService.salvar(Aluno, params)
			redirect(action: 'index')
		} catch(e) {
			render e
		}

	}
	
	def alterar() {
		[aluno: Aluno.get(params.id)]
	}
	
	def excluir() {
		try {
			baseService.excluir(Aluno, params.id)
			redirect(action: 'index')
		} catch(e) {
			render e
		}
	}
}
