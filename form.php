<!DOCTYPE html>
<html lang="en">
    <? include("/laragon/www/audio_player/INC/head.php") ?>
    <body>
        <? include("/laragon/www/audio_player/INC/header.php") ?>
        <form action="" method="post">
            <label for="link">Adresse du fichier</label>
            <input type="text" name="linkFile">
            <br>
            <br>
            <label for="">Adresse de l'image</label>
            <input type="text" name="linkCapture">
            <input type="submit" name="submit">
        </form>
        <? include("/laragon/www/audio_player/INC/footer.php") ?>
    </body>
</html>