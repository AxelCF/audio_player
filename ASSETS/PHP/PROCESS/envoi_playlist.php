<?php

    include '../../UTILS/connect_db.php';

    if(isset($_POST['linkcover']) && !empty($_POST['linkcover'])){
        $req = $db->prepare("INSERT INTO playlist (coverplaylist) VALUES(?)");
        $req->execute(array($_POST['linkcover']));
        
        }else{
            echo 'error';
        }        
?>

