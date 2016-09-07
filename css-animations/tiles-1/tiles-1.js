(function($) {
  $(document).ready(function() {
    var clickable = true;
    $(".wrapper").click(function(e) {
      if (clickable) {
        // hide instructions during performance
        $(".instructions").hide();

        // prevent clicks while animation is in progress
        clickable = false;

        // get total animation duration
        var delay = Math.max.apply(null, $(this).find(
          ".tile").map(function() {
          var delayCss = $(this).css(
            "animation-delay");
          var durationCss = $(this).css(
            "animation-duration");
          return parseFloat(
              delayCss
            ) +
            parseFloat(
              durationCss
            );
        }).get());

        // make wrapper clickable again after animation is finished
        setTimeout(function() {
          clickable = true;
        }, delay * 1000);

        // toggle active state
        if ($(this).hasClass(
            "inactive")) {
          $(this).removeClass(
            "inactive");
          $(this).addClass("active");
        } else if ($(this).hasClass(
            "active")) {
          $(this).removeClass(
            "active");
          $(this).addClass(
            "inactive");
          setTimeout(function() {
            $(".instructions").show();
          }, delay * 1000);
        } else {
          $(this).addClass("active");
        }
      }
    });
  });
})(jQuery);
