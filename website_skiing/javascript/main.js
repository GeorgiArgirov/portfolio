$(document).ready(function() {

    
    //---------Scroll Hidden-------//
    



    // --------Scroll to Site-----//
    

    $('.btn_header').click(function(){
      $('html, body').animate({
          scrollTop: $(".site_container").offset().top
      }, 700);
    });
    

    //-------- Scroll anchors ------------//
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

      // -------- Slide Gallery ------------------//

    $('[data-fancybox="images"]').fancybox({
        buttons : [ 
          'slideShow',
          'share',
          'zoom',
          'fullScreen',
          'close'
        ],
        thumbs : {
          autoStart : true
        }
    });

    
    
    //-------------- slide Accommodation ----------//
    
    var currentImage = 0;
    var autoInterval = false;
    var delay = 500;
    var galleryImages = [
        './images/bansko-hotel.jpg' ,
        './images/Kempinski-Hotel-Grand-Arena-Bansko.jpg' ,
        './images/lion-hotel-bansko.jpg' ,
    ];

    var galleryImageCaptions = [
      'Bansko' ,
      'Kempinski' ,
      'Lion hotel',
    ];

    function loadImage(index){
        $('.button_slide').html(galleryImageCaptions[index]);

        $('#Hotel_image img').attr('src', galleryImages[index]);
        
        $('#Hotel_image accom_slide').attr('transition: all .3s ease-in-out;')
    }
    loadImage(0);
    
    $('.accom_button_slide a').click(function(event){
      event.preventDefault();
      var direction = $(this).data('direction');
      if(direction === 'next'){
          currentImage++;
      } else if(direction === 'prev'){
          currentImage--;
      }
      if(currentImage >= galleryImages.length){
          currentImage = 0;
      }
      if(currentImage < 0){
          currentImage = galleryImages.length-1;
      }
      loadImage(currentImage);

    });


//-----------SCROLL HIDE --------//

    var $mainHeader = $('#top_navigation');
    var $headingElement = $('#bansko');
    var headingElementPosition = $headingElement.offset();
    var isHeaderFixed = false;

    var $window = $(window);
    $window.scroll(function(){
        var scrollPosition = $window.scrollTop();
        if(scrollPosition > headingElementPosition.top && !isHeaderFixed){
            $mainHeader.addClass('fixed');
            $('.headerPlaceholder').show();
            isHeaderFixed = true;
        }
        if(isHeaderFixed && scrollPosition < headingElementPosition.top){
            $mainHeader.removeClass('fixed');
            $('.headerPlaceholder').hide();
            isHeaderFixed = false;
        }
    });

        
 
    


});

    
















