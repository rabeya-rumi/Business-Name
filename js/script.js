//preloading section
$(document).ready(function(){
    $('.preloader').delay(2000).fadeOut();
});

//menu in fixed position
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    //nav fixed
    if(scrolling > 150){
        $('nav').addClass('bg');
    }
    else{
        $('nav').removeClass('bg');
    }
    
    //back to top
    if(scrolling > 400){
        $('.back-to-top').fadeIn();
    }
    else{
        $('.back-to-top').fadeOut();
    }
});

$('.back-to-top').click(function(){
    $('body,html').animate({
        scrollTop: '0',
    },1500);
});

//banner slider 
$('.banner-slider').slick({
     dots: true,
     prevArrow: '<i class="fa fa-angle-left prev-arrow"></i>',
     nextArrow: '<i class="fa fa-angle-right next-arrow"></i>',
    
});

//animation on scrolling
new WOW().init();

//counter up
$('.count').counterUp({
    delay:10,
    time: 1500,
});

//port-menu active
$('.port-menu ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});


//gallery filter
var mixer = mixitup('.port-item');

//gallery popup
$('.venobox').venobox({
    closeBackground: '#709dca',
    closeColor: '#ffffff',
    overlayColor: 'rgba(255,255,255,0.9)',
    arrowsColor: '#709dca',
    spinner: 'wandering-cubes',
    spinColor: '#709dca',
});

//gallery overlay slider
$('.port-img').directionalHover({
     overlay:"overlay",
});

//footer input mail

var mail = document.getElementById('mail');
var mailErr = document.getElementById('mailErr'); 

//submit button functio
function subm(){
    if(mail.value == ""){
       mail.style.borderColor = 'red';
        mail.focus();
        mailErr.innerHTML = "Please Enter your Mail";
        return false;
       }
}

//to remove error after input text in input box
function errValid(){
    if(mail.value != ''){
        mail.style.borderColor = '#172227';
        mailErr.innerHTML = "";
    }
}

mail.addEventListener('blur',errValid);


//testimonial slider
$('.client-box').slick({
     dots: true,
    arrows: false,
    slidesToShow: 2,
      
    
});









