<?php

$data = file_get_contents('./data-structure.json');
header('Content-Type: application/json');
echo $data;

?>