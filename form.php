<!DOCTYPE html>
<html lang="fr">
    <? include("/laragon/www/audio_player/INC/head.php") ?>
    <body>
        <? include("/laragon/www/audio_player/INC/header.php") ?>
        <form action="./ASSETS/PHP/PROCESS/envoi_links.php" method="post">
            <label for="link file">Adresse du fichier</label>
            <input type="text" name="linkfile" value="./ASSETS/MUSIC/">
            <br><br>
            <label for="link capture">Adresse de l'image</label>
            <input type="text" name="linkcover" value="./ASSETS/IMG/">
            <br><br>
            <label for="">Titre de la musique</label>
            <input type="text" name="title">
            <br><br>
            <label for="">Nom de l'artiste</label>
            <input type="text" name="artist">
            <input type="submit" name="submit">
        </form>
        <? include("/laragon/www/audio_player/INC/footer.php") ?>
    </body>
</html>