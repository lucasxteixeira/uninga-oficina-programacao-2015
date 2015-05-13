<?PHP
	session_start();

	if (isset($_POST["log_user"]) && isset($_POST["log_pwd"])) {
		
		$_SESSION['u'] = $_POST["log_user"];
		$_SESSION['p'] = $_POST["log_pwd"];
		
		unset($_POST);
	}
    
    if (!isset($_SESSION['u']) || !isset($_SESSION['p'])) {
        require_once "./view/view/login/login.php";
    } else {
        require_once('./view/view/index.html');
    }