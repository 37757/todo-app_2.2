<?php

$url = "https://pokeapi.co/api/v2/pokemon/ditto";

$json = file_get_contents($url);

$data = json_decode($json, true);

header('Content-Type: application/json');
echo json_encode($data);