
 <?php
/**
 * Author: Srikanth V Mattihalli
 * License: MIT
 * Problem Statment: 
 *   find the number of occurences of g in the  following
 *   Inputs:  String = "globallogic logic gi"
 *   Output:  [0, 4] - indices within array
 * 
 */
 echo 'Number of Ocurrences of a letter';
 echo '=========================================';

$input ='l';
$data = "globallogic logic gi";

function findCount($input,$data){
    $tempCount = 0;
    $dataCount = strlen($data);
    for($i=0;$i<$dataCount;$i++){
        if($input==$data[$i]){
            $tempCount++;
        }
    }
    return $tempCount;
}

$totalCount = findCount($input,$data);
echo $totalCount;
?>
