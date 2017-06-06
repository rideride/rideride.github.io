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

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///                                                                           ///
///     Hey. If you are here trying to find out what a certain update is,     ///
///     you are cheating :(                                                   ///
///                                                                           ///
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


(function () {
  'use strict';
  


  // Setup variables
  var lc = $('.liveupdate-listing');
 document.getElementById("liveupdate-resources").style.marginTop = '94px';
         $('.sidebar').prepend("<input type=checkbox class=checkbox data-box-id=001 id=mynameisnotrider> <div id=the2>DISABLE SPECIAL COLORS</div>");
$( '#mynameisnotrider' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '-8px');
$( '#the2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '-9px');  
$('.sidebar').prepend("<input type=checkbox class=checkbox data-box-id=002 id=option2> <div id=desc2>COLOR ENTIRE BACKGROUND</div>");
$( '#option2' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '16px');
$( '#desc2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '15px');  
$('.sidebar').prepend("<input type=checkbox class=checkbox data-box-id=003 id=option3> <div id=desc3>AUTOMATICALLY CLEAR TIME</div>");
$( '#option3' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '40px');
$( '#desc3' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '39px');  
$('.sidebar').prepend("<input type=checkbox class=checkbox data-box-id=004 id=option4> <div id=desc4>ENABLE PIKA SHADOW</div>");
$( '#option4' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '64px');
$( '#desc4' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '63px');  

  
  $('.checkbox').change(function(){
    var chckd = this.checked ? 'true' : 'false';
    var index = $(this).data('box-id');
    localStorage.setItem(index, chckd);
});
  $(function() {
    $('.checkbox').each(function(){
        var index = $(this).data('box-id');
        if (localStorage.getItem(index) == 'true') {
            $(this).prop('checked', true);
        } else {
            $(this).prop('checked', false);
        }
    });    
});
  
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

 
          var regexy = /\/live\/............\/updates\//
          var user = '';
          if (document.getElementById("option4").checked == true) {
            var user = $node.find('.body').children().first().next().attr('href');
    if (user == '/user/amazingpikachu_38') {
      $node.find('.body').children().first().next().css('textShadow', '0 0 5px purple, 0 0 5px purple, 0 0 5px purple, 0 0 5px purple, 0 0 5px purple');
    }
          }
    var magin = $node.find('.body').prev().attr('href');
           var magin2 = magin.replace(regexy, '');
           var magin2p1 = magin2.substring(0, 8);
    var magin2p11 = magin2.substring(9, 13);
    var magin2p111 = magin2.substring(15, 18);
    var magin2p1111 = magin2p111 + magin2p11 + magin2p1;
    
           var magin2p2 = parseInt(magin2p1111, 16);
           var magin3 = $node.find('.body').parent().next().children().first().attr('href');
    if (magin3 == "#") {
  var magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
}
    if (magin3 == undefined) {
  var magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
}
    if ($node.find('.body').parent().next().hasClass( "stricken" ) == true ) {
       var magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
     }
         if ($node.find('.body').parent().next().next().hasClass( "stricken" ) == true && $node.find('.body').parent().next().hasClass( "stricken" ) == true ) {
       var magin3 = $node.find('.body').parent().next().next().next().children().first().attr('href');
     }     
if ($node.find('.body').parent().next().next().next().hasClass( "stricken" ) == true && $node.find('.body').parent().next().next().hasClass( "stricken" ) == true && $node.find('.body').parent().next().hasClass( "stricken" ) == true ) {
       var magin3 = $node.find('.body').parent().next().next().next().next().children().first().attr('href');
     }   

           var magin4 = magin3.replace(regexy, '');
           var magin4p1 = magin4.substring(0, 8);
    var magin4p11 = magin4.substring(9, 13);
     var magin4p111 = magin4.substring(15, 18);
    var magin4p1111 = magin4p111 + magin4p11 + magin4p1;
           var magin4p2 = parseInt(magin4p1111, 16);
           var teenviopoemas = magin2p2 - magin4p2;
           var demipunoyletra = teenviopoemas / 10000;
           demipunoyletra = ~~demipunoyletra;
    var colortest = '#ededed';
        var elcolor = '#000000';
    var randomx = '0';
                if (magin == "#") {
      demipunoyletra = '';
          colortest = '';
    }
    if (document.getElementById("mynameisnotrider").checked == true) {
     if (demipunoyletra <= -500) {
  var colortest = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)';
} else if (-499 <= demipunoyletra && demipunoyletra < 1) {
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
    } else {
    if (demipunoyletra <= -500) {
  var colortest = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)';
} else if (-499 <= demipunoyletra && demipunoyletra < 1) {
  var colortest = '#f2ee0e';
} else if (1 == demipunoyletra) {
  var colortest = '#008080';
  demipunoyletra = '(1) rschaosid';
} else if (2 <= demipunoyletra && demipunoyletra < 8) {
  var colortest = '#ef7070';
} else if (8 == demipunoyletra) {
  var colortest = '#00ff00';
  demipunoyletra = 'gordonpt8';
} else if (9 <= demipunoyletra && demipunoyletra < 18) {
  var colortest = '#ef7070';
} else if (18 == demipunoyletra) {
  var colortest = '#0000ff';
  demipunoyletra = 'Kris18';
  var elcolor = '#ffffff';
} else if (19 <= demipunoyletra && demipunoyletra < 36) {
  var colortest = '#ef7070';
} else if (36 == demipunoyletra) {
  var colortest = '#00BFFF';
  demipunoyletra = 'Iamspeedy36';
} else if (37 == demipunoyletra) {
  var colortest = '#ffff00';
  demipunoyletra = 'amazingpikachu_37';
} else if (38 <= demipunoyletra && demipunoyletra < 100) {
  var colortest = '#ef7070';
} else if (100 == demipunoyletra) {
  var colortest = '#2b0090';
  demipunoyletra = '(100) abplows';
    var elcolor = '#ffffff';
} else if (101 <= demipunoyletra && demipunoyletra < 123) {
  var colortest = '#ffaeae';
} else if (123 == demipunoyletra) {
      randomx = Math.floor((Math.random() * 2) + 1);
    if (randomx == 1) {
  var colortest = '#6495ED';
  demipunoyletra = 'davidjl123';
    } else {
        var colortest = '#0000ff';
  demipunoyletra = 'dominodan123';
      var elcolor = '#ffffff';
    }
} else if (124 <= demipunoyletra && demipunoyletra < 200) {
  var colortest = '#ffaeae';
} else if (200 <= demipunoyletra && demipunoyletra < 300) {
  var colortest = '#ffebba';
} else if (300 <= demipunoyletra && demipunoyletra < 301) {
  var colortest = '#cfffba';
} else if (301 == demipunoyletra) {
  var colortest = '#ff0000';
  demipunoyletra = 'piyushsharma301';
} else if (302 <= demipunoyletra && demipunoyletra < 369) {
  var colortest = '#cfffba';
} else if (369 == demipunoyletra) {
  var colortest = '#D9009C';
  demipunoyletra = '(369) Whitney';
} else if (370 <= demipunoyletra && demipunoyletra < 400) {
  var colortest = '#cfffba';
} else if (400 <= demipunoyletra && demipunoyletra < 404) {
  var colortest = '#a2e8af';
} else if (404 == demipunoyletra) {
  var colortest = '#ffa500';
  demipunoyletra = '(404) Tranquilsunrise';
} else if (405 <= demipunoyletra && demipunoyletra < 420) {
  var colortest = '#a2e8af';
} else if (420 == demipunoyletra) {
  var colortest = '#00ff00';
} else if (421 <= demipunoyletra && demipunoyletra < 471) {
  var colortest = '#a2e8af';
} else if (471 == demipunoyletra) {
  var colortest = '#0000ff';
  demipunoyletra = 'albert471';
  var elcolor = '#ffffff';
} else if (472 <= demipunoyletra && demipunoyletra < 500) {
  var colortest = '#a2e8af';
} else if (500 <= demipunoyletra && demipunoyletra < 600) {
  var colortest = '#adffed';
} else if (600 <= demipunoyletra && demipunoyletra < 666) {
  var colortest = '#add6ff';
} else if (666 == demipunoyletra) {
  var colortest = '#ff0000';
} else if (667 <= demipunoyletra && demipunoyletra < 700) {
  var colortest = '#add6ff';
} else if (700 <= demipunoyletra && demipunoyletra < 777) {
  var colortest = '#bcadff';
} else if (777 == demipunoyletra) {
  var colortest = '#e66b00';
  demipunoyletra = '(777) artbn';
} else if (778 <= demipunoyletra && demipunoyletra < 800) {
  var colortest = '#bcadff';
} else if (800 <= demipunoyletra && demipunoyletra < 900) {
  var colortest = '#e9adff';
} else if (900 <= demipunoyletra && demipunoyletra < 973) {
  var colortest = '#ffadf8';
} else if (973 == demipunoyletra) {
  var colortest = '#840d0d';
  demipunoyletra = '(973) Smartstocks';
    var elcolor = '#ffffff';
} else if (974 <= demipunoyletra && demipunoyletra < 998) {
  var colortest = '#ffadf8';
} else if (998 == demipunoyletra) {
  var colortest = '#9acd32';
  demipunoyletra = '(998) qwertylool';
} else if (999 <= demipunoyletra && demipunoyletra < 1000) {
  var colortest = '#ffadf8';
} else if (1000 <= demipunoyletra && demipunoyletra < 1234) {
  var colortest = '#ededed';
} else if (1234 == demipunoyletra) {
  var colortest = '#00cc99';
  demipunoyletra = 'randomusername(1234)58';
} else if (1235 <= demipunoyletra && demipunoyletra < 1616) {
  var colortest = '#ededed';
} else if (1616 == demipunoyletra) {
  var colortest = '#1affa7';
  demipunoyletra = 'VitaminB1616';
} else {
  var colortest = '#ededed';
}
    }
      

    
if (document.getElementById("option2").checked == true) {
  if (magin == "#") {
    $node.find('.body').parent().css('background', 'initial');
  } else {
       $node.find('.body').parent().css('background', colortest);
  }
}
         $node.find('.river').css('position', 'absolute');
      $node.find('.body').prepend("<div id=river></div>");
document.getElementById("river").innerHTML = demipunoyletra;
        document.getElementById("river").style.background = colortest;
    document.getElementById("river").style.color = elcolor;
        document.getElementById("river").onmouseover = function() 
{
    this.style.background = "transparent";
      this.style.color = "transparent";
               this.style.cursor = "pointer";

}
    document.getElementById("river").onmouseleave = function() 
{
    this.style.background = colortest;
      this.style.color = elcolor;
}
      $( 'div#river' ).css('position', 'absolute').css('margin-left', '-135px').css('font-size', '9px').css('margin-top', '4px').css('width','120px').css('text-align','right').css('max-width','120px');
if ( $('#lc-body[data-DisplayMode="Minimal"] #liveupdate-statusbar').css('display') == 'none') {
  $( 'div#river' ).css('margin-left', '-141px');
}
    if (document.getElementById("option3").checked == true) {
    $('#river').delay(60000).hide(500); 
}
    $('div#river').click(function (e) {
        $('div#river').hide();
        $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click");
        $('div#river').show();
 
});
      

      
  });

}) ();
