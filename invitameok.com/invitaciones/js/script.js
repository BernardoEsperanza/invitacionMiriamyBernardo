'use strict';

/* =================================================================== */
/*
 /*      - Template Name: eWedding - Responsive HTML Wedding Template
 /*      - Author: GoNAF
 /*      - Version: 2.00
 /*      - Website: www.zawajco.com
 /*
 /* =================================================================== */

/* -----------------------------------------------
 [Table of contents]
 --------------------------------------------------
 
 1. Preloader
 2. Countdown
 3. Image Hover Effect
 4. Flexslider Plugin Custom
 5. MagnificPopup Plugin
 5.1. MagnificPopup Gallery
 5.2. MagnificPopup Video
 6. Owl Carousel Plugin
 7. Main Slider 
 7.1. Main Slider Video-control
 7.2. Main Slider Audio-control
 7.3. Main Slider Video mobile/tablet
 8. Screen Adapter Function
 8.1. Screen Adapter on Load
 8.2. Screen Adapter on window resize
 9. Waypoints Animated Elements - Waypoint Plugin Custom
 10. Nav Bar
 10.1. Nav Bar Menu
 10.2. Navbar Background Colour Change on Page Scrolls - Waypoint+Sticky Plugins Custom
 10.3. Fixed Top Navbar - Waypoint+Sticky Plugins Custom
 11. Ajax Form Submit
 12. Smouth Scroll
 
 /* ----------------------------------------------- */
/* 1. Preloader
 /* ----------------------------------------------- 

Pace.on('done', function () {
     
	 $('#preloader').fadeOut(300, function() {
		$('#preloader').prop('hidden', true);
	 });
}); */


/* ----------------------------------------------- */
/* 2. Countdown
 /* ----------------------------------------------- */

$('#clock').countdown('2017/03/16').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
            + '<span class="wraper-clock"><div class="value">%D</div><div class="value-label">Days</div></span><span class="sep">:</span>'
            + '<span class="wraper-clock"><div class="value">%H</div><div class="value-label">Hours</div></span><span class="sep">:</span>'
            + '<span class="wraper-clock"><div class="value">%M</div><div class="value-label">Minutes</div></span><span class="sep">:</span>'
            + '<span class="wraper-clock"><div class="value">%S</div><div class="value-label">Seconds</div></span>'
            ));
});

/* ----------------------------------------------- */
/* 3. Image Hover Effect
 /* ----------------------------------------------- */

$(".img")
        .on('mouseenter', function () {
            $(this).addClass("hover");
        })
        .on('mouseleave', function () {
            $(this).removeClass("hover");
        });

/* ----------------------------------------------- */
/* 4. Flexslider Plugin Custom
 /* ----------------------------------------------- */

$(window).on('load', function () {
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: true,
        directionNav: true,
        slideshowSpeed: 5000,
        animationSpeed: 1000,
        pauseOnAction: false,
        animationLoop: true,
        pauseOnHover: true
    });
});

/* ----------------------------------------------- */
/* 5. MagnificPopup Plugin Custom
 /* ----------------------------------------------- */

/* 5.1. MagnificPopup Gallery
 ----------------------------------------- */
/*
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
});*/

/* 5.2. MagnificPopup Video
 ----------------------------------------- */
/*
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});*/

/* ----------------------------------------------- */
/* 6. Owl Carousel Plugin Custom
 /* ----------------------------------------------- */
/*
$("#owl-registry").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
});*/

/* ----------------------------------------------- */
/* 7. Main Slider 
 /* ----------------------------------------------- */

/* 7.1.  Main Slider Video-control
 ------------------------------------ */

