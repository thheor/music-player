const title = document.getElementById('title'),
      artist = document.getElementById('artist'),
      prevBtn = document.getElementById('prev'),
      playBtn = document.getElementById('play'),
      nextBtn = document.getElementById('next'),
      cover = document.getElementById('cover');

let isPlaying = false;

const music = new Audio('src/songs/sunflower.mp3');

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

playBtn.addEventListener("click", togglePlay);

function test(){
    if(isPlaying){
        music.pause();
    } else {
    }
}

function togglePlay(){
    if(isPlaying){
        pauseSong();
        music.pause();
    } else {
        playSong();
        music.play();
    }
}

function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    // loadMusic(songs);
}

function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
}

function loadMusic(song){
    music.src = song.path;
    cover.src = song.cover;
}
