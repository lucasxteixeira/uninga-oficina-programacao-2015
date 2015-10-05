package gneellaan.enums

enum SituacaoConsultaEnum {
	Agendada('Agendada'),
	Cancelada('Cancelada'),
	AlunoNaoCompareceu('Aluno não compareceu'),
	PacienteNaoCompareceu('Paciente não compareceu'),
	Finalizada('Finalizada')

	final String value

	SituacaoConsultaEnum(String value) { this.value = value }

	String toString() { value }
	String getKey() { name() }
}
