const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs =[
    {
        id: 0,
        title: "GUH",
        artist: "Betty Grape",
        duration: "4:42",
        src: "https://open.spotify.com/embed/track/1rKGX07HwaS7UZfp4oX57b?utm_source=generator",
    },
    {
        id: 1,
        title: "Fashion Show",
        artist: "Jonathan Blake",
        duration: "4:42",
        src: "https://open.spotify.com/embed/track/0mYzMi6O493Cdxs3p5awro?utm_source=generator"
    },
    {
        id: 2,
        title: "Lime In My Corona",
        artist: "Matt Ginno",
        duration: "2:52",
        src: "https://open.spotify.com/embed/track/7sVZigPT0hpKhpdxG8ojG9?utm_source=generator",
    },
    {
        id: 3,
        title: "Under A Blue Sky",
        artist: "Leo Kelly-Gee",
        duration: "5:22",
        src: "https://open.spotify.com/embed/track/0LTCcfputL74PSP7Sf3q1d?utm_source=generator",
    },
    {
        id: 4,
        title: "Lazarus",
        artist: "Ugly Yeti",
        duration: "3:38",
        src: "https://open.spotify.com/embed/track/0DvqXFO9FUPwRNOqdtokrU?utm_source=generator",
    },
    {
        id: 5,
        title: "Credit",
        artist: "Crouton Cannon",
        duration: "3:21",
        src: "https://open.spotify.com/embed/track/7EPIg7KAW2gYUdIbgCIelX?utm_source=generator",
    },
    {
        id: 6,
        title: "Give A Damn",
        artist: "Nico Grund",
        duration: "3:05",
        src: "https://open.spotify.com/embed/track/67U58fEQcxVsR6DOIpWiN4?utm_source=generator",
    },
    {
        id: 7,
        title: "Cloudsway",
        artist: "Zoula",
        duration: "7:19",
        src: "https://open.spotify.com/embed/track/32AKuGpwDFUAjBLXSv4Ljf?utm_source=generator",
    },
    {
        id: 8,
        title: "The Unknown",
        artist: "Adam Haddour",
        duration: "2:58",
        src: "https://open.spotify.com/embed/track/3aK1slHfg6DypLgV2dsqqG?utm_source=generator",
    },
    {
        id: 9,
        title: "Something You Know",
        artist: "Bandra Hursel",
        duration: "5:43",
        src: "https://open.spotify.com/embed/track/69bH4QiDKwhN6vv6sFJ2PG?utm_source=generator",
    }
];

const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0
};

const renderSongs = (array) => {
    const songsHTML = array.map((song) => {
        return `
            <li id="song-${song.id}" class="playlist-song">
                <button class="playlist-song-info">
                    <span class="playlist-song-title">${song.title}</span>
                    <span class="playlist-song-artist">${song.artist}</span>
                    <span class="playlist-song-duration">${song.duration}</span>
                </button>
                <button class="playlist-song-delete" aria-label="Delete ${song.title}">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                </button>
            </li>
        `
    }).join("");

    playlistSongs.innerHTML = songsHTML;
};

renderSongs(userData?.songs);
