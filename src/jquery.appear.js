/*
 * jQuery-appear v0.1.1
 * https://github.com/emn178/jquery-appear
 *
 * Copyright 2014, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function($, window, document, undefined) {
  var KEY = 'jquery-appear';
  var APPEAR_EVENT = 'appear';
  var DISAPPEAR_EVENT = 'appear';
  var SELECTOR = ':' + KEY;
  var VISIBLE_KEY = KEY + '-visible';

  var origOn = $.fn.on;
  $.fn.on = function(events) {
    var evts = events.split(' ');
    if($.inArray(APPEAR_EVENT, evts) != -1 || $.inArray(DISAPPEAR_EVENT, evts) != -1)
      initialize(this);
    return origOn.apply(this, arguments).each(test);
  };

  $.expr[':'][KEY] = function(element) {
    return !!$(element).data(KEY);
  };

  function initialize(element)
  {
    if(element.data(KEY))
      return;
    element.data(KEY, true).data(VISIBLE_KEY, false);
  }

  function test() 
  {
    var element = $(this);
    var v = element.is(':visible') && visible(this);
    if(v != element.data(VISIBLE_KEY))
    {
      if(v)
        element.trigger(APPEAR_EVENT);
      else
        element.trigger(DISAPPEAR_EVENT);
    }
    element.data(VISIBLE_KEY, v);
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
    $(SELECTOR).each(test);
  }

  $(document).ready(function() {
    $(window).on('resize', resize).on('scroll', scroll);
    resize();
  });
})(jQuery, window, document);
