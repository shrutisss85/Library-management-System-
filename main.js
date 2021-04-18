
/*-----Animated Text Starts-----*/

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1000,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1500
  });

  /*-----Animated Text Ends-------*/

  /*----------CUSTOM STICKY NAV-------------*/

  $(window).scroll(function(){

      var top = $(window).scrollTop();
       if(top>=60){
        $("nav").addClass('secondary');
       }
       else
        if($("nav").hasClass('secondary')){
          $("nav").removeClass('secondary');
        }
    });

  /*---------CUSTOM STICKY NAV ENDS----------*/