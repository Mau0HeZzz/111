$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.menu, .header-burger').toggleClass('active');
        $('body').toggleClass('lock');
        $('.presentation__slider').toggleClass('lock');
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
$(function() {
    $(".label-1").click(function() {
        $(".label-2, .slide2, .label-3, .slide3, .label-4, .slide4").removeClass("show");
        $(this).addClass("show");
        $(".slide1").addClass("show");
    })
});
$(function() {
    $(".label-2").click(function() {
        $(".label-1, .slide1, .label-3, .slide3, .label-4, .slide4").removeClass("show");         
        $(this).addClass("show");
        $(".slide2").addClass("show");
    })
});
$(function() {
    $(".label-3").click(function() {
        $(".label-1, .slide1, .label-2, .slide2, .label-4, .slide4").removeClass("show");         
        $(this).addClass("show");
        $(".slide3").addClass("show");
    })
});
$(function() {
    $(".label-4").click(function() {
        $(".label-1, .slide1, .label-3, .slide3, .label-2, .slide2").removeClass("show");         
        $(this).addClass("show");
        $(".slide4").addClass("show");
    })
});