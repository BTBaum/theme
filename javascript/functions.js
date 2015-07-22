// Navigation
$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});

// Parallax
$parallax-window-height: 30em;
$parallax-background-height: $parallax-window-height * 2;

.parallax-window {
  max-height: $parallax-window-height;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
}

.parallax-static-content {
  color: #9A9A8A;
  padding: 8em 0;
  position: relative;
  z-index: 9;
}

.parallax-background {
  background: url("http://travelnoire.com/wp-content/uploads/2014/12/o-NEW-YORK-CITY-WRITER-facebook.jpg") repeat;
  background-position: top;
  background-size: cover;
  background-color: beige;
  height: $parallax-background-height;
  left: 0;
  position: absolute;
  top: - $parallax-window-height / 3;
  width: 100%;
}