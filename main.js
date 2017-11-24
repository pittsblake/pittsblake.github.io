$(document).ready(function(){

    // $('#button').click(function() {
    //     $('body').animate({
    //         scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
    //     }, 1000);
        
    // });

    $("#button").click(function() {
        $('html, body').animate({
            scrollTop: $("#middle").offset().top   }, 500);
    });

    $("#button2").click( () => {
        $('html, body').animate({
            scrollTop: $("#end").offset().top  }, 500)
    });
});