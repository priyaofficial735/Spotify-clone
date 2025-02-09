// Sample playlist
const playlist = [
    { title: "Shape of You", artist: "Ed Sheeran", src: "assets/audio/shape_of_you.mp3", image: "assets/images/shape_of_you.jpg" },
    { title: "Blinding Lights", artist: "The Weeknd", src: "assets/audio/blinding_lights.mp3", image: "assets/images/blinding_lights.jpg" },
    { title: "Levitating", artist: "Dua Lipa", src: "assets/audio/levitating.mp3", image: "assets/images/levitating.jpg" },
];

let currentIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const songImage = document.getElementById('song-image');
const playlistElement = document.getElementById('playlist');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Load playlist
function loadPlaylist() {
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => playSong(index));
        playlistElement.appendChild(li);
    });
}

// Load and play song
function playSong(index) {
    currentIndex = index;
    const song = playlist[currentIndex];
    audioSource.src = song.src;
    audioPlayer.load();
    audioPlayer.play();
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songImage.src = song.image;
    playBtn.textContent = 'Pause';
}

// Play/Pause toggle
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }
});

// Next song
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    playSong(currentIndex);
});

// Previous song
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    playSong(currentIndex);
});

// Initialize playlist and play the first song
loadPlaylist();
playSong(currentIndex);
