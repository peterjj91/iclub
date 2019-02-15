
$('#fullpage').fullpage({
    autoScrolling: true,
    scrollOverflow: true,
    // scrollHorizontally: true,
    menu: '.scroll-menu',
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage', '9thpage', '10thpage'],
});

$('.slider-promo').slick({
    dots: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000
});

$('.slider-person').slick({
    dots: true,
    infinite: false,
    fade: true,
    cssEase: 'linear',
    speed: 400
})

;$('.slider-people').slick({
    dots: true,
    infinite: false,
    fade: true,
    cssEase: 'linear',
    speed: 400
});

;$('.slider-review').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(document).ready(function() {
    $('.countdown').countdown({
        until: new Date(2019, 2, 20),
        format: 'HMS'
    });
});

$(document).ready(function() {
    $(".procedure__person__block .procedure__info__circle").click(function(){
        // $(".procedure__info").removeClass('active');
        $(this).parent('.procedure__info').toggleClass('active');
    });
});

$('.table__select .custom-control').change(function() {
    $(this).parents("td").toggleClass("active");
});

$('.certificate__toggle').click(function() {
    $(this).toggleClass('active');
    $(".certificate__block--first").toggleClass("active");
});

$('.slider-people__item').click(function() {
    $(".slider-people__item").removeClass('active');
    $(this).toggleClass('active');
});

$('.timer__info').click(function() {
    $(this).find('.procedure__info').toggleClass('active');
});

$("#man-back").click(function(){
    $(".procedure__person__block--man").toggleClass("active");
    $(".procedure__person__man").toggleClass("procedure__person__man--back");
});

$("#girl-back").click(function(){
    $(".procedure__person__block--girl").toggleClass("active");
    $(".procedure__person__girl").toggleClass("procedure__person__girl--front");
});

$(".procedure__person__man").hover(function(){
    $(".procedure__person__girl").css("filter", "blur(5px)");
}, function(){
    $(".procedure__person__girl").css("filter", "blur(0px)");
});

$(".offer-promo__tab").hover(function(){
    $(".section__big").css("filter", "blur(5px)");
}, function(){
    $(".section__big").css("filter", "blur(0px)");
});

$(".procedure__person__girl").hover(function(){
    $(".procedure__person__man").css("filter", "blur(5px)");
}, function(){
    $(".procedure__person__man").css("filter", "blur(0px)");
});

var scene = document.getElementById('scene');
var depi1 = document.getElementById('depi1');
var depi2 = document.getElementById('depi2');
var depi3 = document.getElementById('request__slogan');
var depi4 = document.getElementById('certificate__logo1');
var depi5 = document.getElementById('certificate__logo2');
var depi6 = document.getElementById('review__img');

var parallax = new Parallax(scene);
var parallaxDepi1 = new Parallax(depi1);
var parallaxDepi2 = new Parallax(depi2);
var parallaxDepi3 = new Parallax(depi3);
var parallaxDepi4 = new Parallax(depi4);
var parallaxDepi5 = new Parallax(depi5);
var parallaxDepi6 = new Parallax(depi6);

$('.roundabout-carousel').roundabout({
    minScale: 0.5,
    enableDrag: true
});

// start dropdown
function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}

$(function() {
    var dd = new DropDown( $('.dropdown-main') );

    $(document).click(function() {
        // all dropdowns
        $('.dropdown-main').removeClass('active');
    });
});
// end dropdown


//

balapaCop = function(title,theFontColor) {

    var title,
        theFontColor;

    var style = "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,700);.copyright{position:fixed;right:15px;bottom:15px;font-family:Quicksand}.copyright span{line-height:30px;color:" + theFontColor +";margin-right:7.5px;float:left}.copyright span a{font-weight:400;text-decoration:none;color:#ea4c89}.copyright .balapa{width:24px;height:24px;display:block;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/balapa.jpg);background-size:cover;border-radius:50%;border:3px solid rgba(0,0,0,.25);float:right}";

    var genTag, genStyle;

    genStyle = document.createElement("style");
    genStyle.innerHTML = style;

    genTag = document.createElement("div");
    genTag.className = "copyright";

    document.body.appendChild(genStyle);
    document.body.appendChild(genTag);
};

// balapaCop("pen title", "black");

(function() {
    var button, parent;

    button = document.querySelector(".btn-loading");

    parent = button.parentElement;

    button.addEventListener("click", function() {
        parent.classList.add("clicked");
        return setTimeout((function() {
            return parent.classList.add("success");
        }), 2600);
    });

    balapaCop("Upload Progress Interaction", "#999");

}).call(this);


new WOW().init();
