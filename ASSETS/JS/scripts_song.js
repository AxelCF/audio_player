

fetch('./ASSETS/PHP/PROCESS/recup_playlist.php').then(function (response) {
    return response.json();
}).then(function (text) {
    console.log(text);


    text.forEach(cover => {
        document.querySelector('.playlists').innerHTML += `

<div class="text" id="playlist-${cover.id}" data-id="${cover.id}">
<div class="case">
    <img src="./ASSETS/COVER/${cover.image}">
</div>
    <p>Un mix pas infini parce que il ne faut pas déconner</p>
</div>`;


    });
}).then(_ => {
    const idPlaylists = document.querySelectorAll('.text');
    idPlaylists.forEach((element) =>{
        const idPlaylist = element.dataset.id;
        
        element.addEventListener('click', () =>{
            getSongsFromPlaylist(idPlaylist);
    
        })
    })
    
    getSongsFromPlaylist();
})

function getSongsFromPlaylist(id) {
    fetch('./ASSETS/PHP/PROCESS/recup_song.php).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);

        let songLinks = [];

        text.forEach(song => {
            console.log(song.link);
            songLinks.push('./ASSETS/MUSIC/' + song.link);

        });
        arrayLinks = songLinks;
    });
}
