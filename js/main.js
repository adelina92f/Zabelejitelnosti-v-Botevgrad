$(function(){
    let $nav = $('.main-nav');
    let $button = $('.hamburger');

    $button.on('click', function(e){
        $button.toggleClass('is-active'); 
        $nav.toggleClass('open');
        
       
    })
})