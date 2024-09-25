(function ($) {


    //testionial slider js
    $(".tbp_testimonial_slider").slick({
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }]
    });


    // sidebar toggle 
    var $sidebar_toggle = $(".sidebar-toggle");
    var $sidebar = $('.tutor-sidebar');
    
    // Initially add 'active' class for mobile view (<= 767px)
    if (window.innerWidth <= 767) {
        $sidebar_toggle.addClass('active');
        $sidebar.addClass('active');
    }
    
    // Toggle sidebar on click
    $sidebar_toggle.click(function (e) {
        e.stopPropagation();
        
        // Toggle class for all screen sizes
        $(this).toggleClass('active');
        $sidebar.toggleClass('active');
    });
    





})(jQuery)