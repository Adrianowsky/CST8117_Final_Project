
/* Night mode */
function checkCookie() {
    console.log('Cookies are now: ' + document.cookie);

    if (document.cookie === 'mode=night') {
        switchMode();
    }
}

function switchMode() {
    
    // Get body class
    let bodyClass = document.body.getAttribute('class');

    // Get sun and moon icons
    let sunIcon = document.getElementById('sun-icon');
    let moonIcon = document.getElementById('moon-icon');

    // Get night and day audios
    let nightAudio = document.getElementById("nighttime-audio"); 
    let dayAudio = document.getElementById("daytime-audio"); 

    // Get header images
    let dayImage = document.getElementById("header-img"); 
    let nightImage = document.getElementById("night-header-img"); 

    if (bodyClass == 'night-mode') {

        document.cookie = "mode=day; expires=Tue, 19 Jan 2038 03:14:07 GMT";

       // Change body class
       document.body.setAttribute('class','');

       // Change icons
       moonIcon.classList.add('inactive');
       sunIcon.classList.remove('inactive');

       // Change audio if playing
       if (nightAudio.duration > 0 && !nightAudio.paused) {

           nightAudio.pause();
           dayAudio.play();
       }

       // Change images
       dayImage.classList.remove('inactive');
       nightImage.classList.add('inactive');
       
   } else if (bodyClass == '' || document.cookie == 'mode=night') {

        document.cookie = "mode=night; expires=Tue, 19 Jan 2038 03:14:07 GMT";
        // Change body class
        document.body.setAttribute('class', 'night-mode');

        // Change icons
        moonIcon.classList.remove('inactive');
        sunIcon.classList.add('inactive');

        // Change audio if playing
        if (dayAudio.duration > 0 && !dayAudio.paused) {

            dayAudio.pause();
            nightAudio.play();
        }

        // Change images
       dayImage.classList.add('inactive');
       nightImage.classList.remove('inactive');
    }
}

(function() {
    checkCookie();
})();

document.getElementById('night-mode-btn').addEventListener('click', event => {

   switchMode();
});
/* END Night mode */



/* Mobile Menu */
document.getElementById('mobile-menu-btn').addEventListener('click', event => {

    let currentClass = event.target.getAttribute('class');
    let mobileMenu = document.getElementById('mobile-menu');

    let menuIcon = document.getElementById('menu-icon');
    let crossIcon = document.getElementById('cross-icon');

    if (currentClass == 'nav-btn menu-up') {
        event.target.setAttribute('class', 'nav-btn menu-down');

        mobileMenu.classList.remove('inactive');
        menuIcon.classList.add('inactive');
        crossIcon.classList.remove('inactive');

    } else if (currentClass == 'nav-btn menu-down') {
        event.target.setAttribute('class','nav-btn menu-up');

        mobileMenu.classList.add('inactive');
        menuIcon.classList.remove('inactive');
        crossIcon.classList.add('inactive');        
    }
});
/* END Mobile Menu */

/* Audio system */
document.getElementById('audio-btn').addEventListener('click', event => {

    let bodyClass = document.body.getAttribute('class');
    let audioBtn = event.target;

    let currentClass = audioBtn.getAttribute('class');
    let audioIcon = document.getElementById('audio-icon');
    let muteIcon = document.getElementById('mute-icon');

    let audio;

    if (bodyClass == 'night-mode') {
        audio = document.getElementById("nighttime-audio"); 
        
    } else {
        audio = document.getElementById("daytime-audio"); 
    }

     

    if (currentClass == 'nav-btn sound-off') {
        audioBtn.classList.remove('sound-off');
        audioBtn.classList.add('sound-on');

        audioIcon.classList.remove('inactive');
        muteIcon.classList.add('inactive');

        audio.play();

    } else if (currentClass == 'nav-btn sound-on') {
        audioBtn.classList.remove('sound-on');
        audioBtn.classList.add('sound-off');

        audioIcon.classList.add('inactive');
        muteIcon.classList.remove('inactive'); 
        
        audio.pause();
    }
});
/* END Audio system */




















