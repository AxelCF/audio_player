fetch('./ASSETS/PHP/PROCESS/recup_song.php').then(function(response) {
    return response.json();
}).then(function(text){
console.log(text);

    let songLinks = []
    
 text.forEach(song => {
     console.log(song.link);
     songLinks.push('./ASSETS/MUSIC/' + song.link)

});
arrayLinks = songLinks
})