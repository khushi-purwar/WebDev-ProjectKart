const prev = document.querySelector(".prev i"),
next = document.querySelector(".next i"),
video = document.querySelector(".video-lab video"),
play_pause = document.querySelector(".play_pause"),
text_name = document.querySelector(".name"),
img_box = document.querySelector(".img");

prev.addEventListener("click", (e) =>{
    prevTrack();
    backwrd();
});
next.addEventListener("click", (e) =>{
    nextTrack();
    fwrd();
});
// Specify globally used value
let track_index = 0;
let isPlaying = false;

// Create the video element for the player
let curr_track = document.createElement('video');
let track_list = [
    {
        path: "videos/random_video2.mp4"
	},
	{
        path: "videos/random_video3.mp4"
	},
	{
        path: "videos/random_video4.mp4"
	},
	{
        path: "videos/random_video5.mp4"
	},
	{
        path: "videos/random_video6.mp4"
	},
	{
        path: "videos/random_video7.mp4"
	},
	{
        path: "videos/random_video8.mp4"
	},
];
let track = [
    "videos/random_video2.mp4",
    "videos/random_video3.mp4",
    "videos/random_video4.mp4",
    "videos/random_video5.mp4",
    "videos/random_video6.mp4",
    "videos/random_video7.mp4",
    "videos/random_video8.mp4"
]
let radome_track = track[Math.floor(Math.random()*track.length)]; //sorting items one-by-one and picking them randomly
window.onload = (e)=>{
    video.src = radome_track;
}

loadTrack(track_index);


function loadTrack(track_index) {
    
    video.src = track_list[track_index].path;
    curr_track.load(); 
    curr_track.addEventListener("ended", nextTrack);
}
function playpauseTrack() {
   
    if(!isPlaying) playTrack();
    else pauseTrack();
}
video.addEventListener("click", e => {
    pauseTrack();
    console.log(e);
});

function pauseTrack() {
   
    video.pause();
    isPlaying = false;
    play_pause.classList.add("show");
    play_pause.innerHTML = "<i class='bx bx-play' ></i>";

    setTimeout(()=>{
        video.play();
        isPlaying = true;
        play_pause.innerHTML = "<i class='bx bx-pause' ></i>";
    },1000);

    setTimeout(()=>{
        play_pause.classList.remove("show");
    }, 1300);
}
function nextTrack() {
    
    if(track_index < track_list.length - 1)
    track_index += 1;
    else track_index = 0;

 
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
  
    if(track_index > 0)
    track_index -= 1;
    else track_index = track_list.length;

   
    loadTrack(track_index);
    playTrack();
}
function playTrack() {

	curr_track.play();
	isPlaying = true;
}
function backwrd() {
   
    idArray = new Array()
    idArray [1] = "@techno_logy"
    idArray [2] = "@primal_tech"
    idArray [3] = "@tech_videos"
    idArray [4] = "@PC_Work"
    idArray [5] = "@Meta_verse"
  
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
function fwrd() {
   
    idArray = new Array()
    idArray [1] = "@techno_logy"
    idArray [2] = "@primal_tech"
    idArray [3] = "@tech_videos"
    idArray [4] = "@PC_Work"
    idArray [5] = "@Meta_verse"
  
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
img_box.addEventListener("click", (e) => {
    console.log(e);
    img_box.classList.add("followed");

    setTimeout(()=>{
        img_box.classList.add("fade");
    },1400);
});