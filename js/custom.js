$(document).ready(function() {
    offset = 0;    
    $('.navbar-default').addClass("navbar-transparent");
    
    // Parallax disabled for mobile screens
    if ($(window).width() > 961) {
        initParallax();
        initWOW();
    }
    
    initCountNbr();
    initSmoothScroll();
    initSticky();
    initWaypoints();
});



$(window).scroll(function(){
    if($(window).scrollTop() <= 50) {
       $('.navbar-default').addClass("navbar-transparent");
    } else {
        $('.navbar-default').removeClass("navbar-transparent");
    }

    // Get the current vertical position of the scroll bar
    position = $(this).scrollTop();
    $('.navbar li a[href^="#"]').each(function(){
        var anchorId = $(this).attr('href'); 
        var target = $(anchorId).offset().top - offset;
        // check if the document has crossed the page
        if(position>=target-50){
             //remove active from all anchor and add it to the clicked anchor
            $('.navbar li a[href^="#"]').removeClass("active")
            $(this).addClass('active'); 
        }
    })

})

function initCountNbr() {
    var hasCounters = $('#counters').hasClass('count-wrapper');
    if (hasCounters) {
        var waypoint = new Waypoint({
          element: document.getElementById('counters'),
          handler: function() {
                var options = {
                    useEasing : true,
                    useGrouping : true, 
                    separator : ','
                };
                // Counter 1
                var counter1 = new CountUp('count1', 0, 8, 0, 3, options);
                counter1.start();
                // Counter 2
                var counter2 = new CountUp('count2', 0, 5, 0, 3, options);
                counter2.start();
                // Counter 3
                var counter3 = new CountUp('count3', 0, 13860, 0, 3, options);
                counter3.start();
                // init only once
                this.destroy();
            },
            offset: '80%',
        });
    }
}

function initParallax() {
        $('#about').parallax("100%", 0.1);
        $('#feature').parallax("100%", 0.3);
        $('#about').parallax("100%", 0.1);
        $('#education').parallax("100%", 0.2);
        $('#achievements').parallax("100%", 0.3);
        $('#skills').parallax("100%", 0.3);
        $('#projects').parallax("100%", 0.1);
        $('#contact').parallax("100%", 0.2);
}

function initSmoothScroll() {
    $('.navbar-default a, .home-btn a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
    });
}

function initSticky() {
    $(".navbar-default").sticky({topSpacing:0});
}

function initWaypoints() {
     var waypoint = new Waypoint({
          element: document.getElementById('skills'),
          handler: function() {
               $('.skillbar').each(function(){
                    $(this).find('.skillbar-bar').animate({
                        width:$(this).attr('data-percent')
                    },3000);
                });
        },
        offset: 200 
    });
}

function initWOW() {
    new WOW().init();
}