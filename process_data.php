<?php
header("Content-Type: application/json; charset=UTF-8");
$response = json_decode($_POST["x"], true);
//$response = json_decode('{"data": gtdfkgki}', false); // Check conveting invalid json

if ($response == null) {
  echo false;
} else {
  echo true;
}

?>