<?PHP

require_once "SqlGenerator.php";

class DataBase extends SqlGenerator{
	
	private $hostName;
    private $dataName;
    private $dataUser;
    private $dataPass;
	private $dataConn;
		
	function __construct() {
		$this->hostName = 'localhost';
		$this->dataName = 'capheezz_elderly';//'elderly';
		$this->dataUser = 'capheezz_elderly';//'root';
		$this->dataPass = '123mudar';//'root';
		$this->dataConn =  null;
		$this->open();
	}
	
    private function open(){
        $this->dataConn = mysql_connect(
			$this->hostName, 
			$this->dataUser, 
			$this->dataPass
		);
        mysql_select_db($this->dataName) or die ('nao possivel conectar com o banco de dados. Error: '.mysql_error());

        //configura acentuacao na gravacao em baco
        mysql_query("SET NAME 'utf8'");
        mysql_query('SET character_set_connection=utf8');
        mysql_query('SET character_set_client=utf8');
        mysql_query('SET character_set_results=utf8');
    }

    public function close(){
        mysql_close($this->dataConn);
    }

	private function freeSQL($sql) {
		try {
			mysql_query($sql) or die ('nao realizou select em seleciona - sem conexao. Error: '.mysql_error());
			return true;
		} catch (Exeption $erro) {
			print_r('Nao foi possivel executar SQL. FAILL: ' . $erro->getMessage());	
			return false;
		}
	}
	
	public function select($sql){
		
		$resultData = mysql_query($sql) or die ('nao realizou select em seleciona - sem conexao. Error: '.mysql_error());
		$rows = array();
		
		while($row = mysql_fetch_array($resultData)) {
			$rows[] = $row;
		}
		
		return json_encode($rows);
    }


    public function insert($tabela,$dados){
		
		if (!$tabela) {
			echo "Informe uma tabela.";
			return false;
		}
		
		if (!$dados) {
			echo "Informe valores";
			return false;
		}
		
		try {
			$this->freeSQL(SqlGenerator::insert($tabela,$dados));
			return true;
		} catch (exception $erro) {
			echo "Não foi possivel inserir registro. FAILL: " . $erro->getMessage();
			return false;
		}
    }


    //ALTERAR DADOS
    function update($tabela, $dados, $string){
        //pegar campos da array
        $arrCampo = array_keys($dados);
        //pegar valores da array
        $arrValores = array_values($dados);
        //contar os campos da array
        $numCampo = count($arrCampo);
        //contar os valores da array
        //$num_valores = count($arrValores /*&& $arrValores > 0*/);

        $SQL = '';
        //construcao da string (condicao where)
        //validacao dos campos
            $SQL = "UPDATE ".$tabela." SET ";
            for($i = 0; $i < $numCampo; $i++){
                $SQL .= $arrCampo[$i]." = '".$arrValores[$i]."',";
            }
            //tira a virgula do ultimo campo
            $SQL = substr_replace($SQL, " ", -1, 1);
            $SQL.= " WHERE $string";

        $this->select($SQL) or die(/*'Nome da Tabela, Valores estão diferentes do baco de dados ou ERROR IN UPDATE. Error: '.mysql_error()*/);
    }

}
?>