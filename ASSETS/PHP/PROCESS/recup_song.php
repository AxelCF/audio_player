<?php
include '../../UTILS/connect_db.php';

            $reponse = $db->query('SELECT * FROM music');
            $donnees = $reponse->fetchAll(PDO::FETCH_CLASS);
            //Affichage de chaque message (toutes les données sont protégées par htmlspecialchars)
            $obj = json_encode($donnees);
                echo $obj;
            
            $reponse->closeCursor();
?>