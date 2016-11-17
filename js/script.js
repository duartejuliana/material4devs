$(document).on("pagecreate", "#estilo", function(){
    $(".animateMe .ui-collapsible-heading-toggle").on("click", function (e) { 
        var current = $(this).closest(".ui-collapsible");             
        if (current.hasClass("ui-collapsible-collapsed")) {
            $(".ui-collapsible").not(".ui-collapsible-collapsed").find(".ui-collapsible-heading-toggle").click();
            $(".ui-collapsible-content", current).slideDown(300);
        } else {
            $(".ui-collapsible-content", current).slideUp(300);
        }
    });
});

/*$( document ).ready(function() {
    var theheight = ($( window ).height() - 130) + "px";
    $(".menu").css("height", theheight)
})*/

$(document).delegate('a.top', 'click', function () {
    $('html, body').stop().animate({ scrollTop : 0 }, 500);
    return false;
});

function responder(ex) {
    console.log(ex)
    $('.' + ex).css('visibility','visible').hide().fadeIn("slow");
}