// Navigation
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
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
  background: url("https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png") repeat;
  background-position: top;
  background-size: cover;
  background-color: beige;
  height: $parallax-background-height;
  left: 0;
  position: absolute;
  top: - $parallax-window-height / 3;
  width: 100%;
}