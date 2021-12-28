const songslist = [
  {
    name: "kush1",
    title: "Cartoon--On--On",
    artist: "feat-Daniel-Levi",
  },
  {
    name: "kush2",
    title: "Faded",
    artist: "Alan Walker",
  },
  {
    name: "kush3",
    title: "i'm so tired",
    artist: "Lauv, Troye Sivan",
  },
  {
    name: "kush4",
    title: "Love Me Like You Do",
    artist: "Ellie Gaulding",
  },
  {
    name: "kush5",
    title: "Butter",
    artist: "BTS",
  },
  {
    name: "kush6",
    title: "Closer",
    artist: "The Chainsmokers ft Halsey",
  },
];

const imglist = [
  {
    name: "kush1",
  },
  {
    name: "kush2",
  },
  {
    name: "kush3",
  },
  {
    name: "kush4",
  },
  {
    name: "kush5",
  },
  {
    name: "kush6",
  },
];
const music = document.querySelector("audio");
const play_pause = document.getElementById("playPause");
const img = document.getElementById("songimg");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// const pausebutton =document.getElementById('pause');
const progressBar = document.querySelector("#progress-bar"); // element where progress bar appears

let isplaying = false;

const playsong = () => {
  isplaying = true;
  music.play();
  // play.classList.replace("fa-play","fa-pause");

  // pausebutton.style.display ="block";

  play_pause.src = "Assets/img/icons/pause.png";

  img.classList.add("spin_img");
};

const pausesong = () => {
  isplaying = false;
  music.pause();
  play_pause.src = "Assets/img/icons/play.png";

  img.classList.remove("spin_img");
};

play_pause.addEventListener("click", () => {
  //  if(isplaying){
  //      pausesong();
  //  }else{
  //      playsong();
  //  }
  isplaying ? pausesong() : playsong();
});

const loadsong = (songslist) => {
  title.textContent = songslist.title;
  artist.textContent = songslist.artist;
  music.src = "Assets/songs/" + songslist.name + ".mp3";
  img.src = "Assets/img/" + songslist.name + ".png";
};
let songindex = 0;

const nextSong = () => {
  songindex = (songindex + 1) % songslist.length;
  loadsong(songslist[songindex]);
  playsong();
};

const prevSong = () => {
  songindex = (songindex - 1 + songslist.length) % songslist.length;
  loadsong(songslist[songindex]);
  playsong();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
  progressBar.max = music.duration;
  progressBar.value = music.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(music.currentTime)
  );
  if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(music.duration)
    );
  }
}

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
  music.currentTime = progressBar.value;
}
