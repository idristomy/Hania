$(document).ready(function(){
    $(".team-boxes").owlCarousel({
        items: 4,
        margin: 10,
        rtl: true,
        rewind: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items: 3
          }
        }
        
    });
    
  });



  $(document).ready(function(){
    $(".feedback-carousel").owlCarousel({
        items: 3,
        margin: 20,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items: 3
          }
        }
    });
  });


  $(document).ready(function(){
    $(".logos-carousel").owlCarousel({
        items: 6,
        margin: 20,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplaySpeed: 1000,
        loop: true,
        slideTransition: "linear",
        autoplayHoverPause: true,
    });
  });


  $(document).ready(function(){
    $(".owl-sers").owlCarousel({
        margin: 10,
        rtl: true,
        rewind: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items: 3
          }
        }
    });
  });

  let sections = document.querySelectorAll('section');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if ( top >= offset && top < offset + height){
        sec.classList.add('show-animate');
      }
      else{
        sec.classList.remove('show-animate');
      }
      
    });
  }

let menuList = document.getElementById('menuList');
menuList.style.maxHeight ="0px" ;

function toggleMenu(){
  if(menuList.style.maxHeight == "0px" )
    {
      menuList.style.maxHeight = "750px";
  }
  else{
      menuList.style.maxHeight ="0px" ;
  }
}

