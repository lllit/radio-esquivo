


// API

var imagen = document.getElementById("img__fondo")

var imagenAlbum = document.getElementById("img__album")

var temaActual = document.getElementById("tema_actual")

var generActual = document.getElementById("gener_actual")

setInterval(() => {
    $.getJSON("https://flouka.airtime.pro/api/live-info-v2",
        function (data) {
            // console.log(data)
            // var nombreSong = data[0].tracks.current.metadata.track_title;

            var defaultImage = "/assets/static.png";
            var imgSong = data.tracks.current.album_artwork_image

            var track_actual = data.tracks.current.metadata.track_title
            var gener_actual = data.tracks.current.metadata.genre

            if (!imgSong) {
                imgSong = defaultImage;
            }

            imagen.style.backgroundImage = `url(${imgSong})`

            imagenAlbum.src = imgSong

            temaActual.innerText = track_actual

            generActual.innerText = gener_actual

        }
    )

}, 1000)

setTimeout(() => {
    imagenAlbum.classList.add('animate__bounceIn')
}, 2000)

//=======================================
/* AUDIO */

const PLAYER = document.getElementById("play")

const AUDIO = new Audio();

const icon = document.getElementById("icon__player");

const VOLUME = document.getElementById("volume")

AUDIO.src = 'https://flouka-streaming-app.azurewebsites.net/stream?source=RadioFloukaWebsite';

PLAYER.addEventListener('click', () => {

    if (AUDIO.paused) {

        AUDIO.play()
        icon.classList.remove('fa-play')
        icon.classList.add('fa-stop')
    } else {

        AUDIO.pause()

        icon.classList.remove('fa-stop')
        icon.classList.add('fa-play')

    }

})

VOLUME.addEventListener('input', () => {
    AUDIO.volume = VOLUME.value;
});


//=======================================
