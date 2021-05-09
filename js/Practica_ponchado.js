var HERRAMIENTA;
var tempID1;
var tempID3
var cort
var tempID2;
var accion;
var accion2;
var cables;
var comprobar = 0;
var orden_correcto1 = ["4", "3", "10", "6", "7", "9", "12", "13"]; //aqui pongo el orden "correcto" de las imagenes" 568A
var orden_correcto2 = ["10", "9", "4", "6", "7", "3", "12", "13"]; //aqui pongo el orden "correcto" de las imagenes" 568B
var y = [];
var color;
var estandar="vacio";
var intentos=0;
$(document).ready(function () {
    $('.dragable').draggable(
        {
        opacity: 0.35,
        zIndex: 100}
    );
    //add a new style 'foo'
    $.notify.addStyle('foo', {
        html:
            "<div>" +
                "<div class='clearfix'>" +
                    "<div class='title' data-notify-text='title'></div>" +
                        "<div class='buttons'>" +
                            "<button class='no'>568A</button>" +
                            "<button class='yes' data-notify-text='button'></button>" +
                        "</div>" +
                 "</div>"+
            '</div>'     
    });

    //listen for click events from this style
    $(document).on('click', '.notifyjs-foo-base .no', function () { // CLIC BOTON 568A
        cronometrar()
        //programmatically trigger propogating hide event
        $(this).trigger('notify-hide');  
        $('#h1').removeClass('ocultar');
        $('#h1').addClass('desocultar');
        estandar ="a";
        $('#h1').html("Estandar 568A");
    });
    $(document).on('click', '.notifyjs-foo-base .yes', function () { // CLIC BOTON 568B
        cronometrar()
        //show button text
        //hide notification
        $(this).trigger('notify-hide');
        $('#h1').removeClass('ocultar');
        $('#h1').addClass('desocultar');
        estandar ="b";
        $('#h1').html("Estandar 568B");
    });
    $.notify({
        title: 'Seleccione un estandar',
        button: '568B'
    }, {
        style: 'foo',
        autoHide: false,
        clickToHide: false,
        position: 'top center',
        className: 'succes',
        showAnimation: 'slideDown',
    });
})
function MANO() {
    HERRAMIENTA = "MANO";
    var cursor = document.getElementById("body");
    cursor.style.cursor = 'url("https://cdn.icon-icons.com/icons2/38/PNG/32/wholehand_hand_4733.png"), auto';
    $('.dragable').draggable(
        {
        opacity: 0.35,
        zIndex: 100}
    );
}

function ESTILETE() {
    HERRAMIENTA = "ESTILETE";
    var cursor = document.getElementById("body");
    cursor.style.cursor = 'url("https://cdn.icon-icons.com/icons2/38/PNG/32/stanleyknife_5244.png"), auto';
    $ ('.dragable').draggable ("destroy");
}

