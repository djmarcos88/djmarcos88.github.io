window.onload = function () {
    var faders = document.querySelectorAll('.faders');

    setTimeout(function () {
        var time = 0;

        faders.forEach(function (element) {

            setTimeout(function () {
                element.className += ' fade';
            }, time);

            time += 800;
        });
    }, 500);
};