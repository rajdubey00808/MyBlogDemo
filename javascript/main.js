const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    500:{
        items:2
    },
    900:{
        items:3
    }
}

$(document).ready(function () {


    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-nav-prev'), $('.owl-nav-next')],
        responsive:responsive

    });

    // scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0

        },100);
    })
    // animation on scroll instance
    AOS.init();
});