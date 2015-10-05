package gneellaan

import grails.transaction.Transactional
import org.codehaus.groovy.grails.web.binding.DataBindingUtils;

@Transactional
class BelongsToService extends BaseService{

    def serviceMethod() {

    }
	
	/*
	 * Salva as propriedades relacionadas usando belongsTo
	 * 
	 * @param to classe de dominio detentora da relação 
	 * @param belongs classe de dominio relacionada
	 * @param params lista de parametros para a criação de belongs
	 * @param findByBelongs função responsavel por retornar uma instancia de to a partir de belongs
	 * 
	 */
	
	def salvar(Class to, Class belongs, def params, def findByBelongs) throws Exception {
		def belongsInstance = belongs.newInstance().get(params.id) ?: belongs.newInstance()
		DataBindingUtils.bindObjectToInstance(belongsInstance, params)
		belongsInstance.save(flush: true, failOnError: true)
		def bName = belongsInstance.class.getSimpleName()
		def toInstance = findByBelongs(belongsInstance) ?: to.newInstance()
		if (toInstance.id != null) {
			return toInstance.id
		} else {
			bName = belongsInstance.class.getSimpleName().toLowerCase()
			toInstance."$bName" = belongsInstance
			toInstance.save(flush: true, failOnError: true)
			return null
		}
	}	
}
