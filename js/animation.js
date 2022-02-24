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
$('.php').on('click',function() {
    if ($('.dash-modal').css('display','none')) {
        $('.dash-modal').css('display','block');
        $('.modal-php').css('display','block');
        $('#img').attr('src','./img/project/Screen Shot 2022-02-10 at 13.51.56.png');
    }
})

$('.bakery').on('click',function() {
    if ($('.dash-modal').css('display','none')) {
        $('.dash-modal').css('display','block');
        $('.modal-bakery').css('display','block');
        $('#img').attr('src','./img/project/Screen Shot 2022-02-14 at 1.28.41.png');
    }
})

$('.responsive').on('click',function() {
    if ($('.dash-modal').css('display','none')) {
        $('.dash-modal').css('display','block');
        $('.modal-responsive').css('display','block');
        $('#img').attr('src','./img/project/musician.png');
    }
})

$('.node').on('click',function() {
    if ($('.dash-modal').css('display','none')) {
        $('.dash-modal').css('display','block');
        $('.modal-node').css('display','block');
        $('#img').attr('src','./img/project/test.png');
    }
})

$('.fa-times').on('click',function() {
    $('.dash-modal').css('display','none');
    $('.modal-detail').css('display','none');

})



