<!DOCTYPE html>
<html lang="en">
    <?php include('./INC/head.php'); ?>
    <body>
        <?php include("./INC/header.php"); ?>
    <h2>Pour vous</h2>
        <div class="playlists">
        
        </div>
            
        <div id=audio_player>
            <div class="container">
	            <div class="glow">
		            <div class="text-container">
			            <span class="text">Lecteur Audio</span>
			            <br>
			            <span class="text">"Avec panache"</span>
			            <br>
			        <div class="playback_controls">
                        <button onclick="changeMusicBck()"><i class="fa fa-fast-backward"></i></button>
                        <button id="playpause" onclick="playPause()"><i class="fa fa-play"></i></button>
                        <button onclick="stop()"><i class="fa fa-stop"></i></button>
                        <button onclick="changeMusicFwd()"><i class="fa fa-fast-forward"></i></button>
			        </div>
			        <br>
			        <div id="seekbar">
				        <input type="range" oninput="setPos(this.value)" id="seek" value="0" max="">
			        </div>
			        <br>
			        <div class="volume_controls">
                        <button id="mute" onclick="mute()"><i class="fa fa-volume-up"></i></button>
                        <div id="setvolume">
                            <input type="range" id="volume" oninput="setVolume(this.value)" min="0.0" max="1" step="0.1" value="0.0">
                        </div>
			        </div>
		            </div>
	            </div>
            </div>
        </div>
        <?php include("./INC/footer.php") ?>
    </body>
</html>