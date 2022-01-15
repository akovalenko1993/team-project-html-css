$(document).on('ready', function () {
          $(".customer").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            dots: true
          });
        });