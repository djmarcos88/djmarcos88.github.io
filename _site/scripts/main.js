window.onload = function () {
    var faders = document.querySelectorAll('.faders');

    setTimeout(function () {
        var time = 0;

        for (var index = 0; index < faders.length; index++) {
            var element = faders[index];

            setTimeout(function () {
                element.className += ' fade';
            }, time);

            time += 800;
        }
    }, 500);
};