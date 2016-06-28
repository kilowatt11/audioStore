//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList) {
    console.log(songList);
    document.getElementById('artists').innerHTML = '';
    for (var i = 0; i < songList.length; i++) {
        var songs = songList[i];
        var tabs = document.createElement('li');
        tabs.className = 'jumbotron list-item'
        tabs.innerHTML += '<h2>' + songs.artist + '<h2>'
        tabs.innerHTML += '<img class="media-object img-rounded" src="' + songs.albumArt + '"alt ="..."/>'
        tabs.innerHTML += '<h4>' + songs.collection + '<h4>'
        tabs.innerHTML += '<h3>' + songs.title + '<h3>' 
        tabs.innerHTML += '<audio src="'+ songs.preview + '" preload="auto" controls></audio>'
        document.getElementById("artists").appendChild(tabs);
  
    }
}
document.addEventListener('play', function(e){
   var audios = document.getElementsByTagName('audio');
   for(var i = 0, len = audios.length; i < len;i++){
       if(audios[i] != e.target){
           audios[i].pause();
       }
   }
}, true);