/*

Fork modifié par "Jessee D'antonio"
Projet original : https://codepen.io/codingandstuff/pen/rNNNzyW?editors=0010

Modifications ( hors bugs corrigé ) :

  - Ajout de la possibilité de changer de musique "fichiers ou urls".
  - Ajout de la possibilité sur le bouton "back" de changer de musique si <= 5 secondes ou de remettre le temps à zero le temps de la musique si >.
  - Amélioration de la gestion du volume.
  - Remplacement des déclarations des variables "var" par "let".
  - Abaissement à 0 du volume par défaut.
  - Supression des lignes inutiles, indentation de mon code.
  - Ajout d'un changement d'état sur le bouton "playpause".
  - Ajout du changement automatique de musique quand celle-ci arrive à la fin.
  - Ajout du changement d'état du bouton stop. 
  - Remise à zero de l'index avec l'action du bouton stop.
  
*/

let song = new Audio;
let muted = false;
song.volume = document.getElementById('volume').value;
let vol = song.volume;
let i = 0;
let saveVolume = 0.0;

song.type = 'audio/mp3';
arrayLinks = [];
 
song.src = arrayLinks[i];

function changeMusicAuto(curtime, duration){
  if (curtime == Math.floor(duration) 
  || curtime == Math.ceil(duration)) {
    if(i > arrayLinks.length - 2){
      stop();
      song.src = arrayLinks[i = 0];
      song.play();
    }else{
      stop()
      song.src = arrayLinks[i += 1];
      playPause();
    }
  }
}

function changeMusicFwd(){
        if (i > arrayLinks.length - 2){
        stop();
        song.src = arrayLinks[i = 0];
        playPause();
      }else{
        stop();
        song.src = arrayLinks[i += 1];
        playPause();
      }
  }
function changeMusicBck(){
    if(song.currentTime <= 5){
      if (i < 1){
        stop();
        song.src = arrayLinks[i = arrayLinks.length -1];
        playPause();
      }
      else{
        stop();
        song.src = arrayLinks[i -= 1];
        playPause();
      }
    }else{
      song.currentTime = (song.currentTime = 0);
  }
}
function playPause() {
	if (!song.paused) {
		song.pause();
    document.getElementById('playpause').innerHTML = '<i class="fa fa-play"></i>';
	} else {
    song.src = arrayLinks[i];
    song.play();
    document.getElementById('playpause').innerHTML = '<i class="fa fa-pause"></i>';
	}
}
function stop() {
	playPause();
	song.currentTime = 0;
  song.src = arrayLinks[0];
	document.getElementById('seek').value = 0;
}
function setPos(pos) {
	song.currentTime = pos;
}
function mute() {
	if (muted) {
    document.getElementById('volume').value = saveVolume;
		song.volume = vol;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
		muted = false;
	} else {
		song.volume = 0.0;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
    saveVolume = document.getElementById('volume').value;
    document.getElementById('volume').value = 0.0;
		muted = true;
	}
}
function setVolume(volume) {
  if(volume == 0.0){
    mute();
    vol = 0;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
  }else{
    muted = false;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
  }
  if(!muted){
    song.volume = volume;
    vol = volume;
  }
}
song.addEventListener('timeupdate',function() {
  curtime = parseInt(song.currentTime,10);
	document.getElementById('seek').max = song.duration;
	document.getElementById('seek').value = curtime;

  console.log(curtime + " / " + document.getElementById('seek').max);

  changeMusicAuto(curtime, document.getElementById('seek').max);
})