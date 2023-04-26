$(document).ready(function() {
    $(".animateIn").before($("#nav_bar").clone().addClass("navbar-fixed"));
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        // console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
        $('.animateIn.navbar-fixed').addClass('slideDown');
        }
        if ($(window).scrollTop() < 281) {
        $('.animateIn.navbar-fixed').removeClass('slideDown');
        }
    });



});

const newLocal = "#slideMenu";
$(newLocal).click(function() {  
  
  //$("#NavDrawer").addClass("drawer--is-open"); 

    if ($('#NavDrawer').hasClass('drawer--is-open')){
            $('#NavDrawer').removeClass('drawer--is-open');  /* missing . before removeClass */
        } else {
            $('#NavDrawer').addClass('drawer--is-open');
    }
});

$(".drawer__close-button").click(function() {  
  
    //$("#NavDrawer").addClass("drawer--is-open"); 
  
      if ($('#NavDrawer').hasClass('drawer--is-open')){
              $('#NavDrawer').removeClass('drawer--is-open');  /* missing . before removeClass */
          } else {
              $('#NavDrawer').addClass('drawer--is-open');
      }
});
