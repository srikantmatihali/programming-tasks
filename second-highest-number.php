<?php
/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: 
 *  Find Second highest number within an array
 *   Inputs: Array = [-1,2,19,16,-4,-7]
 *   Output:  16
 * 
 */
$array = array(-1,2,19,16,-4,-7);
$first = $array[0];
$second = $array[0];

for($i=0;$i<count($array);$i++){

    if($second>$array[$i]){
     $second = $array[$i];
    }

    if($first<$second){
        $temp = $first;
        $first = $second;
        $second = $first;
    }
}
?>