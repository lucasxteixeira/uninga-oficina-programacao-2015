package gneellaan

import grails.transaction.Transactional

@Transactional
class BaseService {

    def serviceMethod() {

    }
	
	/**
	 * Retorna uma lista de instancias da classe informada
	 * 
	 * @param controller classe de dominio das instancias
	 * @param request    o tipo de request enviado ao controller
	 * @param params     as propriedades paraa pesquisa e ordenacao
	 * @param findAllBy  funcao para pesquisa por propriedades
	 * @return           lista de instancias
	 */
	
	def index(Class controller, request, params, findAllBy) {
		if (request.xhr) {
			if(params.search.size() > 0 || params.params) {
				return findAllBy(params.search)
			}
		} 
		return controller.newInstance().findAll()
	}
	
	/**
	 * Salva uma instancia de dominio simples
	 * 
	 * @param controller classe de dominio da instancia
	 * @param params 	 propriedades da classe
	 * @return 			 instance.id
	 * @throws Exception excecao gerada na validação das propriedades
	 */
	
	def salvar(Class controller, params) throws Exception{
		def instance = controller.newInstance().get(params.id) ?: controller.newInstance()
		instance.properties = params
		instance.save(flush: true, failOnError: true)
		return instance.id
	}
	
	/**
	 * Exclui uma instancia de dominio simples
	 * 
	 * @param controller classe de dominio da instancia
	 * @param id		 id da instancia
	 * @return		  	 id da instancia	
	 * @throws Exception excecao gerada na validação das propriedades
	 */
	
	def excluir(Class controller, id) throws Exception {
		def instance = controller.newInstance().get(id) 
		instance.delete(flush: true, failOnError: true)
		return id
	}
}
