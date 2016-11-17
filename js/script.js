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

$(document).delegate('a.top', 'click', function () {
    $('html, body').stop().animate({ scrollTop : 0 }, 500);
    return false;
});


var res = {};
var soma = 0;

function responder(numero, alternativa) {    
    if( !res[numero]){
        var classe = '.' + numero + alternativa;
        $(classe).css('visibility','visible').hide().fadeIn("slow");
        if (/certo/.test($(classe).attr('class'))) {
            soma++
        }
        res[numero] = true;        
    }
    return soma
}

function verSoma() {
   document.getElementById("mostrasoma").innerHTML = soma; 
}