<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>PSYC</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen  animated fadeInDown">
        <div>
            <div style="margin-left: -11em;">

                <h1 class="logo-name">PSYC</h1>

            </div>
            <h3>Seja Bem Vindo ao PSYC</h3>
            <p>
                PSYC é um sistema desenvolvido para auxiliar professores e alunos do curso de pisicologia da
                faculdade ingá no acompanhamento de seus pacientes.
            </p>
            <p>Entre, para ter acesso ao PSYC</p>
            <form class="m-t" role="form" method="post" action="./index.php">
                <div class="form-group">
                    <input type="text" class="form-control" id="log_user" name="log_user" placeholder="Usuário" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="log_pwd" name="log_pwd" placeholder="Senha" required="">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Entrar</button>

                <a href="#"><small>Esqueceu sua Senha?</small></a>
            </form>
            <p class="m-t"> <small>&copy; Ciências da Computação 2015</small> </p>
        </div>
    </div>

    <script src="js/jquery-2.1.1.js"></script>
    <script src="js/bootstrap.min.js"></script>

</body>

</html>
