package gneellaan

import grails.transaction.Transactional

@Transactional
class HasManyService {

    def serviceMethod() {

    }
	
	/**
	 * Salva as propriedades relacionadas usando hasMany
	 * 
	 * @param domainClass	classe de dominio detentora do hasMany
	 * @param propertyClass classe de dominio pertencente ao hasMany
	 * @param propertyName	nome da propriedade na domainClass 
	 * @param params		lista de propriedades da propertyClass
	 * @return				domain.id
	 * @throws Exception	exceções detectadas ao salvar os dominios
	 */
	
	def salvar(Class domainClass, Class propertyClass, String propertyName, params) throws Exception {
		def id = 'id' + domainClass.newInstance().class.getSimpleName().capitalize()
		def domain = domainClass.newInstance().get(params."$id")
		def property = propertyClass.newInstance().get(params.id) ?: propertyClass.newInstance()
		property.properties = params
		property.save(flush: true, failOnError: true)
		def addTo = 'addTo' + propertyName.capitalize()
		domain."$addTo"(property)
		domain.save(flush: true, failOnError: true)
		return domain.id
	}
	
	/**
	 * Exclui uma propriedade da domainClass associada por hasMany
	 * 
	 * @param domainClass	classe de dominio detentora do hasMany
	 * @param propertyClass	classe de dominio pertencente ao hasMany
	 * @param propertyName	nome da propriedade na domainClass 
	 * @param params		lista de propriedades da propertyClass
	 * @return				domain.id
	 * @throws Exception	exceções detectadas ao salvar os dominios
	 */
	
	def excluir(Class domainClass, Class propertyClass, String propertyName, params) throws Exception {
		def property = propertyClass.newInstance().get(params.id)
		def domain = domainClass.newInstance().withCriteria{"$propertyName"{eq('id', property.id)}}[0]
		domain."$propertyName".remove(property)
		domain.save(flush: true)
		return domain.id
	}
}
