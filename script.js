console.log("Welcome to spotify");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName')
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Badi Mushkil Hai", filePath: "songs/0.mp3", coverPath: "covers/c1.jpg" },
    { songName: "Dekha jo tumko", filePath: "songs/1.mp3", coverPath: "covers/c2.jpg" },
    { songName: "Dil Hai Ki Manta Nahi", filePath: "songs/2.mp3", coverPath: "covers/c3.jpg" },
    { songName: "Ghar Se Nikalte Hi", filePath: "songs/3.mp3", coverPath: "covers/c4.jpg" },
    { songName: "Tu jaan hai armaan hai", filePath: "songs/4.mp3", coverPath: "covers/c5.jpg" },
    { songName: "Tum Dil Ki Dhadkan Mein", filePath: "songs/5.mp3", coverPath: "covers/c6.jpg" },
    { songName: "Upar Khuda Aasman Niche", filePath: "songs/6.mp3", coverPath: "covers/c7.jpg" },
    { songName: "Pushpa BGM", filePath: "songs/7.mp3", coverPath: "covers/c8.jpg" },
    { songName: "Do dil mil rahe hain", filePath: "songs/8.mp3", coverPath: "covers/c9.jpg" },
    { songName: "Chand taare phool shabnam tumse achha", filePath: "songs/9.mp3", coverPath: "covers/c10.jpg" }
]

songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

/* audioElement.play(); */
// handle play/pause click
masterPlay.addEventListener('click', () => {


    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () => {

    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', () => {

    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})