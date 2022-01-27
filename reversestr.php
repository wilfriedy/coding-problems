<?php

function stringreverse($char){

    $reversed__str='';
    for($i = strlen($char) - 1 ; $i >= 0 ; $i--){
        $reversed__str .= $char[$i];
    }
    echo $reversed__str;

}

stringreverse('helo');