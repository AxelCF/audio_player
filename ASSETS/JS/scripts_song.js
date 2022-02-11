fetch('./ASSETS/PHP/PROCESS/recup_song.php').then(function(response) {
    return response.json();
}).then(function(text){
console.log(text);

    let songLinks = []
    
 text.forEach(song => {
     console.log(song.link);
     document.querySelector('.playlists').innerHTML += `

    <div class="text" id="playlist-${cover.id} data-id="${cover.id}">
    </div>`
     song.cover_id
     songLinks.push('./ASSETS/MUSIC/' + song.link)

});
arrayLinks = songLinks
})