var videotoolbar = document.querySelector(".video-control");
if (videotoolbar) {
    videotoolbar.addEventListener("click", function (e) {
        var video = $("#video-slider").data("vide").getVideoObject();
        var button = e.target;
        if (!button.classList.contains("glyphicon-volume-up") && !button.classList.contains("glyphicon-volume-off")) {
            if (!button.classList.contains("glyphicon-pause")) {
                video.play();
                button.classList.add("glyphicon-pause");
                button.classList.remove("glyphicon-play");
            } else {
                video.pause();
                button.classList.add("glyphicon-play");
                button.classList.remove("glyphicon-pause");
            }
            ;
        } else {
            if (!button.classList.contains("glyphicon-volume-up")) {
                button.classList.add("glyphicon-volume-up");
                button.classList.remove("glyphicon-volume-off");
            } else {
                button.classList.add("glyphicon-volume-off");
                button.classList.remove("glyphicon-volume-up");
            }
            ;
            video.muted = !video.muted;
        }
        ;
    });
}
;


/* 7.2. Main Slider Audio-control
 ------------------------------------ */

var audioplayer = document.getElementById("audio-player");
var audiotoolbar = document.querySelector(".audio-control");
if (audiotoolbar) {
    audiotoolbar.addEventListener("click", function (e) {
        var button = e.target;
        if (!button.classList.contains("glyphicon-volume-up")) {
            audioplayer.play();
            button.classList.add("glyphicon-volume-up");
            button.classList.remove("glyphicon-volume-off");
        } else {
            audioplayer.pause();
            button.classList.add("glyphicon-volume-off");
            button.classList.remove("glyphicon-volume-up");
        }
        ;
    });
}
;

/* 7.3. Main Slider Video mobile/tablet
 ------------------------------------ */

if (device.ios() || device.android()) {
    $(".vide-video").addClass("hide");
    $(".vide-image").removeClass("hide");
}
;

/* ----------------------------------------------- */
/* 8. Screen Adapter Function
 /* ----------------------------------------------- */

function screenAdapter() {
    var screenHeight = $(window).height();
    $('.screen-adapter').css("height", screenHeight);
}
;

/* 8.1. Screen Adapter on Load
 ----------------------------------------- */

screenAdapter();

/* 8.2. Screen Adapter on window resize
 ----------------------------------------- */

$(window).resize(function () {
    screenAdapter();
});

/* ----------------------------------------------- */
/* 9. Waypoints Animated Elements - Waypoint Plugin Custom
 /* ----------------------------------------------- */
if (!device.tablet() && !device.mobile()) {
    $('.animated-element').each(function () {
        $(this).waypoint(function () {
            $(this.element).addClass('animated fadeInUp');
        },
                {offset: '90%'});
    });
    $('.animated-element-1').each(function () {
        $(this).waypoint(function () {
            $(this.element).addClass('animated fadeIn');
        },
                {offset: '90%'});
    });
    $('.animated-element-2').each(function () {
        $(this).waypoint(function () {
            $(this.element).addClass('animated zoomIn');
        },
                {offset: '90%'});
    });
    $('.animated-element-3').each(function () {
        $(this).waypoint(function () {
            $(this.element).addClass('animated bounceInRight');
        },
                {offset: '90%'});
    });
    $('.animated-element-4').each(function () {
        $(this).waypoint(function () {
            $(this.element).addClass('animated bounceInLeft');
        },
                {offset: '90%'});
    });
    $('.animated-element-5').each(function () {
        $(this).waypoint(function () {
            $(this.element).addClass('animated fadeInLeft');
        },
                {offset: '90%'});
    });
    $('.animated-element-6').each(function () {
        $(this).waypoint(function () {
            $(this.element).addClass('animated fadeInRight');
        },
                {offset: '90%'});
    });
}
;

/* ----------------------------------------------- */
/* 10. Nav Bar
 * ----------------------------------------------- */

/* 10.1. Nav Bar Menu
 ------------------------------------ */

$('.dropdown')
        .on('mouseenter', function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        })
        .on('mouseleave', function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });

/* 10.2. Navbar Background Colour Change When Page Scrolls - Waypoint+Sticky Plugins Custom
 ------------------------------------ */

var navbar_transparent = $('.sticky-wrapper').waypoint(function (direction) {
    if (direction === 'down') {
        $("#navbar-transparent").removeClass("navbar-transparent");
    } else {
        $("#navbar-transparent").addClass("navbar-transparent");
    }
}, {
    offset: '-100%'
});

/* 10.3. Fixed Top Navbar - Waypoint+Sticky Plugins Custom
 ------------------------------------ */
 if ($('.navbar').length) {
    var sticky = new Waypoint.Sticky({
        element: $('.navbar')[0]
    });
}


