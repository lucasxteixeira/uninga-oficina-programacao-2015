<?php
    /**
    *
    */
    class Crypto
    {

        function __construct()
        {
            # code...
        }

        public function codifica($string)
        {
            return base64_encode(base64_encode($string));
        }

        public function decodifica($stringcodificada)
        {
            return base64_decode(base64_decode($stringcodificada));
        }

        public function codificaSenha($string) {

            $codifica = base64_encode(md5($string));
            $codifica = sha1($codifica);

            return $codifica;
        }
    }