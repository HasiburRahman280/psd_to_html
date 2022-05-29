jQuery(document).ready(function(){
    // Mobile Menu
    jQuery(".offcanvas-menu ul ul").parent("li").children("a").append('<i class="fa-solid fa-angle-down"></i>');
    jQuery(".offcanvas-menu ul li .btn-1").click(function(){
        jQuery(".mobile-drop").slideToggle(1000);
    });

    jQuery(".offcanvas-menu ul li .btn-2").click(function(){
        jQuery(".mobile-drop-2").slideToggle(1000);
    });

    jQuery(".offcanvas-menu ul li .btn-3").click(function(){
        jQuery(".mobile-drop-3").slideToggle(1000);
    });

    jQuery(".offcanvas-menu ul li .btn-4").click(function(){
        jQuery(".mobile-drop-4").slideToggle(1000);
    });


    // Navbar Sticky
    jQuery(window).scroll(function(){
        var top = jQuery(window).scrollTop();

        if (top>70) {
            jQuery(".navbar").addClass("sticky");
            jQuery(".sticky-logo").show(500);
            jQuery(".remove-logo").hide(500);
        }
        else{
            jQuery(".navbar").removeClass("sticky");
            jQuery(".sticky-logo").hide(500);
            jQuery(".remove-logo").show(500);
        }
    });


    // Mixit Up
    var mixer = mixitup('.products');
})