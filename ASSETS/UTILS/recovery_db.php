<?php

// Remplir le " dbname " car nous avons pas encore crée de base de donnée.

try {
        $db = new PDO('mysql:host=localhost;dbname=;charset=utf8', 'root', '', [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
    } catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }