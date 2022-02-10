const stateChangeTwo = document.getElementById("audio_player");
const elementTrigger = document.querySelectorAll("div.playlists");
elementTrigger.forEach(element => {
    element.addEventListener("click", function(){
        if(stateChangeTwo.style.display == "none"){

            stateChangeTwo.style.display = "block";

        }else{

            stateChangeTwo.style.display = "none";
            
        }
    });

})