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
 
  $('.sidebar').prepend("<div id=msbox></div>")
     $('.sidebar').prepend("<div id=msboxenabler class=enabler>[+] Response Times Options</div><div id=msboxenabler2 class=enabler style='display: none;'>[-] Response Times Options</div>")
     $( "#msbox" ).hide();
       $( ".enabler" ).click(function() {
        $( "#msbox" ).toggle("slow");
         $( ".enabler" ).toggle();
       });
  $( ".enabler" ).hover(function() {
         document.getElementById("msboxenabler").style.cursor = 'pointer';
         document.getElementById("msboxenabler2").style.cursor = 'pointer';
       });
     document.getElementById("msboxenabler").style.position = 'absolute';
        document.getElementById("msboxenabler").style.marginTop = '-12px';
  document.getElementById("msboxenabler").style.fontWeight = 'bold';
  document.getElementById("msboxenabler").style.color = '#369';
  document.getElementById("msboxenabler2").style.position = 'absolute';
        document.getElementById("msboxenabler2").style.marginTop = '-12px';
    document.getElementById("msboxenabler2").style.fontWeight = 'bold';
  document.getElementById("msboxenabler2").style.color = '#369';
    document.getElementById("msbox").style.height = '108px';
   document.getElementById("msbox").style.marginTop = '22px';
    document.getElementById("liveupdate-resources").style.marginTop = '12px';
  $('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=001 id=mynameisnotrider> <div id=the2>DISABLE SPECIAL COLORS</div>");
$( '#mynameisnotrider' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '-8px');
$( '#the2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '-9px');  
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=002 id=option2> <div id=desc2>COLOR ENTIRE BACKGROUND</div>");
$( '#option2' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '16px');
$( '#desc2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '15px');  
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=003 id=option3> <div id=desc3>AUTOMATICALLY CLEAR TIME</div>");
$( '#option3' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '40px');
$( '#desc3' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '39px');  
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=004 id=option4> <div id=desc4>IGNORE NON-VALID COUNTS (EXPERIMENTAL)</div>");
$( '#option4' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '64px');
$( '#desc4' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '63px');  
$('#msbox').prepend("<div id=shadowboxenabler class=shadowboxenabler>[+] Enable Shadows</div><div class=shadowboxenabler id=shadowboxenabler2>[-] Disable Shadows</div><div id=shadowbox></div>");
$( '#shadowboxenabler' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '5px').css('margin-top', '87px').css('cursor', 'pointer').css('color', '#369');  
$( '#shadowboxenabler2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '5px').css('margin-top', '87px').css('display', 'none').css('cursor', 'pointer').css('color', '#369');  
$('#shadowbox').prepend("<input type=text class=shadowtextbox data-box-id=101 id=shadow1 value=amazingpikachu_38 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=102 id=shadow2 value=purple style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1021 id=shadow2p1 value=5 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a id=shadowadd>+</a>").css('position', 'absolute').css('margin-left', '5px').css('margin-top', '106px');
$( '#shadowadd' ).css('cursor', 'pointer').css('color', '#369');
$( ".remove_field" ).css('cursor', 'pointer').css('color', '#369');
  var shadowcount = 1;
$("#shadowadd").click(function(e) {
    e.preventDefault();
if (shadowcount == 1) {
  shadowcount++;
  $('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=103 id=shadow3 value=TOP_20 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=104 id=shadow4 value=gray style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1041 id=shadow4p1 value=1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
} else if (shadowcount == 2) {
  shadowcount++;
  $('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=105 id=shadow5 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=106 id=shadow6 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1061 id=shadow6p1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
}
  else if (shadowcount == 3) {
  shadowcount++;
  $('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=107 id=shadow7 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=108 id=shadow8 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1081 id=shadow8p1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
}
  else if (shadowcount == 4) {
  shadowcount++;
  $('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=109 id=shadow9 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=110 id=shadow10 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1091 id=shadow10p1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
}
  
  });
 $('#shadowbox').on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); 
   $(this).parent('div').remove(); 
   shadowcount--;
    });


  $( "#shadowbox" ).hide();
       $( ".shadowboxenabler" ).click(function() {
        $( "#shadowbox" ).toggle();
         $( ".shadowboxenabler" ).toggle();
       });
  
 $( "#shadowboxenabler" ).click(function() {
             document.getElementById("msbox").style.height = '202px';
       });
  
  $( "#shadowboxenabler2" ).click(function() {
                 document.getElementById("msbox").style.height = '108px';
       });


  
//  var shadowinput1 = document.getElementById("shadow1").value
  
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
                    var user = $node.find('.body').children().first().next().attr('href');

    var user2 = '';
    var shadowval1 = document.getElementById("shadow1").value;
    var shadowval2 = document.getElementById("shadow2").value;
    var shadowval2p1 = document.getElementById("shadow2p1").value;
    var shadowval3 = '';
    var shadowval4 = '';
    var shadowval4p1 = '';
    var shadowval5 = '';
    var shadowval6 = '';
    var shadowval6p1 = '';
    var shadowval7 = '';
    var shadowval8 = '';
    var shadowval8p1 = '';
    var shadowval9 = '';
    var shadowval10 = '';
    var shadowval10p1 = '';
   if ( 2 <= shadowcount) { 
     var shadowval3 = document.getElementById("shadow3").value;
    var shadowval4 = document.getElementById("shadow4").value;
     var shadowval4p1 = document.getElementById("shadow4p1").value;
   }
    if ( 3 <= shadowcount) { 
      var shadowval5 = document.getElementById("shadow5").value;
    var shadowval6 = document.getElementById("shadow6").value;
      var shadowval6p1 = document.getElementById("shadow6p1").value;
    }
    if ( 4 <= shadowcount) { 
      var shadowval7 = document.getElementById("shadow7").value;
    var shadowval8 = document.getElementById("shadow8").value;
      var shadowval8p1 = document.getElementById("shadow8p1").value;
    }
    if ( 5 <= shadowcount) { 
      var shadowval9 = document.getElementById("shadow9").value;
    var shadowval10 = document.getElementById("shadow10").value;
      var shadowval10p1 = document.getElementById("shadow10p1").value;
    }
      var shadowcheck = 'disabled';
  if ( $('#shadowbox').css('display') == 'none') {
 shadowcheck = 'disabled';
} else {
  shadowcheck = 'enabled';
}
    if (shadowval1 != '' && shadowval2 != ''  && shadowval2p1 != '' && shadowcheck == 'enabled') {
      if (user == '/user/' + shadowval1) {
        var hmm1 = '0 0 5px '  + shadowval2 + ', ';
        var hmm1p2 = hmm1.repeat(shadowval2p1);
        hmm1p2 = hmm1p2.substring(0, hmm1p2.length - 2);
        $node.find('.body').children().first().next().css('textShadow', hmm1p2);
    }
    }
    if (shadowval3 != '' && shadowval4 != '' && shadowval4p1 != '' && shadowcheck == 'enabled') {
      if (user == '/user/' + shadowval3) {
        var hmm3 = '0 0 5px '  + shadowval4 + ', ';
        var hmm3p2 = hmm3.repeat(shadowval4p1);
        hmm3p2 = hmm3p2.substring(0, hmm3p2.length - 2);
        $node.find('.body').children().first().next().css('textShadow', hmm3p2);
    }
    }
    if (shadowval5 != '' && shadowval6 != '' && shadowval6p1 != '' && shadowcheck == 'enabled') {
      if (user == '/user/' + shadowval5) {
        var hmm5 = '0 0 5px '  + shadowval6 + ', ';
        var hmm5p2 = hmm5.repeat(shadowval6p1);
        hmm5p2 = hmm5p2.substring(0, hmm5p2.length - 2);
        $node.find('.body').children().first().next().css('textShadow', hmm5p2);
    }
    }
    if (shadowval7 != '' && shadowval8 != '' && shadowval8p1 != '' && shadowcheck == 'enabled') {
      if (user == '/user/' + shadowval7) {
        var hmm7 = '0 0 5px '  + shadowval8 + ', ';
        var hmm7p2 = hmm7.repeat(shadowval8p1);
        hmm7p2 = hmm7p2.substring(0, hmm7p2.length - 2);
        $node.find('.body').children().first().next().css('textShadow', hmm7p2);
    }
    }
    if (shadowval9 != '' && shadowval10 != '' && shadowval10p1 != '' && shadowcheck == 'enabled') {
      if (user == '/user/' + shadowval9) {
        var hmm9 = '0 0 5px '  + shadowval10 + ', ';
        var hmm9p2 = hmm9.repeat(shadowval10p1);
        hmm9p2 = hmm9p2.substring(0, hmm9p2.length - 2);
        $node.find('.body').children().first().next().css('textShadow', hmm9p2);
    }
    }
    
        if (document.getElementById("option4").checked == true) {
      var count3 = $('.liveupdate-listing').children().first().next().next().children().first().next().children().first().next().children().first().text();
var count4 = $('.liveupdate-listing').children().first().next().next().next().children().first().next().children().first().next().children().first().text();
            var count5 = $('.liveupdate-listing').children().first().next().next().next().next().children().first().next().children().first().next().children().first().text();
            var count6 = $('.liveupdate-listing').children().first().next().next().next().next().next().children().first().next().children().first().next().children().first().text();
            var count7 = $('.liveupdate-listing').children().first().next().next().next().next().next().next().children().first().next().children().first().next().children().first().text();
            var count8 = $('.liveupdate-listing').children().first().next().next().next().next().next().next().next().children().first().next().children().first().next().children().first().text();
            var count9 = $('.liveupdate-listing').children().first().next().next().next().next().next().next().next().next().children().first().next().children().first().next().children().first().text();
            var count10 = $('.liveupdate-listing').children().first().next().next().next().next().next().next().next().next().next().children().first().next().children().first().next().children().first().text();

    var count1 = $('.liveupdate-listing').children().first().children().first().next().children().first().children().first().text(); 
    var count2 = $('.liveupdate-listing').children().first().next().children().first().next().children().first().next().children().first().text();
    count1 = count1.substring(0, 9);
    count1 = count1.replace(/\D/g, '');
    count1 = count1.replace(/,/g, '');
    count1 = count1.replace(/ /g, '');
    count2 = count2.substring(0, 9);
    count2 = count2.replace(/\D/g, '');
    count2 = count2.replace(/,/g, '');
    count2 = count2.replace(/ /g, '');
    var count2b = parseInt(count2, 10);
    count2 = parseInt(count2, 10) + 1;
    var magin3 = '';


    if (count2 != count1) {
     magin3 = '';
    count3 = count3.substring(0, 9);
    count3 = count3.replace(/\D/g, '');
    count3 = count3.replace(/,/g, '');
    count3 = count3.replace(/ /g, '');
//            var count3b = parseInt(count3, 10);
    count3 = parseInt(count3, 10) + 1;
          if (count3 == count1) {
      magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
    }
    if (count3 != count1 && count2 != count1) {
count4 = count4.substring(0, 9);
    count4 = count4.replace(/\D/g, '');
    count4 = count4.replace(/,/g, '');
    count4 = count4.replace(/ /g, '');
    count4 = parseInt(count4, 10) + 1;
      var count4b = parseInt(count4, 10);
      if (count4 == count1) {
      magin3 = $node.find('.body').parent().next().next().next().children().first().attr('href');
    }
    if (count4 != count1 && count3 != count1 && count2 != count1) {
count5 = count5.substring(0, 9);
    count5 = count5.replace(/\D/g, '');
    count5 = count5.replace(/,/g, '');
    count5 = count5.replace(/ /g, '');
    count5 = parseInt(count5, 10) + 1;
      var count5b = parseInt(count5, 10);
            if (count5 == count1) {
      magin3 = $node.find('.body').parent().next().next().next().next().children().first().attr('href');
    }
    if (count5 != count1 && count4 != count1 && count3 != count1 && count2 != count1) {
count6 = count6.substring(0, 9);
    count6 = count6.replace(/\D/g, '');
    count6 = count6.replace(/,/g, '');
    count6 = count6.replace(/ /g, '');
    count6 = parseInt(count6, 10) + 1;
      var count6b = parseInt(count6, 10);
                  if (count6 == count1) {
      magin3 = $node.find('.body').parent().next().next().next().next().next().children().first().attr('href');
    }
    if (count6 != count1 && count5 != count1 && count4 != count1 && count3 != count1 && count2 != count1) {
count7 = count7.substring(0, 9);
    count7 = count7.replace(/\D/g, '');
    count7 = count7.replace(/,/g, '');
    count7 = count7.replace(/ /g, '');
    count7 = parseInt(count7, 10) + 1;
      var count7b = parseInt(count7, 10);
                        if (count7 == count1) {
      magin3 = $node.find('.body').parent().next().next().next().next().next().next().children().first().attr('href');
    }
    if (count7 != count1 && count6 != count1 && count5 != count1 && count4 != count1 && count3 != count1 && count2 != count1) {
count8 = count8.substring(0, 9);
    count8 = count8.replace(/\D/g, '');
    count8 = count8.replace(/,/g, '');
    count8 = count8.replace(/ /g, '');
    count8 = parseInt(count8, 10) + 1;
      var count8b = parseInt(count8, 10);
                              if (count8 == count1) {
      magin3 = $node.find('.body').parent().next().next().next().next().next().next().next().children().first().attr('href');
    }
    if (count8 != count1 && count7 != count1 && count6 != count1 && count5 != count1 && count4 != count1 && count3 != count1 && count2 != count1) {
count9 = count9.substring(0, 9);
    count9 = count9.replace(/\D/g, '');
    count9 = count9.replace(/,/g, '');
    count9 = count9.replace(/ /g, '');
    count9 = parseInt(count9, 10) + 1;
      var count9b = parseInt(count9, 10);
                                    if (count9 == count1) {
      magin3 = $node.find('.body').parent().next().next().next().next().next().next().next().next().children().first().attr('href');
    }
    if (count9 != count1 && count8 != count1 && count7 != count1 && count6 != count1 && count5 != count1 && count4 != count1 && count3 != count1 && count2 != count1) {
count10 = count10.substring(0, 10);
    count10 = count10.replace(/\D/g, '');
    count10 = count10.replace(/,/g, '');
    count10 = count10.replace(/ /g, '');
    count10 = parseInt(count10, 10) + 1; 
      var count10b = parseInt(count10, 10);
                                          if (count10 == count1) {
      magin3 = $node.find('.body').parent().next().next().next().next().next().next().next().next().next().children().first().attr('href');
    }
    }}}}}}}}

    if (count2 == count1 && count2b == count3) {
      magin3 = '';
    }
    if (count2 == count1 && count2b != count3) {
        magin3 = $node.find('.body').parent().next().children().first().attr('href');

    }

//        if (count2 == count1 && count2b == count3) {
//        magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//        }
//        if (count2 == count1 && count2b == count3) {
//        magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//        }
//        if (count2 == count1 && count2b == count3) {
//        magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//        }
//        if (count2 == count1 && count2b == count3) {
//        magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//        }
//        if (count2 == count1 && count2b == count3) {
//        magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//        }
//        if (count2 == count1 && count2b == count3) {
//        magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//        }
//        if (count2 == count1 && count2b == count3) {
//        magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//        }
    if (count2b == count1) {
      magin3 = '';
    }} else {
      magin3 = $node.find('.body').parent().next().children().first().attr('href');

    }
    var riverline = 'none';
    var riveropacity = '1';
    if (magin3 == '') {
      riverline = 'line-through';
      riveropacity = '0.5';
      magin3 = $node.find('.body').parent().next().children().first().attr('href');
    }
    var magin = $node.find('.body').prev().attr('href');
           var magin2 = magin.replace(regexy, '');
           var magin2p1 = magin2.substring(0, 8);
    var magin2p11 = magin2.substring(9, 13);
    var magin2p111 = magin2.substring(15, 18);
    var magin2p1111 = magin2p111 + magin2p11 + magin2p1;
    
           var magin2p2 = parseInt(magin2p1111, 16);
//           var magin3 = $node.find('.body').parent().next().children().first().attr('href');
//    if (magin3 == "#") {
//  var magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//}
//    if (magin3 == undefined) {
//  var magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//}
//    if ($node.find('.body').parent().next().hasClass( "stricken" ) == true ) {
//       var magin3 = $node.find('.body').parent().next().next().children().first().attr('href');
//     }
//         if ($node.find('.body').parent().next().next().hasClass( "stricken" ) == true && $node.find('.body').parent().next().hasClass( "stricken" ) == true ) {
//       var magin3 = $node.find('.body').parent().next().next().next().children().first().attr('href');
//     }     
//if ($node.find('.body').parent().next().next().next().hasClass( "stricken" ) == true && $node.find('.body').parent().next().next().hasClass( "stricken" ) == true && $node.find('.body').parent().next().hasClass( "stricken" ) == true ) {
//       var magin3 = $node.find('.body').parent().next().next().next().next().children().first().attr('href');
//     }   

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
  if (user == '/user/rschaosid') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (2 <= demipunoyletra && demipunoyletra < 8) {
  var colortest = '#ef7070';
} else if (8 == demipunoyletra) {
  var colortest = '#00ff00';
  demipunoyletra = 'gordonpt8';
  if (user == '/user/gordonpt8') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (9 <= demipunoyletra && demipunoyletra < 18) {
  var colortest = '#ef7070';
} else if (18 == demipunoyletra) {
  var colortest = '#0000ff';
  demipunoyletra = 'Kris18';
  var elcolor = '#ffffff';
  if (user == '/user/Kris18') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (19 <= demipunoyletra && demipunoyletra < 36) {
  var colortest = '#ef7070';
} else if (36 == demipunoyletra) {
  var colortest = '#00BFFF';
  demipunoyletra = 'Iamspeedy36';
  if (user == '/user/Iamspeedy36') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (37 == demipunoyletra) {
  var colortest = '#ffff00';
  demipunoyletra = 'amazingpikachu_37';
  if (user == '/user/amazingpikachu_38') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (38 <= demipunoyletra && demipunoyletra < 100) {
  var colortest = '#ef7070';
} else if (100 == demipunoyletra) {
  var colortest = '#2b0090';
  demipunoyletra = '(100) abplows';
    var elcolor = '#ffffff';
  if (user == '/user/abplows') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (101 <= demipunoyletra && demipunoyletra < 123) {
  var colortest = '#ffaeae';
} else if (123 == demipunoyletra) {
      randomx = Math.floor((Math.random() * 2) + 1);
    if (randomx == 1) {
  var colortest = '#6495ED';
  demipunoyletra = 'davidjl123';
      if (user == '/user/davidjl123') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
    } else {
        var colortest = '#0000ff';
  demipunoyletra = 'dominodan123';
      var elcolor = '#ffffff';
      if (user == '/user/dominodan123') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
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
  if (user == '/user/piyushsharma301') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (302 <= demipunoyletra && demipunoyletra < 369) {
  var colortest = '#cfffba';
} else if (369 == demipunoyletra) {
  var colortest = '#D9009C';
    var elcolor = '#ffffff';
  demipunoyletra = '(369) Whitney';
  if (user == '/user/TOP_20') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (370 <= demipunoyletra && demipunoyletra < 400) {
  var colortest = '#cfffba';
} else if (400 <= demipunoyletra && demipunoyletra < 404) {
  var colortest = '#a2e8af';
} else if (404 == demipunoyletra) {
  var colortest = '#ffa500';
  demipunoyletra = '(404) Tranquilsunrise';
  if (user == '/user/Tranquilsunrise') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
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
  if (user == '/user/albert471') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (472 <= demipunoyletra && demipunoyletra < 500) {
  var colortest = '#a2e8af';
} else if (500 <= demipunoyletra && demipunoyletra < 600) {
  var colortest = '#adffed';
} else if (600 <= demipunoyletra && demipunoyletra < 666) {
  var colortest = '#add6ff';
} else if (666 == demipunoyletra) {
  var colortest = '#ff0000';
  if (user == '/user/rideride') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (667 <= demipunoyletra && demipunoyletra < 700) {
  var colortest = '#add6ff';
} else if (700 <= demipunoyletra && demipunoyletra < 777) {
  var colortest = '#bcadff';
} else if (777 == demipunoyletra) {
  var colortest = '#e66b00';
  demipunoyletra = '(777) artbn';
  if (user == '/user/artbn') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
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
  if (user == '/user/Smartstocks') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (974 <= demipunoyletra && demipunoyletra < 998) {
  var colortest = '#ffadf8';
} else if (998 == demipunoyletra) {
  var colortest = '#9acd32';
  demipunoyletra = '(998) qwertylool';
  if (user == '/user/qwertylool') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (999 <= demipunoyletra && demipunoyletra < 1000) {
  var colortest = '#ffadf8';
} else if (1000 <= demipunoyletra && demipunoyletra < 1234) {
  var colortest = '#ededed';
} else if (1234 == demipunoyletra) {
  var colortest = '#00cc99';
  demipunoyletra = 'randomusername(1234)58';
  if (user == '/user/randomusername123458') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
} else if (1235 <= demipunoyletra && demipunoyletra < 1616) {
  var colortest = '#ededed';
} else if (1616 == demipunoyletra) {
  var colortest = '#1affa7';
  demipunoyletra = 'VitaminB1616';
  if (user == '/user/VitaminB16') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.fontSize = '13px'; document.getElementById("fakeauthor").style.color = 'transparent'; document.getElementById("fakeauthor").style.background = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)'; document.getElementById("fakeauthor").style.webkitBackgroundClip = 'text'; }
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
    document.getElementById("river").style.opacity = riveropacity;
    document.getElementById("river").style.textDecoration = riverline;
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
