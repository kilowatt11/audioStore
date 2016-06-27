//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  console.log(songList);
  
  for (var i = 0; i < songList.length; i++) {
    var songs = songList[i];
 
    var tabs = document.createElement('div')
    var tabs2 = document.createElement('div')
    tabs.className = 'media'
    tabs.innerHTML += '<div class = "media-left"><a class="media-left" href="#"><img class="media-object" src="' + songs.albumArt + '"alt ="..."/> </a><br>';
    tabs.innerHTML += '<div class="media-body"><h4 class="media-heading">' + songs.artist + '</h4><p>' + songs.title + ": " + songs.price + '</p><p><audio src="'+ songs.preview + '" preload="auto" controls></audio><p></div>'
    document.getElementById("content").appendChild(tabs);
    
  } 
  
  
}