/* ----------------------------------------------- */
/* 11. Ajax Form Submit
 * ----------------------------------------------- */
$("#block-main-form").validate({
    rules: {
        name: "required",
        // cantidadPersonas: "required",
    },
    messages: {
        name: "Error",
        // cantidadPersonas: "Error",
    },
    submitHandler: function (form) {
		$(".estatus").prop('disabled', true);
        $('#block-main-form').addClass('disabled');
		$(".estatus").text('Espere...');
        $.ajax({
            type: "POST",
            url: "/invitaciones/include/contact.php",
            data: $(form).serialize(),
            success: function (response) {
                $('#success').html(response);
                var $this = $('.btn');
                $(".estatus").prop('disabled', false);
                $('#block-main-form')[0].reset();
                $('#block-main-form').removeClass('disabled');
            }
        });
        $('#modalAceptar').modal('hide'); 
        return false;
    }
});

$("#confirmar-invi").on('click',function(){
    console.log("Confirmar");
    $("#confirmar-invi").prop('disabled', true);
    $('#form-confirm-pass').addClass('disabled');
    $("#confirmar-invi").text('Espere...');
    const name = $("#nombrePass").val(); 
    const cantPersons = $("#cantidadPersonasPass").val(); 
    const message = $("#mensajePass").val(); 
    const asistencia = $("#asistenciaPass").val(); 
    const evento = $("#eventoPass").val(); 
    const slug = $("#slugPass").val(); 
    const idPase = $("#idPasePass").val(); 
    $.ajax({
        type: "POST",
        url: "/invitaciones/include/contact.php",
        data: {name: name, cantPersons: cantPersons, message: message, asistencia: asistencia, evento: evento, slug: slug, idPase: idPase},
        success: function (response) {
            $('#success').html(response);
            var $this = $('.btn');
            $("#confirmar-invi").prop('disabled', false);
            $('#form-confirm-pass').removeClass('disabled');
            $("#confirmar-invi").text('¡Listo!');
        }
    });
});


// Enviar mail contacto popup
$("#mail-consulta").validate({
    rules: {
        name: "required",
        // cantidadPersonas: "required",
    },
    messages: {
        name: "Error",
        // cantidadPersonas: "Error",
    },
    submitHandler: function (form) {
		$(".estatus").prop('disabled', true);
        $(".estatus").text('Espere...');
       
        $.ajax({
            type: "POST",
            url: "/invitaciones/include/contact-popup.php",
            data: $(form).serialize(),
            success: function (response) {
                $('#success').html(response);
                var $this = $('.btn');
                $(".estatus").prop('disabled', false);
                setTimeout(function () {
                    $this.button('reset');
                }, 4000);
                $("#mail-consulta")[0].reset();
                $(".estatus").text('¡Enviado!');
            }
        });
        return false;
    }
});


/* ----------------------------------------------- */
/* 12. Smouth Scroll
 * ----------------------------------------------- */

$('.navbar-scroll a').smoothScroll({
    speed: 1000,
    offset: -100
});


/* SMART BAR */

$(".gotoWeb").on('click', function(e) {

    window.location.href = e.data("url");

});

$(".gotoWsp").on('click', function(e) {
    window.location.href = "https://wa.me/5491123644919";
});

$( window ).resize(function() {

    $(".demoBox").height( $(".smartBar").height() - $(".smartBar .cta").height() - $(".demosTit").height() -15 );
  });

  $(".demoBox").height( $(".smartBar").height() - $(".smartBar .cta").height() - $(".demosTit").height() -15 );

$(".blackclover").on('click', function(e) {
    $(".smartToggle").click();

});

