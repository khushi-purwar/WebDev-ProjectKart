const elements = {
    player: getEl('.player'),
    video: getEl('video'),
    progressRange: getEl('.progress-range'),
    progressBar: getEl('.progress-bar'),
    playBtn: document.getElementById('play-btn'),
    volumeIcon: document.getElementById('volume-icon'),
    volumeRange: getEl('.volume-range'),
    volumeBar: getEl('.volume-bar'),
    currentTime: getEl('.time-elapsed'),
    durationTime: getEl('.time-duration'),
    fullscreenBtn: getEl('.fullscreen'),
    speed: getEl('.player-speed'),
  };
  
  // Function to quickly assign element constants -------------------------- //
  function getEl(el) {
    return document.querySelector(el);
  }
  
  // Play & Pause ---------------------------------------------------------- //
  function showPlayIcon() {
    elements.playBtn.classList.replace('fa-pause', 'fa-play');
    elements.playBtn.setAttribute('title', 'Play');
  }
  
  // Toggle play vs pause
  function togglePlay() {
    if (elements.video.paused) {
      elements.video.play();
      elements.playBtn.classList.replace('fa-play', 'fa-pause');
      elements.playBtn.setAttribute('title', 'Pause');
    } else {
      elements.video.pause();
      showPlayIcon();
    }
  }
  
  // show play button when video ends
  elements.video.addEventListener('ended', showPlayIcon);
  
  // Progress Bar ---------------------------------------------------------- //
  
  // Calculate display time format
  function displayTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  }
  
  // Update Progress bar as video plays
  function updateProgress() {
    elements.progressBar.style.width = `${
      (elements.video.currentTime / elements.video.duration) * 100
    }%`;
    elements.currentTime.textContent = `${displayTime(
      elements.video.currentTime
    )} / `;
    elements.durationTime.textContent = `${displayTime(elements.video.duration)}`;
  }
  
  // Click to Seek within video
  function setProgress(e) {
    const newTime = e.offsetX / progressRange.offsetWidth;
    elements.progressBar.style.width = `${newTime * 100}%`;
    elements.video.currentTime = newTime * video.duration;
  }
  
  // Volume Controls ------------------------------------------------------- //
  // Save the last used volume
  let lastVolume = 1;
  let currentVolIcon = '';
  
  // volume bar
  function changeVolume(e) {
    let volume = e.offsetX / elements.volumeRange.offsetWidth;
    // Rounding Volume up or down
    if (volume < 0.1) {
      volume = 0;
    }
    if (volume > 0.9) {
      volume = 1;
    }
    elements.volumeBar.style.width = `${volume * 100}%`;
    elements.video.volume = volume;
    // Change Icon based on volume
    elements.volumeIcon.className = ''; // Resets all classes
    if (volume > 0.7) {
      currentVolIcon = 'fa-volume-up';
      elements.volumeIcon.classList.add('fas', `${currentVolIcon}`);
    } else if (volume < 0.7 && volume > 0) {
      currentVolIcon = 'fa-volume-down';
      elements.volumeIcon.classList.add('fas', `${currentVolIcon}`);
    } else if (volume === 0) {
      currentVolIcon = 'fa-volume-off';
      elements.volumeIcon.classList.add('fas', `${currentVolIcon}`);
    }
    lastVolume = volume;
  }
  
  // Mute / Unmute
  function toggleMute() {
    elements.volumeIcon.className = '';
    if (elements.video.volume) {
      lastVolume = elements.video.volume;
      elements.video.volume = 0;
      elements.volumeBar.style.width = 0;
      elements.volumeIcon.classList.add('fas', 'fa-volume-mute');
      elements.volumeIcon.setAttribute('title', 'Unmute');
    } else {
      elements.video.volume = lastVolume;
      elements.volumeBar.style.width = `${lastVolume * 100}%`;
      elements.volumeIcon.classList.add('fas', `${currentVolIcon}`);
      elements.volumeIcon.setAttribute('title', 'Mute');
    }
  }
  
  // Change Playback Speed ------------------------------------------------- //
  
  function changeSpeed() {
    elements.video.playbackRate = elements.speed.value;
  }
  
  // Fullscreen ------------------------------------------------------------ //
  
  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    elements.video.classList.add('video-fullscreen');
  }
  
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    elements.video.classList.remove('video-fullscreen');
  }
  
  let fullscreen = false;
  
  // Toggle fullscreen
  function toggleFullscreen() {
    if (!fullscreen) {
      openFullscreen(elements.player);
    } else {
      closeFullscreen();
    }
    fullscreen = !fullscreen;
  }
  
  // Event Listeners ------------------------------------------------------- //
  elements.playBtn.addEventListener('click', togglePlay);
  elements.video.addEventListener('click', togglePlay);
  elements.video.addEventListener('timeupdate', updateProgress);
  elements.video.addEventListener('canplay', updateProgress);
  elements.progressRange.addEventListener('click', setProgress);
  elements.volumeRange.addEventListener('click', changeVolume);
  elements.volumeIcon.addEventListener('click', toggleMute);
  elements.speed.addEventListener('change', changeSpeed);
  elements.fullscreenBtn.addEventListener('click', toggleFullscreen);