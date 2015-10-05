package gneellaan.enums

enum TipoSalaEnum {
	Clinica('Cl�nica'),
	Procedimentos('Procedimentos'),
	Brinquedoteca('Brinquedoteca'),

	final String value

	TipoSalaEnum(String value) { this.value = value }

	String toString() { value }
	String getKey() { name() }
}