function PONCHADORA() {
    HERRAMIENTA = "PONCHADORA";
    var cursor = document.getElementById("body");
    cursor.style.cursor = 'url("https://cdn2.iconfinder.com/data/icons/building-and-construction-9/512/19_plier_Building_construction_crimping_tool_work-32.png"), auto';
    $ ('.dragable').draggable ("destroy");
}
$(document).ready(function () {
    $('body #mesa').on('click', '.padre', function () {
        if (HERRAMIENTA == "ESTILETE" && (estandar =="a" || estandar=="b")) {
            accion = document.getElementById($(this).attr('id'));
            accion.style.display = 'none';
            tempID3 = 2;
            var iDE;
            for (let index = 2; index < 12; index += 3) {
                iDE = document.getElementById(index)
                iDE.style.display = 'inline-block';
            }
            $('#covertura').removeClass('grid-oculto');
            $('#covertura').addClass('grid-square-3');
        }else if (estandar =="vacio"){
            $.notify('SELECCIONE EL ESTANDAR A UTILIZAR',
            {
                autoHide: true,
                position: 'top right',
                className: 'warn',
                showAnimation: 'slideDown'
            });
        } else {
            $.notify('SELECCIONE LA HERRAMIENTA CORRECTA',
                {
                    autoHide: true,
                    position: 'top right',
                    className: 'warn',
                    showAnimation: 'slideDown'
                });
        }
    })
})
$(document).ready(function () {
    $('body #mesa').on('click', '.cableT', function () {
        if (HERRAMIENTA == "MANO" && (estandar =="a" || estandar=="b")) {
            accion = document.getElementById($(this).attr('id'));
            accion.style.display = 'none';
            tempID1 = parseInt(accion.id) + 1;
            let id1 = document.getElementById(tempID1);
            id1.style.display = 'inline-block';
            tempID2 = parseInt(accion.id) + 2;
            let id2 = document.getElementById(tempID2);
            id2.style.display = 'inline-block';
            const lista = document.getElementById("mover");
            new Sortable(lista, { /* Hace que los cables sueltos se puedan mover de lugar */
                swapThreshold: 2,
                animation: 150,
                sort: true
            });
            document.getElementById($(id1).addClass("cable"));
            document.getElementById($(id2).addClass("cable"));
            document.getElementById($(id1).removeClass("cableT"));
            document.getElementById($(id2).removeClass("cableT"));
        }else if (estandar =="vacio"){
            $.notify('SELECCIONE EL ESTANDAR A UTILIZAR',
            {
                autoHide: true,
                position: 'top right',
                className: 'warn',
                showAnimation: 'slideDown'
            });
        } else {
            $.notify('SELECCIONE LA HERRAMIENTA CORRECTA',
                {
                    autoHide: true,
                    position: 'top right',
                    className: 'warn',
                    showAnimation: 'slideDown'
                });
        }
    })
})
$(document).ready(function () {
    $('body #mesa').on('click', '.cortar', function () {
        if (HERRAMIENTA == "ESTILETE" ) {
            cort = "";
            cort = document.getElementById($(this).attr('id'));
            console.log(cort);
            cort.firstElementChild.style.height = "400px";  /*Corta los cables largos */
        } else {
            $.notify('SELECCIONE LA HERRAMIENTA CORRECTA',
                {
                    autoHide: true,
                    position: 'top right',
                    className: 'warn',
                    showAnimation: 'slideDown'
                });
        }
    })
})
$(document).ready(function () {
    $('body #mesa').on('click', '.dragable', function () {
        if (HERRAMIENTA == "PONCHADORA" && (estandar =="a" || estandar=="b")) {
            console.log("dragable");
        }if (estandar =="vacio"){
            $.notify('SELECCIONE EL ESTANDAR A UTILIZAR',
            {
                autoHide: true,
                position: 'top right',
                className: 'warn',
                showAnimation: 'slideDown'
            });
        }
    })
})
function VERIFICAR() {
    var verificar1 = 0; //la pongo aqui para que cada que se ejecute se reinicie (sino sumaria 1 cada que este bien xdd)
    var verificar2 = 0;
    comprobar = 0;
    y = [];
    cables = document.getElementsByClassName("cable");
    color = document.getElementsByClassName("circulo");
    for (i = 0; i < cables.length; i++) {
        color[i].style.display = "inline-block";
        y.push(cables[i].id)
        console.log(y[i]);
    }
    for (j = 0; j < y.length; j++) {
        if (y[j] == orden_correcto1[j]) //comparo a ver si estan bien ubicadas (es decir y almacena las posiciones en x... debi ponerle x >:v) 
        {
            verificar1 += 1;
        } if (y[j] == orden_correcto2[j]) {
            verificar2 += 1;
        }
    }
    if (verificar1 == 8) {
        comprobar = 1;
    } else if (verificar2 == 8) {
        comprobar = 2;
    }
    if (comprobar == 1 && estandar=="a") {
        parar()
        intentos+=1;
        document.getElementById("contador").innerHTML=intentos;
        $.notify('Correcto para la forma 568A',
            {
                autoHide: true,
                position: 'top right',
                className: 'success',
                showAnimation: 'slideDown'
            });
        for (i = 0; i < y.length; i++) {
            color[i].style.background = "#5cb85c";
        }
        bloquear = document.getElementById("a_verificar");
        bloquear.style.pointerEvents = 'none';
        bloquear.style.color = '#bbb';
    } else if (comprobar == 2 && estandar=="b") {
        parar()
        intentos+=1;
        document.getElementById("contador").innerHTML=intentos;
        $.notify('Correcto para la forma 568B',
            {
                autoHide: true,
                position: 'top right',
                className: 'success',
                showAnimation: 'slideDown'
            });
        for (i = 0; i < y.length; i++) {
            color[i].style.background = "#5cb85c";
        }
        bloquear = document.getElementById("a_verificar");
        bloquear.style.pointerEvents = 'none';
        bloquear.style.color = '#bbb';
    }
    else if (estandar =="a") {
        intentos+=1;
        document.getElementById("contador").innerHTML=intentos;
        $.notify('INCORRECTO',
            {
                autoHide: true,
                position: 'top right',
                className: 'error',
                showAnimation: 'slideDown'
            });
        for (i = 0; i < y.length; i++) {
            if (y[i] == orden_correcto1[i]) {
                color[i].style.background = "#5cb85c";
            } else {
                color[i].style.background = "#F91A1A";
            }
        }
        reintentar();
    } else if (estandar=="b") {
        intentos+=1;
        document.getElementById("contador").innerHTML=intentos;
        $.notify('INCORRECTO',
            {
                autoHide: true,
                position: 'top right',
                className: 'error',
                showAnimation: 'slideDown'
            });
        for (i = 0; i < y.length; i++) {
            if (y[i] == orden_correcto2[i]) {
                color[i].style.background = "#5cb85c";
            } else {
                color[i].style.background = "#F91A1A";
            }
        }
        reintentar();
    }
}
window.onload = init;
function init(){
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar);

}
/* function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
} */

function reintentar(){
    var Rrj45 =document.getElementById("rj45");
    var Rcable = document.getElementsByClassName("cable");
    var RcableT = document.getElementsByClassName("cableT");
    var RCovertor = document.getElementById("covertura");
    var primercable = document.getElementsByClassName("padre");
    var circolor = document.getElementsByClassName("circulo");
    $('.dragable').draggable(
        {addClasses: false
    });
    Rrj45.style.left="700px";
    Rrj45.style.top="80px";
    $(RCovertor).removeClass("grid-square-3");
    $(RCovertor).addClass("grid-oculto");
   
    primercable[0].style.display='inline-block';
    for (i=0;i<RcableT.length;i++){
        RcableT[i].style.display='none';
    }
    for (i=0;i<Rcable.length;i++){
        Rcable[i].style.display='none';
    }
    for (i=0;i<circolor.length;i++){
        circolor[i].style.background ="#828863";
    }
}