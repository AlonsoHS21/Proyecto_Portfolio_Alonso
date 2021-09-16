
/* Toggle Menu */
$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    var height = $(window).height();
    $("#about").height(height);
});