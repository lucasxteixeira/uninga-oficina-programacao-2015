import gneellaan.Cliente
import gneellaan.Contador
import gneellaan.Desenvolvedor
import gneellaan.Empresa
import gneellaan.Sistema
import gneellaan.Usuario
import grails.util.Environment

class BootStrap {

    def init = { servletContext ->
		if (Environment.current == Environment.DEVELOPMENT) {
			Usuario admin = new Usuario();
			admin.nome = "Administrador"
			admin.email = "admin@gnellaan.com"
			admin.login = "admin"
			admin.senha = "admin"
			admin.atendimento = true
			admin.cliente = true
			admin.contador = true
			admin.desenvolvedor = true
			admin.indicacao = true
			admin.listaContato = true
			admin.sistema = true
			admin.sociedade = true
			admin.usuario = true
			admin.financeiro = true
			admin.alteracao = true
			admin.arquivo = true
			admin.save(flush: true)
			
			Empresa modelo = new Empresa()
			modelo.tipo_empresa = 0
			modelo.cnpj = "01973424000103"
			modelo.ie = "9013964260"
			modelo.razao = "AUTOPECAS QUERENCIA LTDA"
			modelo.nome = "AGROPECAS"
			modelo.cep = 87930000
			modelo.cidade = "Maringa"
			modelo.estado = "PR"
			modelo.bairro = "Jardim Liberdade"
			modelo.logradouro = "Rua Julio Mesquita"
			modelo.numero = 105
			modelo.ddd = 44
			modelo.telefone = 34621437
			modelo.contato = "responsavel"
			modelo.email = "lol@lol.lol"
			modelo.save(flush: true)
			
			Cliente teste = new Cliente()
			teste.empresa = modelo
			teste.dataInicio = new Date()
			teste.save(flush: true)
			
			Contador counter = new Contador()
			counter.escritorio = "Argus"
			counter.nome = "Luiz"
			counter.ddd = 44
			counter.telefone = 32658087
			counter.email = "teste@teste.teste"
			counter.save(flush: true)
			
			Empresa company = new Empresa()
			company.tipo_empresa = 0
			company.cnpj = "00657853000109"
			company.ie = "7012153702"
			company.razao = "TESTE DESENVOLVEDOR"
			company.nome = "DESENVOLVEDOR"
			company.cep = 87050170
			company.cidade = "Maringa"
			company.estado = "PR"
			company.bairro = "Jardim Liberdade"
			company.logradouro = "Rua Julio Mesquita"
			company.numero = 115
			company.ddd = 44
			company.telefone = 30312731
			company.contato = "responsavel"
			company.email = "dev@dev.dev"
			company.save(flush: true)
			
			Desenvolvedor dev = new Desenvolvedor()
			dev.empresa = company
			dev.save(flush: true)
			
			Sistema sistem = new Sistema()
			sistem.nome = 'Gondola'
			sistem.desenvolvedor = dev
			sistem.save(flush: true)
		}
		
		
    }
    def destroy = {
    }
}