$(".smartToggle").on('click', function(e) {
    var status;

    e.preventDefault();
   
  

    if ( jQuery( 'body' ).hasClass( 'ss-close' ) ) {
        
        jQuery( '#smartBar' ).animate( { 'right': '-' + jQuery( '#smartBar' ).width()-25 + 'px' }, 400, 'easeInOutCubic');
        jQuery( '.blackclover' ).animate( { 'opacity': '0.0' }, 400, 'easeInOutCubic', function() { $(".blackclover").toggleClass('mfp-bg'); });
        status = 'disabled';
        $("#smartToggleIco").removeClass("fa-chevron-down");
        $("#smartToggleIco").addClass("fa-chevron-up");
        $("#smartToggleIco2").removeClass("fa-chevron-down");
        $("#smartToggleIco2").addClass("fa-chevron-up");
        $(".smartBar2").css("z-index", 99998);
        $(".smartBar1").css("z-index", 99999);
       
     
   
    } else {
        $(".blackclover").toggleClass('mfp-bg');
        jQuery( '#smartBar' ).animate( { 'right': '0px' }, 400, 'easeInOutCubic');
        
        jQuery( '.blackclover' ).animate( { 'opacity': '0.8' }, 400, 'easeInOutCubic');
        status = 'enabled';
        $("#smartToggleIco").removeClass("fa-chevron-up");
        $("#smartToggleIco").addClass("fa-chevron-down");
        $("#smartToggleIco2").removeClass("fa-chevron-up");
        $("#smartToggleIco2").addClass("fa-chevron-down");
        $(".smartBar2").css("z-index", 99998);
        $(".smartBar1").css("z-index", 99999);

     
    }

    jQuery( 'body' ).toggleClass( 'ss-close' );



});

/* generate links by maxtor chorizo */

$(document).ready(function(){
    function conLinks(content)
        {
        var exp_match = /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var element_content=content.replace(exp_match, "<a href='$1'>$1</a>");
        var new_exp_match =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
        var new_content=element_content.replace(new_exp_match, '$1<a target="_blank" href="http://$2">$2</a>');
        return new_content;
    }
  if ($('#hotelbody').length > 0) {
    $('#hotelbody').html(conLinks($('#hotelbody').html()));
  };
 });


 $(".blackclover2").on('click', function(e) {
    $(".smartToggle2").click();
});

$(".smartToggle2").on('click', function(e) {
    var status;

    e.preventDefault();
    $("#smartBar2").addClass("open");
  

    if ( jQuery( 'body' ).hasClass( 'ss-close' ) ) {
        jQuery( '#smartBar2' ).animate( { 'right': '-' + jQuery( '#smartBar2' ).width()-25 + 'px' }, 400, 'easeInOutCubic');
        jQuery( '.blackclover2' ).animate( { 'opacity': '0.0' }, 400, 'easeInOutCubic', function() { $(".blackclover2").toggleClass('mfp-bg'); });
        status = 'disabled';
        $("#smartToggleIco").removeClass("fa-chevron-down");
        $("#smartToggleIco").addClass("fa-chevron-up");
        $("#smartToggleIco2").removeClass("fa-chevron-down");
        $("#smartToggleIco2").addClass("fa-chevron-up");
        $(".smartBar1").css("z-index", 99998);
        $(".smartBar2").css("z-index", 99999);
       
     
   
    } else {
        $(".blackclover2").toggleClass('mfp-bg');
        jQuery( '#smartBar2' ).animate( { 'right': '0px' }, 400, 'easeInOutCubic');
        
        jQuery( '.blackclover2' ).animate( { 'opacity': '0.8' }, 400, 'easeInOutCubic');
        status = 'enabled';
        $("#smartToggleIco").removeClass("fa-chevron-up");
        $("#smartToggleIco").addClass("fa-chevron-down");
        $("#smartToggleIco2").removeClass("fa-chevron-up");
        $("#smartToggleIco2").addClass("fa-chevron-down");
        $(".smartBar1").css("z-index", 99998);
        $(".smartBar2").css("z-index", 99999);

     
    }
    jQuery( 'body' ).toggleClass( 'ss-close' );
});
/*
$(".navbar").click(function(){
    var bandera = true;
    bandera = $(".navbar-scroll").hasClass("in");
    if(bandera == false){
        $(".navbar").css("z-index","99");
        $("#contacto-stick").css("z-index","100");
    }else{
        $("#contacto-stick").css("z-index","99");
        $(".navbar").css("z-index","100");
    }
});
*/