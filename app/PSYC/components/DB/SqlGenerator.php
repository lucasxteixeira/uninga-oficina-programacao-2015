<?php
    /**
    *
    */
    class SqlGenerator
    {

        function __construct()
        {
            # code...
        }

        public function insert($tableName, $keyValue){
			$tableName = preg_replace('/[^[:alpha:]_]/', '',$tableName);
            $campoList = "";
            $valueList = "";

            foreach ($keyValue as $key => $val) {
                //$campoList .= preg_replace('/[^[:alpha:]_]/', '',$key).",";
                //$valueList .= "'".preg_replace('/[^[:alpha:]_]/', '',$val)."',";
				$campoList .= $key.",";
                $valueList .= "'".$val."',";
            }

            $campoList = substr_replace($campoList, "", -1,1);
            $valueList = substr_replace($valueList, "", -1,1);

            return "INSERT INTO " . $tableName . " (". $campoList .") VALUES (". $valueList .")";

        }

        public function update($tableName, $keyValue, $condition){

            $campoValue = "";
            foreach ($keyValue as $key => $val) {
                $campoValue .= "$key = $val,";
            }
            $campoValue = substr_replace($campoValue, "", -1,1);

            if ($condition) {
                $condition = " WHERE $condition";
            } else {
                echo "Condição de update não pode ser vazia";
                return false;
            }

            return "UPDATE  $tableName  SET  $campoValue $condition";

        }

    }