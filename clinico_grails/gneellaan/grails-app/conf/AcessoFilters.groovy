class AcessoFilters {
	def filters = {
		loginCheck(controller: '*', action: '*') {
			before = {
				if (
				!session.userId 
				&& !session.nome 
				&& !actionName.equals('login') 
				&& !actionName.equals('autenticar') 
				&& !controllerName.equals("assets")
				&& !controllerName.equals("ecf")
				&& !controllerName.equals("computador")
				){
					redirect(controller: 'Autenticacao', action:'login')
				}
			}
		}
	}
}
