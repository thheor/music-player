const title1 = document.getElementById('title-1'),
      title2 = document.getElementById('title-2'),
      title3 = document.getElementById('title-3'),
      artist = document.getElementById('artist'),
      prevBtn = document.getElementById('prev'),
      playBtn = document.getElementById('play'),
      nextBtn = document.getElementById('next'),
      cover = document.getElementById('cover');

let isPlaying = false;
let musicIndex = 0;

const music = new Audio();

const songs = [
    {
        path: 'src/songs/annihilate.mp3',
        cover: 'src/song_img/1.jpg'
    },
    {
        path: 'src/songs/summertime lovin.mp3',
        cover: 'src/song_img/2.jpg'
    },
    {
        path: 'src/songs/sunflower.mp3',
        cover: 'src/song_img/3.jpg'
    }
]

// title.addEventListener("click", changeCover(songs));

function togglePlay(song){
    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
}

function topMusic(song){
    if(isPlaying){
        pauseSong();
        music.pause();
    } else {
        loadMusic(song);
        music.play();
        playSong(song);
    }
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

function loadMusic(song){
    music.src = song.path;
    cover.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playSong();
}

title1.addEventListener("click", () => topMusic(songs[0]));
title2.addEventListener("click", () => topMusic(songs[1]));
title3.addEventListener("click", () => topMusic(songs[2]));
playBtn.addEventListener("click", () => togglePlay(songs[1]));
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
window.addEventListener('keydown', music.pause());
// prevBtn.addEventListener("click", () => changeMusic(-1));