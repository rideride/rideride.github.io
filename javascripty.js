// ==UserScript==
// @name         Response Times
// @description  Live Counting
// @author       /u/
// @namespace    none lol
// @include      *://*.reddit.com/live/*
// @exclude      *://*.reddit.com/live/create*
// @exclude      *://*.reddit.com/live/*/edit*
// @exclude      *://*.reddit.com/live/*/updates/*
// @exclude      *://*.reddit.com/live/*/contributors*
// ==/UserScript==



(function () {
  'use strict';
  // Setup variables
  var lc = $('.liveupdate-listing');
 

  lc.on('DOMNodeInserted', function (e) {
      
    var $node = $(e.target);
    // Must be a .liveupdate element
    if (!$node.hasClass('liveupdate')) {
      return;
    }    // Check that the new message is at the top
    // (Not loaded from bottom)

    var index = $node.index();
    if (index != 0) {
      return;
    }    // Color

      
           var magin = $node.find('.body').prev().attr('href');
           var magin2 = magin.replace('/live/ta535s1hq2je/updates/', '');
           var magin2p1 = magin2.substring(0, 8);
    var magin2p11 = magin2.substring(9, 13);
    var magin2p111 = magin2.substring(15, 18);
    var magin2p1111 = magin2p111 + magin2p11 + magin2p1;
    
           var magin2p2 = parseInt(magin2p1111, 16);
           var magin3 = $node.find('.body').parent().next().children().first().attr('href');
           var magin4 = magin3.replace('/live/ta535s1hq2je/updates/', '');
           var magin4p1 = magin4.substring(0, 8);
    var magin4p11 = magin4.substring(9, 13);
     var magin4p111 = magin4.substring(15, 18);
    var magin4p1111 = magin4p111 + magin4p11 + magin4p1;
           var magin4p2 = parseInt(magin4p1111, 16);
           var teenviopoemas = magin2p2 - magin4p2;
           var demipunoyletra = teenviopoemas / 10000;
           demipunoyletra = ~~demipunoyletra;
    var colortest = '#ededed';
    if (demipunoyletra <= 0) {
  var colortest = '#f2ee0e';
} else if (1 <= demipunoyletra && demipunoyletra < 100) {
  var colortest = '#ef7070';
} else if (100 <= demipunoyletra && demipunoyletra < 200) {
  var colortest = '#ffaeae';
} else if (200 <= demipunoyletra && demipunoyletra < 300) {
  var colortest = '#ffebba';
} else if (300 <= demipunoyletra && demipunoyletra < 400) {
  var colortest = '#cfffba';
} else if (400 <= demipunoyletra && demipunoyletra < 500) {
  var colortest = '#a2e8af';
} else if (500 <= demipunoyletra && demipunoyletra < 600) {
  var colortest = '#adffed';
} else if (600 <= demipunoyletra && demipunoyletra < 700) {
  var colortest = '#add6ff';
} else if (700 <= demipunoyletra && demipunoyletra < 800) {
  var colortest = '#bcadff';
} else if (800 <= demipunoyletra && demipunoyletra < 900) {
  var colortest = '#e9adff';
} else if (900 <= demipunoyletra && demipunoyletra < 1000) {
  var colortest = '#ffadf8';
} else {
  var colortest = '#ededed';
}
      
    
      $node.find('.river').css('position', 'absolute');
      $node.find('.body').prepend("<div id=river></div>");
document.getElementById("river").innerHTML = demipunoyletra;
        document.getElementById("river").style.backgroundColor = colortest;
      $( 'div#river' ).css('position', 'absolute').css('margin-left', '-135px').css('font-size', '9px').css('margin-top', '4px').css('width','120px').css('text-align','right').css('max-width','120px');

      
      
  });
}) ();

