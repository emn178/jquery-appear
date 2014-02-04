/*
 * jQuery-appear v0.1.0
 * https://github.com/emn178/jquery-appear
 *
 * Copyright 2014, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function($, window, document, undefined) {
  var origOn = $.fn.on;
  $.fn.on = function(events) {
    var evts = events.split(' ');
    if($.inArray('appear', evts) != -1 || $.inArray('disappear', evts) != -1)
      initialize(this);
    return origOn.apply(this, arguments);
  };

  $.expr[':']['jquery-appear'] = function(element) {
    return $(element).data('jquery-appear');
  };

  function initialize(element)
  {
    if(element.data('jquery-appear'))
      return;
    element.data('jquery-appear', true);
    element.data('lastVisible', false);
  }

  function test() 
  {
    var element = $(this);
    var v = visible(this);
    if(v != element.data('lastVisible'))
    {
      if(v)
        element.trigger('appear');
      else
        element.trigger('disappear');
    }
    element.data('lastVisible', v);
  }

  function visible(element) 
  {
    var rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.top <= screenHeight || rect.bottom >= 0 && rect.bottom <= screenHeight) &&
      (rect.left >= 0 && rect.left <= screenWidth || rect.right >= 0 && rect.right <= screenWidth);
  }

  var screenHeight, screenWidth;
  function resize()
  {
    screenHeight = window.innerHeight || document.documentElement.clientHeight;
    screenWidth = window.innerWidth || document.documentElement.clientWidth;
    scroll();
  }

  function scroll()
  {
    $(':jquery-appear').each(test);
  }

  $(document).ready(function() {
    $(window).bind('resize', resize);
    $(window).bind('scroll', scroll);
    resize();
  });
})(jQuery, window, document);
