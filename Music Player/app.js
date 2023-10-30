let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");

song.onloadedmetadata=function()
{
    progress.max=song.duration;
    progress.value=song.currentTime;

}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause"))
    {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        
    }
}
if(song.play())
{
    setInterval(()=>{
        progress.value=song.currentTime;

    },500);
}
progress.onchange=function()
{
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    
}
// Define an array of song sources
const songs = [
     
     "media/Faslon ko Takalluf hai Hamse Agar  Slowed  Reverb with Lyrics  Zaid Writex.mp3",
     "media/Nasheed_Bayna roja wal khaufi qalbi.mp3",
     "media/Close Your eyes and feel this naa.mp3",
     "media/Y2meta.app - KUN ANT.mp3",
     "media/I Rise - Motivational Nasheed - By Muhammad al Muqit.mp3",
     
     
     // Add more songs here
  ];
  
  // Initialize the current song index
  let currentSongIndex = 0;
  
  // Function to load and play the current song
  function playCurrentSong() {
    song.src = songs[currentSongIndex];
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
  
  // Function to play the next song
  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
  }
  
  // Function to play the previous song
  function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playCurrentSong();
  }
  
  // Event listener for the "ended" event to automatically play the next song
  song.addEventListener("ended", playNextSong);
  
  // Add event listeners to forward and backward buttons
  document.querySelector(".fa-forward").addEventListener("click", playNextSong);
  document.querySelector(".fa-backward").addEventListener("click", playPreviousSong);
  
  

  // Define an array of song information
const songInfo = [
    { title: "roja wal khaufi qalbi", artist: "unknown" },
    { title: "Faslon ko Takalluf", artist: "Zaid Writex" },
    { title: "Close Your eyes", artist: "unknown" },
    { title: "KUN ANT", artist: "unknown" },
    { title: "I Rise", artist: "al Muqit" },

  ];
  // Function to update the song title and artist
function updateSongInfo() {
    const currentSong = songInfo[currentSongIndex];
    document.querySelector("h1").textContent = currentSong.title;
    document.querySelector("p").textContent = currentSong.artist;
  }
  
  
  // In the playCurrentSong() function, add the following line to update the song info:
  function playCurrentSong() {
    song.src = songs[currentSongIndex];
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    updateSongInfo(); // Update the song title and artist
  }
  