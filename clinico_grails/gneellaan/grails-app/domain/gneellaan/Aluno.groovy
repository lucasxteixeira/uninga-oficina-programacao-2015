package gneellaan

class Aluno {
	
	String nome
	byte ddd
	int telefone
	
    static constraints = {
		nome blank: false, maxSize: 160
    }
}
