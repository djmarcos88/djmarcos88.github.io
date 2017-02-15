window.onload = function () {
    var profilePic = document.querySelector('.profile-pic');
    var faders = document.querySelector('.faders');

    setTimeout(function() {
        profilePic.className += ' fade';    
    }, 500);

    setTimeout(function() {
        faders.className += ' fade';
    }, 1300);
};