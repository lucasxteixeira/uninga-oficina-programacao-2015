package gneellaan

class Paciente {

	String nome
	String responsavel
	byte ddd
	int telefone
	
    static constraints = {
		nome blank: false, maxSize: 160
		responsavel nullable: true, maxSize: 160
    }
}
