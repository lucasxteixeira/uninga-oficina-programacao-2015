<?php

	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	/**
	 * Insere dados na tabela de organizacao
	 */
	if (isset($_GET['set_org'])) {
		if (isset($_GET['org_razao'])){
			
			//$org_razao =  preg_replace('/[^[:alpha:]_]/', '',$_GET['org_razao']);
			$org_razao = $_GET['org_razao'];
			
			if ($org_razao != "") {
				
				$table = "organizacao";
				$value = array( "org_razao" => $org_razao );
				
				require_once("../../components/DB/DataBase.php");
				$DataBase = new DataBase();
				
				if ($DataBase->insert($table,$value)){
					
					echo "<script>".
						 "	toastr.options = {".
						 "		closeButton: true,".
						 "		progressBar: true,".
						 "		showMethod: 'slideDown',".
						 "		timeOut: 2000".
						 "	};".
						 "	toastr.sucess('Organizacao cadastrada com sucesso', 'Sucesso!');".
						 "</script>";
					
				} else {
				 	print_r(
						"<script>".
						"	toastr.options = {".
						"		closeButton: true,".
						"		progressBar: true,".
						"		showMethod: 'slideDown',".
						"		timeOut: 2000".
						"	};".
						"	toastr.danger('Houve uma falha ao realizar o cadastro, contate o suporte ;p ', 'Erro!');".
						"</script>"
					);
				}	
				$DataBase->close();		
			}
		} else {
			print_r(
				"<script>".
				"	toastr.options = {".
				"		closeButton: true,".
				"		progressBar: true,".
				"		showMethod: 'slideDown',".
				"		timeOut: 2000".
				"	};".
				"	toastr.warning('Campo de preenchimento obrigatório', 'Razão Social');".
				"</script>"
			);
		}
	}