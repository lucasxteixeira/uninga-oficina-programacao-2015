package gneellaan

import gneellaan.enums.SituacaoConsultaEnum

class Consulta {
	
	Aluno aluno
	Paciente paciente
	Professor professor
	Sala sala
	Date data
	Date inicio
	Date fim
	String descricao
	SituacaoConsultaEnum situacao

    static constraints = {
		descricao nullable: true
		professor nullable: true
    }
}
