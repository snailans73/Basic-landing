"use strict";
const mainCarouselElement = document.querySelector('#mainCarousel')
const carouselMain = (mainCarouselElement, {
  interval: 2000,
  wrap: false
});

// const desCarouselElement = document.querySelector('#desing')
// const carouselDes = new bootstrap.Carousel(desCarouselElement, {
//   interval: 2000,
//   wrap: false
// });

// const testimonCarouselElement = document.querySelector('#testimonail')
// const carouselTestimon = new bootstrap.Carousel(testimonCarouselElement, {
//   interval: 2000,
//   wrap: false
// });

// (".burger").on("click", function() {
//   $(this).toggleClass("active");
//   $(".navbar-dark").toggleClass("open");
// })
(function(){
  // setTimeout(function(){
  //     $(".loader_bg").fadeToggle()},1500),
      $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip()
      }),
      $(document).ready(function(){
          $(".main-menu ul li.megamenu").mouseover
          (function(){
              $(this).parent().hasClass("#wrapper")||$("#wrapper").addClass("overlay")
          }),
          $(".main-menu ul li.megamenu").mouseleave(function(){
              $("#wrapper").removeClass("overlay")})}),
              $(document).ready(function(){
                  $("#sidebarCollapse").on("click",function(){
                      $("#sidebar").toggleClass("active"),
                      $(this).toggleClass("active")
                  })
              }),
              $("#blogCarousel").carousel({interval:5e3})});
