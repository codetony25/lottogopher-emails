$(document).ready(function() {
  new Clipboard('.btn');

  $('[data-toggle="tooltip"]').tooltip()

  var selectedTicketAmount = 0;
  /*-------------- GROUP FLOW PAGE --------------*/

  // Switch public and private group page.
  $('#group-private-btn').on('click', function(e) {
    e.preventDefault();
    $('#group-public-btn').removeClass('active');
    $(this).addClass('active');

    $('.group-flow-public').css('display', 'none');
    $('.group-flow-private').css('display', 'block');
  });

  $('#group-public-btn').on('click', function(e) {
    e.preventDefault();
    $('#group-private-btn').removeClass('active');
    $(this).addClass('active');

    $('.group-flow-private').css('display', 'none');
    $('.group-flow-private-create').css('display', 'none');
    $('.group-flow-public').css('display', 'block');
    $('.success-notification').css('display', 'none');
  });

  $('.create-private-btn').on('click', function(e) {
    e.preventDefault();
    $('.group-flow-private').css('display', 'none');
    $('.group-flow-private-create').css('display', 'block');
    $('.success-notification').css('display', 'block');
  });

  $('.create-private-btn-two').on('click', function(e) {
    e.preventDefault();
    $('.group-flow-private').css('display', 'none');
    $('.group-flow-private-create').css('display', 'block');
    $('.success-notification').css('display', 'block');
  });

  $('.add-ticket-btn').on('click', function(e) {
    e.preventDefault();
    $('.group-step-one').css('display', 'none');
    $('.group-step-two').css('display', 'block');
    $('#step-one-btn').removeClass('active').addClass('done');
    $('#step-two-btn').addClass('active');
  });

  // Ticket checkbox selection
  $('.checkbox-action').on('click', function(e) {
    e.preventDefault();
    var parentEl = $(this).parent().parent();

    if (!parentEl.hasClass('selected')) {
      selectedTicketAmount += 1;
      $('.selected-amt').text(selectedTicketAmount);
      parentEl.addClass('selected');
    }
    else {
      selectedTicketAmount -= 1;
      $('.selected-amt').text(selectedTicketAmount);
      parentEl.removeClass('selected');
    }
  });

  $('.selected-tix-add-public').on('click', function(e) {
    e.preventDefault();
    $('.group-step-two').css('display', 'none');
    $('.group-flow-step-three').css('display', 'block');
    $('#step-two-btn').removeClass('active').addClass('done');
    $('#step-three-btn').addClass('active');
    $('.star-amt').text(selectedTicketAmount);
  });

  $('.selected-tix-add-private').on('click', function(e) {
    e.preventDefault();
    $('.group-step-one').css('display', 'none');
    $('.success-notification').css('display', 'none');
    $('.group-step-two').css('display', 'block');
    $('#step-one-btn').removeClass('active').addClass('done');
    $('#step-two-btn').addClass('active');
    $('.star-amt').text(selectedTicketAmount);
  });

  // Select or De-select all Tickets
  $('.select-all-btn').on('click', function(e) {
    e.preventDefault();

    var selectType = $(this).attr('data-select-type');

    if (selectType === 'select') {
      selectedTicketAmount = $('.ticket-selection-list li').length;
      $(this).text('Deselect All');
      $(this).attr('data-select-type', 'deselect');
      $('.ticket-selection-list li').addClass('selected');
      $('.selected-amt').text(selectedTicketAmount);
    }
    else if (selectType === 'deselect') {
      selectedTicketAmount = 0;
      $(this).text('Select All');
      $(this).attr('data-select-type', 'select');
      $('.ticket-selection-list li').removeClass('selected');
      $('.selected-amt').text(selectedTicketAmount);
    }
  });

  $('#next-group-btn').on('click', function(e) {
    e.preventDefault();

    var currentActive = $(this).attr('data-current');
    var nextActive = $(this).attr('data-next');
    var prevActive = $('#prev-group-btn').attr('data-prev');
    var activeClass = '.hero-box-wrapper.' + currentActive;
    var nextClass = '.hero-box-wrapper.' + nextActive;

    $(this).attr('data-current', nextActive);
    $(this).attr('data-next', prevActive);
    $('#prev-group-btn').attr('data-current', nextActive)
    $('#prev-group-btn').attr('data-prev', currentActive);

    $(activeClass).removeClass('active');
    $(nextClass).addClass('active');
  });

  $('#prev-group-btn').on('click', function(e) {
    e.preventDefault();

    var currentActive = $(this).attr('data-current');
    var prevActive = $(this).attr('data-prev');
    var nextActive = $('#next-group-btn').attr('data-next');
    var activeClass = '.hero-box-wrapper.' + currentActive;
    var prevClass = '.hero-box-wrapper.' + prevActive;

    $(this).attr('data-current', prevActive);
    $(this).attr('data-prev', nextActive);
    $('#next-group-btn').attr('data-next', currentActive);
    $('#next-group-btn').attr('data-current', prevActive);

    $(activeClass).removeClass('active');
    $(prevClass).addClass('active');
  })

  $('.radio-item label').on('click', function(e) {
    if ($(this).hasClass('checked')) {
      $('.radio-item label').removeClass('checked');
      return;
    }
    else {
      $('.radio-item label').removeClass('checked');
      $(this).addClass('checked');
    }
  })
  /*-------------- END GROUP FLOW PAGE --------------*/

  function resetCalloutAnimation() {
    // reset callout animation
    var stepOneAnimation = $('.instructions.step-1 .callout-animation');
    var stepTwoAnimation = $('.instructions.step-2 .callout-animation');
    var stepThreeAnimation = $('.instructions.step-1 .callout-animation');
    var stepFourAnimation = $('.instructions.step-1 .callout-animation');

    stepOneAnimation.css("width", "0px");
    stepOneAnimation.css("height", "0px");
    stepTwoAnimation.css("width", "0px");
    stepTwoAnimation.css("height", "0px");
    stepThreeAnimation.css("width", "0px");
    stepThreeAnimation.css("height", "0px");
    stepFourAnimation.css("width", "0px");
    stepFourAnimation.css("height", "0px");
  }

  resetCalloutAnimation();

  // When page loads, make sure to do the step 1 callout animation
  var runCalloutAnimation = function(calloutEl, smallWidth, smallHeight, bigWidth, bigHeight) {
    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      var defaultCalloutAnimation = function() {
        calloutEl.animate({
          height: smallHeight
        }, { duration: 650 })
      };

      calloutEl.animate({
        width: smallWidth
      }, { duration: 650, complete: function() {
        defaultCalloutAnimation();
      }})
    }
    else if (window.innerWidth >= 1200) {
      var defaultCalloutAnimation = function() {
        calloutEl.animate({
          height: bigHeight
        }, { duration: 650 })
      };

      calloutEl.animate({
        width: bigWidth
      }, { duration: 650, complete: function() {
        defaultCalloutAnimation();
      }})
    }
  }

  // On resize of window make sure the callout animation still re-adjust its width and height
  $(window).on('resize', function(){
    var win = $(this);
    if (win.width() > 992 && win.width() < 1200) {
      runCalloutAnimation($('.instructions.step-1 .callout-animation'), 90, 95, 115, 90);
      runCalloutAnimation($('.instructions.step-2 .callout-animation'), 274, 113, 360, 109);
      runCalloutAnimation($('.instructions.step-3 .callout-animation'), 200, 80, 155, 82);
      runCalloutAnimation($('.instructions.step-4 .callout-animation'), 57, 111, 111, 108);
    }
    if (win.width() >= 1200) {
      runCalloutAnimation($('.instructions.step-1 .callout-animation'), 90, 95, 115, 90);
      runCalloutAnimation($('.instructions.step-2 .callout-animation'), 274, 113, 360, 109);
      runCalloutAnimation($('.instructions.step-3 .callout-animation'), 200, 80, 155, 82);
      runCalloutAnimation($('.instructions.step-4 .callout-animation'), 57, 111, 111, 108);
    }
  });

  runCalloutAnimation($('.instructions.step-1 .callout-animation'), 90, 95, 115, 90)

  // Set up Owl Carousel
  var owl = $(".owl-carousel"),
      owlOptions = {
        loop: true,
        margin: 130,
        items: 3,
        stagePadding: 50,
        autoHeight: true,
        responsiveClass: true,
        mergeFit: true,
        autoWidth: true,
        center: true,
        dots: true,
        navText: ['<img class="left-arrow-svg" src="./img/group-flow/left-arrow.png" alt="">', '<img class="right-arrow-svg" src="./img/group-flow/right-arrow.png" alt="">'],
        responsive:{
          0:{
            items:3,
            nav:true,
          },
          480:{
            items:3,
            nav:true,
          },
          1200:{
            items:3,
            nav: true
          }
        }
      };

  var owlActive = owl.owlCarousel(owlOptions);

  /* Remove Owl Carousel at specific browser width */
  // if ( $(window).width() <= 990 ) {
  //   var owlActive = owl.owlCarousel(owlOptions);
  // } else {
  //   owl.addClass('off');
  // }

  // $(window).resize(function() {
  //   if ( $(window).width() <= 990 ) {
  //     if ( $('.owl-carousel').hasClass('off') ) {
  //       var owlActive = owl.owlCarousel(owlOptions);
  //       owl.removeClass('off');
  //     }
  //   } else {
  //     if ( !$('.owl-carousel').hasClass('off') ) {
  //       owl.addClass('off').trigger('destroy.owl.carousel');
  //       owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
  //     }
  //   }
  // });

  /* Animate scroll down to how it works on arrow down click responsively */
  $('.hero-down-icon-container a').click(function(event) {
    if (window.innerWidth <= 450) {
      $('html, body').animate({ scrollTop: 1836 }, 'slow');
    }
    else if (window.innerWidth > 450 && window.innerWidth < 768) {
      $('html, body').animate({ scrollTop: 1787 }, 'slow');
    }
    else if (window.innerWidth > 768 && window.innerWidth < 992) {
      $('html, body').animate({ scrollTop: 1700 }, 'slow');
    }
    else if (window.innerWidth >= 992) {
      $('html, body').animate({ scrollTop: 1005 }, 'slow');
    }
  })

  /* Change the 'how does it work' states */
  $('.main-how-does-it-work .navigation a').click(function(event) {
    event.preventDefault();
    resetCalloutAnimation();

    var stepNumber = $(this).attr('itemStep');
    var animationEl = $('.instructions.step-' + stepNumber + ' .callout-animation');

    // Change image according to step number
    $('.laptop-content').attr('src', './img/bg/step-' + stepNumber + '.png');

    // Remove all active classes
    $('.hiw-active').removeClass('hiw-active');

    // Add to instructions
    $('.instructions.step-' + stepNumber).addClass('hiw-active');

    if (stepNumber === '1') {
      runCalloutAnimation(animationEl, 90, 95, 115, 90);
    }
    else if (stepNumber === '2') {
      runCalloutAnimation(animationEl, 274, 113, 360, 109);
    }
    else if (stepNumber === '3') {
      runCalloutAnimation(animationEl, 200, 80, 155, 82);
    }
    else if (stepNumber === '4') {
      runCalloutAnimation(animationEl, 57, 111, 111, 108);
    }

    // Add to Did you know?
    $('.did-you-know.step-' + stepNumber).addClass('hiw-active');

    // Add active class
    $(this).parent().addClass('hiw-active');
  })

  // Menus Dropdown
  $('.inner-dropdown').hide();

  $('.user-dropdown').mouseenter(function() {
    $('.inner-dropdown', this).animate({opacity: 'show'}, 'slow');
  });

  $('.user-dropdown').mouseleave(function() {
    $('.inner-dropdown', this).animate({opacity: 'hide'}, 'fast');
  });

});