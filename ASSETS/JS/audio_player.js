/*

Fork modifié par "Jessee D'antonio"
Projet original : https://codepen.io/codingandstuff/pen/rNNNzyW?editors=0010

  - Ajout de la possibilité de changer de musique "fichiers ou urls".
  - Ajout de la possibilité sur le bouton "back" de changer de musique si <= 5 secondes ou de reculer le temps " - 5 secondes " si >.
  - Amélioration de la gestion du volume "Mute si volume = 0", correction d'un bug de la fonction "mute" qui réinitialisé le volume de départ pour le mettre à fond.
  - Correction d'un bug graphique du bouton "mute" qui ne fonctionné par correctement.
  - Remplacement des déclarations des variables "var" par "let"
  - Abaissement du volume par défaut.
  - Supression des lignes inutiles, indentation de mon code. 
  
*/

let song = new Audio;
let muted = false;
song.volume = 0.2;
let vol = song.volume;
let i = 0;

song.type = 'audio/mp3';
arrayLinks = ['./ASSETS/MUSIC/LXSTCXNTURY-ODIUM.mp3', 
'https://www.bensound.com/bensound-music/bensound-dubstep.mp3',
 './ASSETS/MUSIC/Halsey-BALENCIAGA.mp3'];
 
//Audio file source url
song.src = arrayLinks[i];


function changeMusicFwd(){
        if (i > arrayLinks.length - 2){
        stop();
        i = 0;
        song.src = arrayLinks[i];
        song.play();
      }else{
        stop();
        i++;
        song.src = arrayLinks[i];
        song.play();
      }
  }
function changeMusicBck(){
    if(song.currentTime <= 5){
      if (i < 1){
        stop();
        i = arrayLinks.length -1;
        song.src = arrayLinks[i];
        song.play();
      }
      else{
        stop();
        i--;
        song.src = arrayLinks[i];
        song.play();
      }
    }else{
      song.currentTime = (song.currentTime - 5);
  }
}
function playPause() {
	if (!song.paused) {
		song.pause();
	} else {
		song.play();
	}
}
function stop() {
	song.pause();
	song.currentTime = 0;
	document.getElementById('seek').value = 0;
}
function setPos(pos) {
	song.currentTime = pos;
}
function mute() {
	if (muted) {
		song.volume = vol;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
		muted = false;
	} else {
		song.volume = 0;
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
		muted = true;
	}
}
function setVolume(volume) {
  if(volume == 0.0){
    mute();
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
  }else{
    document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
  }
	song.volume = volume;
	vol = volume;
}
song.addEventListener('timeupdate',function() {
	curtime = parseInt(song.currentTime,10);
	document.getElementById('seek').max = song.duration;
	document.getElementById('seek').value = curtime;
})