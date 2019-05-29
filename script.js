
let video = document.querySelector('.video');
let juice = document.querySelector('.bar-length');
let btnPlayPause = document.getElementById('play-pause');
let btnFullScreen = document.getElementById('fullscreen');
let btnReplay = document.getElementById('replay');
let btnMuteUnmute = document.getElementById('mute-unmute');

togglePlayPause = () => {
    if (video.paused) {
        btnPlayPause.className = 'pause';
        video.play();
    } else {
        btnPlayPause.className = 'play';
        video.pause();
    }
}

toggleFullScreen = () => {
    const isFullScreen = (video.fullscreenElement || video.webkitFullscreenElement || video.mozFullScreenElement || video.msFullscreenElement || null);

    if (isFullScreen === null) {
        if(video.requestFullscreen)
            video.requestFullscreen();
        else if(video.mozRequestFullScreen)
            video.mozRequestFullScreen();
        else if(video.webkitRequestFullscreen)
            video.webkitRequestFullscreen();
        else if(video.msRequestFullscreen)
            video.msRequestFullscreen();
    } 
    else {
        if(video.exitFullscreen)
            video.exitFullscreen();
        else if(video.mozCancelFullScreen)
            video.mozCancelFullScreen();
        else if(video.webkitExitFullscreen)
            video.webkitExitFullscreen();
        else if(video.msExitFullscreen)
            video.msExitFullscreen();
        
    }
}

toggleMute = () => {
    if (video.muted) {
        btnMuteUnmute.className = 'mute';
        video.muted = false;
    } else {
        btnMuteUnmute.className = 'unmute';
        video.muted = true;                
    }
    
}

btnPlayPause.onclick = () => {
    togglePlayPause();
}

btnReplay.onclick = () => {
    video.currentTime = 0;
}

btnFullScreen.onclick = () => {
    toggleFullScreen();
}

btnMuteUnmute.onclick = () => {
    toggleMute();
}

video.addEventListener('timeupdate', () => {
    let juicePosition = video.currentTime / video.duration;
    juice.style.width = juicePosition * 100 + '%';

    if (video.ended) {
        btnPlayPause.className = "play";
    }
})