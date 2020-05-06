$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function () {
    $('.header-1').click(function (event) {
        $('.header-1, .content-1').toggleClass('activee');
    });
});

$(document).ready(function () {
    $('.header-2').click(function (event) {
        $('.header-2, .content-2').toggleClass('activee');
    });
});
$(document).ready(function () {
    $('.header-3').click(function (event) {
        $('.header-3, .content-3').toggleClass('activee');
    });
});

$(document).ready(function () {
    $('.header-4').click(function (event) {
        $('.header-4, .content-4').toggleClass('activee');
    });
});