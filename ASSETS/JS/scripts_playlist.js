fetch('./ASSETS/PHP/PROCESS/recup_playlist.php').then(function(response) {
    return response.json();
}).then(function(text){
console.log(text);

    
 text.forEach(cover => {
     document.querySelector('.playlists').innerHTML += `

    <div class="text" data-id="${cover.id}">
    <div class="case">
        <img src="./ASSETS/COVER/${cover.image}">
    </div>
        <p>Un mix pas infini parce que il ne faut pas déconner</p>
    </div>`


});
})