package gneellaan

import gneellaan.enums.SituacaoConsultaEnum;
import grails.converters.JSON
import groovy.time.*

import java.text.SimpleDateFormat

class ConsultaController {

	BaseService baseService
	
	def index() {
		def search = baseService.index(Consulta, request, params, {search ->
				return Consulta.findAllByData(search)
			})
		request.xhr ? render(template: 'list', model: [consultas: search]) : [consultas: search]
	}
	
	def novo() {}
	
	def salvar() {
		try {
			params.data = new SimpleDateFormat("yyyy-MM-dd").parse(params.data)
			params.inicio = Date.parse('HH:mm', params.inicio)
			params.fim = Date.parse('HH:mm', params.fim)
			baseService.salvar(Consulta, params)
			redirect(action: 'index')
		} catch(e) {
			render e
		}

	}
	
	def alterar() {
		[consulta: Consulta.get(params.id)]
	}
	
	def excluir() {
		try {
			baseService.excluir(Consulta, params.id)
			redirect(action: 'index')
		} catch(e) {
			render e
		}
	}
	
	def disponibilidade() {
		def inicio = Consulta.findBySalaAndSituacaoAndDataAndInicioBetween(
				params.sala,
				SituacaoConsultaEnum.Agendada,
				new SimpleDateFormat("yyyy-MM-dd").parse(params.data),
				Date.parse('HH:mm', params.inicio),
				Date.parse('HH:mm', params.fim)
			)
		if(inicio != null) {
			render false
		} else {
			def fim = Consulta.findBySalaAndSituacaoAndDataAndFimBetween(
				params.sala,
				SituacaoConsultaEnum.Agendada,
				new SimpleDateFormat("yyyy-MM-dd").parse(params.data),
				Date.parse('HH:mm', params.inicio),
				Date.parse('HH:mm', params.fim)
			)
			if (fim != null) {
				render false
			}
		}
		render true
	}
	
}
