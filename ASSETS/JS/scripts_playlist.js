fetch('./ASSETS/PHP/PROCESS/recup_playlist.php').then(function(response) {
    return response.json();
}).then(function(text){
console.log(text);

    
 text.forEach(audio => {
     document.querySelector('.playlists').innerHTML += `

    <div class="text">
    <div class="case">
        <img src="${audio.coverplaylist}">
    </div>
        <p>Un mix pas infini parce que il ne faut pas déconner</p>
    </div>`


});
})