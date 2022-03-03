// hiding nav var when scroll down the page
// let navbar = document.getElementById('nav');
// let preScrollPos = 0;
// let scrollAnime = () => {
//     let elemTop = $(".about-wrapper").offset().top;
//     let scroll = $("window").scrollTop();
//     if (scroll == preScrollPos) {

//     } else if (elemTop > scroll || 0 > scroll - preScrollPos) {
//         $('#nav').removeClass('upMove');
//         $('#nav').addClass('downMove');
//     } else {
//         $('#nav').removeClass('downMove');
//         $('#nav').addClass('upMove');
//     }
//     preScrollPos = scroll;
// }

var menuHeight = $('.nav').height();
var startPos = 0;
$(window).scroll(function() {
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
        if ($(window).scrollTop() >= 200) {
            // $('.nav').css("top", "-40" + menuHeight + "px");
            $('.nav').addClass("upMove");
            $('.nav').removeClass("downMove");
        }
    } else {
        // $('.nav').css("top",0 + "px");
        $('.nav').addClass("downMove");
        $('.nav').removeClass("upMove");
    }
    startPos = currentPos;
})

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        } 
    });
});
$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
        $('.hamburger').removeClass('active');
    });
});

$(function() {
    $('body').fadeIn(1500);
});

$(window).scroll(function() {
    //ウィンドウの高さを取得
    var windowH = $(window).height(),
    //スクロール位置を取得
    scrollY = $(window).scrollTop();
     
    $('*').each(function() {
        //要素の位置（上端）を取得
        var thisPosition = $(this).offset().top;
        //要素の高さを取得
        var thisHeight = $(this).height();
         
        //要素が画面上に表示されているときにclass="effect"をつける
        if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
            $(this).addClass('effect');
             
        }else{
            $(this).removeClass('effect') ;
        }
    });
});
// $('.php').on('click',function() {
//     if ($('.dash-modal').css('display','none')) {
//         $('.dash-modal').css('display','block');
//         $('.modal-php').css('display','block');
//         $('#img').attr('src','./img/project/Screen Shot 2022-02-10 at 13.51.56.png');
//     }
// })

// $('.bakery').on('click',function() {
//     if ($('.dash-modal').css('display','none')) {
//         $('.dash-modal').css('display','block');
//         $('.modal-bakery').css('display','block');
//         $('#img').attr('src','./img/project/php-project.png');
//     }
// })

// $('.responsive').on('click',function() {
//     if ($('.dash-modal').css('display','none')) {
//         $('.dash-modal').css('display','block');
//         $('.modal-responsive').css('display','block');
//         $('#img').attr('src','./img/project/musician.png');
//     }
// })

// $('.node').on('click',function() {
//     if ($('.dash-modal').css('display','none')) {
//         $('.dash-modal').css('display','block');
//         $('.modal-node').css('display','block');
//         $('#img').attr('src','./img/project/test.png');
//     }
// })


$(function() {
    $('.php').click(function(){
        $('#sampleModal').fadeIn();
        $('html').addClass('modalset');
        $('#img').attr('src','./img/project/php-project.png');
        $('#php-d').css('display','block');
    });
    $('.samplemodal .samplemodal-bg,.samplemodal .samplemodal-close').click(function(){
        $('#sampleModal').fadeOut();
        $('html').removeClass('modalset');
        $('#php-d').css('display','none');
    });
});	
$(function() {
    $('.bakery').click(function(){
        $('#sampleModal').fadeIn();
        $('html').addClass('modalset');
        $('#img').attr('src','./img/project/Screen Shot 2022-02-14 at 1.28.41.png');
        $('#bakery-d').css('display','block');
    });
    $('.samplemodal .samplemodal-bg,.samplemodal .samplemodal-close').click(function(){
        $('#sampleModal').fadeOut();
        $('html').removeClass('modalset');
        $('#bakery-d').css('display','none');
    });
});	
$(function() {
    $('.responsive').click(function(){
        $('#sampleModal').fadeIn();
        $('html').addClass('modalset');
        $('#img').attr('src','./img/project/musician.png');
        $('#responsive-d').css('display','block');
    });
    $('.samplemodal .samplemodal-bg,.samplemodal .samplemodal-close').click(function(){
        $('#sampleModal').fadeOut();
        $('html').removeClass('modalset');
        $('#responsive-d').css('display','none');
    });
});	
$('#times').on('click',function() {
    $('#sampleModal').fadeOut();
    $('html').removeClass('modalset');
    $('#php-d').css('display','none');
    $('#bakery-d').css('display','none');
    $('#responsive-d').css('display','none');
})



