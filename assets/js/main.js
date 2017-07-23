$(".button-collapse").sideNav();
$(".fa-chevron-down").hide()
$(".nav-hidden").click(function(){
	$(".fa-chevron-down").show()
	$(".nav-wrapper.grey").toggle("slow");

})
$(".fa-chevron-down").click(function(){
	$(".nav-wrapper.grey").toggle("slow");
	$(this).hide();
})

/*****************************SILIDER BACKGROUND********************************/
  $('.fullBackground').fullClip({
    images: ['img/img_slider_1.jpg', 'img/img_slider_2.jpg'],
    text:['Simple & Awesome', 'Slick Material Design'],
    subtitle: ['Beautiful, Elegantly Coded', 'Beautiful, Elegantly Coded, One-Page WordPress Theme for Business'],
    transitionTime: 2000,
    wait: 5000
  });

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
/******************************FIN SLIDER****************************************/
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("nav").removeClass('transparent');
        $("nav").addClass('white');
        $("nav ul a").css("color", "#424242")
         $("nav a").css("color", "#424242")
     	


    } else {
        $("nav").addClass('transparent');
        $("nav ul a").css("color", "white");
         $("nav a").css("color", "white");
    }
}