// THIS IS A GLOBAL SCRIPT THAT NEEDED BY EVERY PAGE TO WORK PROPERLY
// REQUIRE JQUERY AND IT'S DEPENDENCY AND ANIMATE.CSS TO WORK PROPERLY

$(document).ready(() => {
    navFade();
    // navHide();
    navAnimate();
});

$(window).on('scroll', () => {
    navFade();    
});

isScrolled = (el, funcWhile) => {
    elTop = $(el).offset().top;
    elBot = $(el).offset().top + $(el).outerHeight(true);
    scrollTop = $(window).scrollTop() + $('.navbar:eq(0)').outerHeight(true);
    scrollBot = $(window).scrollTop() + $(window).height();
    notAnimated = !($(el).hasClass('animated'));
    if (notAnimated) {
        el.css({'opacity': '0'});
        if (scrollBot > elTop && scrollTop < elTop) {
            el.css({'opacity': '1'});
            funcWhile();
        }
        if (scrollTop > elTop) {
            el.css({'opacity': '1'});
            $(section).addClass('animated');
        }
    }
}

// NAVBAR FADE IN TRANTITION BY SCROLL
// CALL THIS FUNCTION ON SCROLL EVENT
navFade = () => {
    navbar = $('.navbar:eq(0)');
    hero = $('section#hero');
    heroBottom = hero.offset().top + hero.outerHeight(true) / 2;
    scrollTop = $(window).scrollTop();
    opacity = scrollTop > heroBottom ? 1 : (scrollTop / heroBottom);
    navbar.css({
        "background-color": `rgba(255,255,255,${opacity})`,
        "box-shadow": `0 8px 48px 8px rgba(33, 33, 33, ${(0.1 * opacity)})`,
        "border-bottom": `0.5px solid rgba(0,0,0,${opacity / 8}`
    });
}

navHide = () => {
    var el = $(window);
    var navbar = $('nav.navbar');
    // initialize last scroll position
    lastY = el.scrollTop();
    
    el.on('scroll', function() {
        // get current scroll position
        var currY = el.scrollTop(),
            
            // determine current scroll direction
            y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');
            console.log(y)

        // do something here…
        if(!($('.navbar-collapse, .dropdown-menu').hasClass('show'))){
            if(y === 'up'){
                $(navbar).removeClass('hide');
            }else{
                $(navbar).addClass('hide');
            }
        }

        // update last scroll position to current position
        lastY = currY;
    });
}

// JUMP TO SPECIFIC ELEMENT WITH SMOOTH SCROLL TRANTITION
jump = (selector) => {
    el = $(selector);

    window.scrollTo({
        top: $(el).offset().top,
        behavior: 'smooth'
    });
}

// FUNCTION TO SETUP A TIMELINE LAYOUT WITH ELEMENT SELECTOR AS A PARAMETER,
// I RECOMMEND TO USE ID AS A SELECTOR
timelineSetup = (selectorId) => {
    $(selectorId).append('<span class="timeline-vr d-none d-lg-block"></span>');
    $(selectorId).find('.timeline-item .timeline-body').append('<span class="timeline-arrow"></span>');
    $(selectorId).find('.timeline-item').append('<span class="timeline-dot"></span>');
    $(selectorId).find('.timeline-item:odd .timeline-body .timeline-img').addClass('order-lg-2');
    $(selectorId).find('.timeline-item:odd .timeline-body .timeline-txt').addClass('order-lg-1');

    timeline = $(selectorId).find('.timeline-body');
    timelineHeight = $(timeline[timeline.length - 1]).offset().top + $(timeline[timeline.length - 1]).outerHeight(true) - $(timeline[0]).offset().top;
    vr = $(selectorId).find('.timeline-vr');

    $(vr).css({
        'height': timelineHeight + 'px',
    })
}

vListSetup = () => {
    $('.vertical-list.ballon .list-body').append('<span class="list-arrow"></span>');
}

navAnimate = () => {
    $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
    });
}