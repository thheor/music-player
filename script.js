const title1 = document.getElementById('title-1'),
      title2 = document.getElementById('title-2'),
      title3 = document.getElementById('title-3'),
      artist = document.getElementById('play-artist'),
      dur = document.getElementById('dur'),
      prevBtn = document.getElementById('prev'),
      playBtn = document.getElementById('play'),
      nextBtn = document.getElementById('next'),
      cover = document.getElementById('cover'),
      playMsc = document.getElementById('music-play'),
      footer = document.getElementById('footer'),
      playTitle = document.getElementById('play-title'),
      currentTimeEl = document.getElementById('current-time'),
      durationEl = document.getElementById('duration'),
      progress = document.getElementById('progress'),
      playerProgress = document.getElementById('player-progress');

let isPlaying = false;
let musicIndex = 0;

const music = new Audio();

const songs = [
    {
        title: 'Annihilate',
        artist: 'Metro Boomin',
        path: 'src/songs/annihilate.mp3',
        cover: 'src/song_img/1.jpg'
    },
    {
        title: 'Summertime Lovin`',
        artist: 'Zatrix',
        path: 'src/songs/summertime lovin.mp3',
        cover: 'src/song_img/2.jpg'
    },
    {
        title: 'Sunflower',
        artist: 'Post Malone',
        path: 'src/songs/sunflower.mp3',
        cover: 'src/song_img/3.jpg'
    }
]

function togglePlay(){
    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
}

function topMusic(index){
    musicIndex = index;
    loadMusic(index);
    playSong();
    displayMusic();
}

function playSong(){
    isPlaying = true;
    
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(index){
    music.src = songs[index].path;
    cover.src = songs[index].cover;
    playTitle.innerHTML = songs[index].title;
    artist.innerHTML = songs[index].artist;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(musicIndex);
    playSong();
}

function displayMusic() {
    playMsc.style.display = 'initial';
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

title1.addEventListener("click", () => topMusic(0));
title2.addEventListener("click", () => topMusic(1));
title3.addEventListener("click", () => topMusic(2));
playBtn.addEventListener("click", () => togglePlay(songs[1]));
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);