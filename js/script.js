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
   $('.ultimatentativa').css('visibility','visible');

   // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("soma", soma);
        // Retrieve
        document.getElementById("ultimasoma").innerHTML = localStorage.getItem("soma");
    } else {
        document.getElementById("ultimasoma").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function novatentativa() {
    $('.ce').css('visibility', 'hidden');
    $('.legenda').css('visibility', 'hidden');
    soma = 0;
    localStorage.setItem("soma", soma);
    res = {};
}

function ultimatentativa() {
    document.getElementById("ultimasoma").innerHTML = localStorage.getItem("soma");
    if (soma > 0 || localStorage.getItem("soma") > 0) {
        $('.ultimatentativa').css('visibility','visible');
    }
    else {
        $('.ultimatentativa').css('visibility','hidden');
    }
}