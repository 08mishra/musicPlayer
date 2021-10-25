let intial = document.querySelector('#initial');
let final = document.querySelector('#final');
let previous = document.querySelector('#backward');
let next = document.querySelector('#forward');
let playing = document.querySelector('#play');
let heading = document.querySelector('#music-heading');
let img = document.querySelector('#img');

let trackIndex = 0;
let isplaying = false;

let current_track = document.createElement('audio');

let track_list = [{
        path: 'music/01.mp3'
    },

    {
        path: 'music/02.mp3'
    },

    {
        path: 'music/03.mp3'
    },


    {
        path: 'music/04.mp3'
    },

    {
        path: 'music/05.mp3'
    },

    {
        path: 'music/06.mp3'
    },

    {
        path: 'music/07.mp3'
    },


    {
        path: 'music/08.mp3'
    },


    {
        path: 'music/09.mp3'
    },


    {
        path: 'music/10.mp3'
    },


    {
        path: 'music/11.mp3'
    },


    {
        path: 'music/12.mp3'
    },


    {
        path: 'music/13.mp3'
    },


    {
        path: 'music/14.mp3'
    },


    {
        path: 'music/15.mp3'
    },


    {
        path: 'music/16.mp3'
    },

    {
        path: 'music/17.mp3'
    }


];
loadTrack(trackIndex);

function loadTrack(trackIndex) {
    current_track.src = track_list[trackIndex].path;
    current_track.load();

    heading.textContent = 'playing ' + (trackIndex + 1) + 'of ' + track_list.length;
    img.classList = 'rotate';
    current_track.addEventListener('ended', nextTrack);

}



function playPauseTrack() {
    if (!isplaying) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function playTrack() {
    current_track.play();
    isplaying = true;
    playing.innerHTML = '<i class="fa fa-pause-circle"></i>';
}

function pauseTrack() {
    current_track.pause();
    isplaying = false;
    playing.innerHTML = '<i class="fas fa-play-circle"></i>';
}

function nextTrack() {
    if (trackIndex < track_list.length - 1) {
        trackIndex += 1;

    } else {
        trackIndex = 0;
    }

    loadTrack(trackIndex);
    playTrack();

}

function previousTrack() {
    if (trackIndex > 0) {
        trackIndex -= 1;
    } else {
        trackIndex = track_list.length - 1;
    }

    loadTrack(trackIndex);
    playTrack();
}