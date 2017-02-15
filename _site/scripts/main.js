window.onload = function () {
    var faders = document.querySelectorAll('.faders');

    setTimeout(function () {
        var time = 0;

        for (var index = 0; index < faders.length; index++) {
            (function (i) {
                var element = faders[i];

                setTimeout(function() {
                    element.className += ' fade';
                }, time);

                time += 800;
            })(index);
        }
    }, 500);
};