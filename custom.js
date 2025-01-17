if ($(".f-slider-one")[0]){
    $('.f-slider-one.owl-carousel').owlCarousel({
        items:1,
        loop: true,
        margin:0,
        stagePadding: 0,
        dots: true, 
        autoplay:true,   
        animateOut: 'fadeOut', 
        touchDrag  : false,
        mouseDrag  : false
    });
}
