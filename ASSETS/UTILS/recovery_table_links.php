<?php

$recoveryLinks = $db->query("SELECT * FROM links");

foreach ($recoveryLinks as $link) {
    print_r($link);
}