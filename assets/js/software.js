$(document).ready(() => {
    $('#hero-more').on('click',() => {
        jump('section:eq(1)')
    })    
    servicesSetup();
    AOS.init();
});


servicesSetup = function() {        
    $('.service').each(function() {        
        $(this).find('.service-nav-item').on('click', (e) => {
            index = $(e.currentTarget).index();                        
            $(this).find('.service-nav-item.active').removeClass('active');
            $(this).find('.service-feature.active').removeClass('active');
            $(this).find(`.service-nav-item:eq(${index})`).addClass('active');        
            $(this).find(`.service-feature:eq(${index})`).addClass('active');        
        })
    });    
}