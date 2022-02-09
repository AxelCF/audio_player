<?php

    include '../../UTILS/connect_db.php';

    if(isset($_POST['linkfile']) 
    && isset($_POST['title']) 
    && isset($_POST['artist']) 
    && isset($_POST['linkcover']) 
    && !empty($_POST['linkfile']) 
    && !empty($_POST['title']) 
    && !empty($_POST['artist']) 
    && !empty($_POST['linkcover'])){

        $req = $db->prepare("INSERT INTO links (song, title, artist, cover) VALUES(?,?,?,?)");
        $req->execute(array($_POST['linkfile'], $_POST['title'], $_POST['artist'],$_POST['linkcover'] ));
        
        }else{
            header("Location: ../../../form.php");
        }        
?>

