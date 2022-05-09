<?php

class BaseApi {
	/*
	 * An api helper class
	 */
	
	// send error
	public function return_error($msg="", $data=array()){
		return json_encode(array("success" => "0", "msg" => $msg, "data" => $data));
	}
	
	// send success
	public function return_success($msg="", $data=""){
		return json_encode(array("success" => "1", "msg" => $msg, "data" => $data));
	}
}


class LoginAPI extends BaseAPI {
	
	public function login($username, $password) {
		if(empty($username)) {
			return $this->return_error("Error: username is required", array("field" => "username"));
		}
		if(empty($password)) {
			return $this->return_error("Error: password is required", array("field" => "password"));
		}
		
		// first validate the username, then the password
		if(!$this->_validate_user($username)) {
			// invalid login
			return $this->return_error("Error: username is invalid", array("field" => "username"));
		} else if(!$this->_validate_pass($password)){
			// invalid login
			return $this->return_error("Error: password is invalid", array("field" => "password"));
		} else {
			// valid login
			return $this->return_success("Login successful");		
		}
	}
	
	// validate username
	private function _validate_user($username) {
		if($username !== "isocket"){
			return false;
		} else {
			return true;
		}		
	}			
	// validate password
	private function _validate_pass($password) {
		if($password !== "password"){
			return false;
		} else {
			return true;
		}		
	}			
}

$Login = new LoginAPI();

echo $Login->login($_POST['username'], $_POST['password']);

?>