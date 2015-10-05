package gneellaan

class Professor {

	String nome
	byte ddd
	int telefone
	
	static constraints = {
		nome blank: false, maxSize: 160
	}
}
