console.log("welcome to spotify");
//initialize the variables

let isPlaying=false;

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlayButton = document.getElementById("masterPlayButton");
let bar = document.getElementById("bar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "another", filePath: "1.mp3" },
    { songName: "more", filePath: "2.mp3" },
    { songName: "YEAH", filePath: "3.mp3" },
    { songName: "Cris Cab- Liar", filePath: "4.mp3" },
    { songName: "one dance instrumental", filePath: "5.mp3" },
    { songName: "John Newman-Love Me Again", filePath: "6.mp3" },
    { songName: "Sam Smith-How Do You Sleep", filePath: "7.mp3" },
    { songName: "Taio Cruz - Dynamite", filePath: "8.mp3" },
    { songName: "TI - Whatever you like", filePath: "9.mp3" },
    { songName: "Tungevaag_Raaban_-_Bad_Boy", filePath: "10.mp3" },
]
//audioElement.play();
//play/pause click
masterPlayButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlayButton.classList.remove('fa-play-circle');
        masterPlayButton.classList.add('fa-pause-circle');
        gif.style.opacity = 0.5;
    }
    else {
        audioElement.pause();
        masterPlayButton.classList.remove('fa-pause-circle');
        masterPlayButton.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// time updater
audioElement.addEventListener('timeupdate', () => {
    //progress bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    bar.value = progress
});
    bar.addEventListener('change', () => {
    audioElement.currentTime = bar.value * audioElement.duration / 100;
});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        isPlaying=!isPlaying;

        function callPlay(){
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 0.5;
            masterPlayButton.classList.remove('fa-play-circle');
            masterPlayButton.classList.add('fa-pause-circle');
        }
        function callPause(){
            
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.src = `${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.pause();
            gif.style.opacity = 0.5;
            masterPlayButton.classList.remove('fa-pause-circle');
            masterPlayButton.classList.add('fa-play-circle');
        }
        isPlaying?callPlay():callPause();
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 0.5;
    masterPlayButton.classList.remove('fa-play-circle');
    masterPlayButton.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex >= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 0.5;
    masterPlayButton.classList.remove('fa-play-circle');
    masterPlayButton.classList.add('fa-pause-circle');
})