/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///                                                                           ///
///     Copy and paste this entire page to a manually-created tampermonkey    ///
///     script. Or, if you're here to look at the code for some reason, hi    ///
///                                                                           ///
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


(function () {
  'use strict';
  


  // Setup variables
  var lc = $('.liveupdate-listing');
 // this next feature only works if you REMOVE the "@exclude      *://*.reddit.com/live/*/updates/*
// because i cannot change that. it has to be done manually.
// :(
if(window.location.href.indexOf("updates") > -1) {
var contex = window.location.href;
contex = contex.replace('updates\/', '?after=LiveUpdate_');
       $('.liveupdate-listing').prepend("<a id=contexter>context</a>");
$("#contexter").attr("href", contex);
document.getElementById("contexter").style.textAlign = "center";
document.getElementById("contexter").style.marginBottom = "15px";
document.getElementById("contexter").style.color = "#369";
    document.getElementById("contexter").style.background = "#eee";
    document.getElementById("contexter").style.display = "block";

    }
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
  $('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=001 id=mynameisnotrider> <div id=the2 title='Disables special colors and messages, such as the special 666 color, and the usernames.'>DISABLE SPECIAL COLORS</div>");
$( '#mynameisnotrider' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '-8px');
$( '#the2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '-9px');  
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=002 id=option2> <div id=desc2 title='Makes the background color of the post the same as the background of the timestamp.'>COLOR ENTIRE BACKGROUND</div>");
$( '#option2' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '16px');
$( '#desc2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '15px');  
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=003 id=option3> <div id=desc3 title='Removes the reply time after one minute.'>AUTOMATICALLY CLEAR TIME</div>");
$( '#option3' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '40px');
$( '#desc3' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '39px');  
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=004 id=option4> <div id=desc4 title='Ok guys this one is kinda inconsistent and a little bad. It definitely works best when ghost messages are disabled. If they are enabled, the feature only works properly if you do not post during a run. If you interrupt a run, it is not gonna work properly. Overall it is the 2nd worst thing I have done probably'>UNSTRIKE TEXT (NO GHOST MESSAGES)</div>");
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
  $('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=103 id=shadow3 value=TOP_20 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=104 id=shadow4 value=red style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1041 id=shadow4p1 value=1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
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
//    var count2 = '';var count3 = '';var count4 = '';var count5 = '';var count6 = '';var count7 = '';var count8 = '';var count9 = '';var count10 = '';
   if (document.getElementById("option4").checked == true) {
     $('.liveupdate.preview').css('display','none');
    var count1 = $('.liveupdate-listing').children().first().children().first().next().children().first().children().first().text(); 

    count1 = count1.substring(0, 9);
    count1 = count1.replace(/\D/g, '');
    var count1testlol = $('.liveupdate-listing').children().first().children().first().next().children().first().children().first().text(); 

    count1testlol = count1testlol.substring(0, 9);
    count1testlol = count1testlol.replace(/[A-Za-z]/g, '');
    count1 = count1.replace(/,/g, '');
    count1 = count1.replace(/ /g, '');
var restofbody1 = $('.liveupdate-listing').children().first().children().first().next().children().first().html(); 
    var restp1 = restofbody1.substring(0, 9);
//    var matches = restp1.match(/\d+/g);
    var matches = restp1.match(/[0-9],[0-9]/g);
    var matches2 = restp1.match(/[0-9] [0-9]/g);
     var matches3 = restp1.match(/[0-9][0-9][0-9]/g);
if (matches != null) {
//        if (restp1.includes(",")) {
        restofbody1 = restofbody1.replace(',','');
    restofbody1 = restofbody1.replace(',','');
        }
//        if (restp1.includes(" ")) {
    if (matches2 != null) {
        restofbody1 = restofbody1.replace(' ','');
    restofbody1 = restofbody1.replace(' ','');
        }
//    }
//    restp1 = restp1.replace(/\D/g, '');
//    restp1 = restofbody1.replace(/,/g, '');
//    restp1 = restofbody1.replace(/ /g, '');
    restofbody1 = restofbody1.replace(count1, '');
     count1testlol = count1testlol + ' ';
     restofbody1 = restofbody1.replace(/\r\n/g, '\<br\>\<\/br\>');
         restofbody1 = restofbody1.replace(/p>/g, 'span>');
         restofbody1 = restofbody1.replace(/\/span\>/g, '/span><ul style=\"visibility:hidden;height:9px;\"></ul>');
//     restofbody1 = restofbody1.replace(/\/span\>/g, '/span><br><br>');
//     restofbody1 = restofbody1.replace(/\<br\>\<\/span\>/g, '</span>');
//     restofbody1 = restofbody1.replace('<p></p><p', '<p></p><span');
//     restofbody1 = restofbody1.replace('span\>\<', 'span\>\<br\>\</br\>\<');
     //    if ($('.liveupdate-listing').children().first().hasClass( "preview" ) == true) {
     if (matches3 != null) {    
     $node.find('.body .md').after("<span id=messagems style='display: initial; font-size:14px;'></div>");
    $node.find('.body .md').append("<span id=countms></div>");
     document.getElementById("messagems").innerHTML = restofbody1;
    document.getElementById("countms").innerHTML = count1testlol;
         $node.find('.body .md p').css('display', 'none');
       $('#messagems').children().last().remove();
     }
//    var count2 = $('.liveupdate-listing').children().first().next().next().next().children().first().next().children().first().next().children().first().text(); 
//    } else {
//      var count2 = $('.liveupdate-listing').children().first().next().children().first().next().children().first().next().children().first().text(); 
//    }
//    count2 = count2.substring(0, 9);
//    count2 = count2.replace(/\D/g, '');
//    count2 = count2.replace(/,/g, '');
//    count2 = count2.replace(/ /g, '');
//    if (count2++ != count1) {
//      var count3 = 'hi';
//    }
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
  var elcolor = '#ffffff';
  if (user == '/user/rschaosid') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (2 <= demipunoyletra && demipunoyletra < 8) {
  var colortest = '#ef7070';
} else if (8 == demipunoyletra) {
  var colortest = '#00ff00';
  demipunoyletra = 'gordonpt8';
  if (user == '/user/gordonpt8') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (9 <= demipunoyletra && demipunoyletra < 18) {
  var colortest = '#ef7070';
} else if (18 == demipunoyletra) {
  var colortest = '#0000ff';
  demipunoyletra = 'Kris18';
  var elcolor = '#ffffff';
  if (user == '/user/Kris18') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (19 <= demipunoyletra && demipunoyletra < 36) {
  var colortest = '#ef7070';
} else if (36 == demipunoyletra) {
  var colortest = '#00BFFF';
  demipunoyletra = 'Iamspeedy36';
  if (user == '/user/Iamspeedy36') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (37 == demipunoyletra) {
  var colortest = '#ffff00';
  demipunoyletra = 'amazingpikachu_37';
  if (user == '/user/amazingpikachu_38') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (38 <= demipunoyletra && demipunoyletra < 47) {
  var colortest = '#ef7070';
} else if (47 == demipunoyletra) {
  var colortest = '#191970';
  var elcolor = '#ffffff';
  demipunoyletra = '(47) kdiuro13';
  if (user == '/user/kdiuro13') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (48 <= demipunoyletra && demipunoyletra < 100) {
  var colortest = '#ef7070';
} else if (100 == demipunoyletra) {
  var colortest = '#2b0090';
  demipunoyletra = '(100) abplows';
    var elcolor = '#ffffff';
  if (user == '/user/abplows') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (101 <= demipunoyletra && demipunoyletra < 123) {
  var colortest = '#ffaeae';
} else if (123 == demipunoyletra) {
      randomx = Math.floor((Math.random() * 2) + 1);
    if (randomx == 1) {
  var colortest = '#6495ED';
  demipunoyletra = 'davidjl123';
      if (user == '/user/davidjl123') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    } else {
        var colortest = '#0000ff';
  demipunoyletra = 'dominodan123';
      var elcolor = '#ffffff';
      if (user == '/user/dominodan123') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    }
} else if (124 <= demipunoyletra && demipunoyletra < 151) {
  var colortest = '#ffaeae';
} else if (151 == demipunoyletra) {
  var colortest = '#FFFF33';
  demipunoyletra = '(151) MewDP';
  if (user == '/user/MewDP') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (152 <= demipunoyletra && demipunoyletra < 200) {
  var colortest = '#ffaeae';
} else if (200 <= demipunoyletra && demipunoyletra < 220) {
  var colortest = '#ffebba';
} else if (220 == demipunoyletra) {
  var colortest = '#F08080';
  demipunoyletra = '(220) Chalupa_Dad';
  if (user == '/user/Chalupa_Dad') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (221 <= demipunoyletra && demipunoyletra < 300) {
  var colortest = '#ffebba';
} else if (300 <= demipunoyletra && demipunoyletra < 301) {
  var colortest = '#cfffba';
} else if (301 == demipunoyletra) {
  var colortest = '#ff0000';
  demipunoyletra = 'piyushsharma301';
  if (user == '/user/piyushsharma301') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (302 <= demipunoyletra && demipunoyletra < 333) {
  var colortest = '#cfffba';
} else if (333 == demipunoyletra) {
  var colortest = '#8A2BE2';
  var elcolor = '#ffffff';
  demipunoyletra = '(333) Majestic_Bear';
  if (user == '/user/Majestic_Bear') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (334 <= demipunoyletra && demipunoyletra < 369) {
  var colortest = '#cfffba';
} else if (369 == demipunoyletra) {
  var colortest = '#D9009C';
    var elcolor = '#ffffff';
  demipunoyletra = '(369) Whitney';
  if (user == '/user/TOP_20') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (370 <= demipunoyletra && demipunoyletra < 400) {
  var colortest = '#cfffba';
} else if (400 <= demipunoyletra && demipunoyletra < 404) {
  var colortest = '#a2e8af';
} else if (404 == demipunoyletra) {
  randomx = Math.floor((Math.random() * 2) + 1);
    if (randomx == 1) {
      var colortest = '#ffa500';
  demipunoyletra = '(404) Tranquilsunrise';
  if (user == '/user/Tranquilsunrise') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    } else {
            var colortest = '#191970';
      var elcolor = '#ffffff';
  demipunoyletra = '(404) KingCaspianX';
  if (user == '/user/KingCaspianX') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    }
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
  if (user == '/user/albert471') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (472 <= demipunoyletra && demipunoyletra < 500) {
  var colortest = '#a2e8af';
} else if (500 <= demipunoyletra && demipunoyletra < 515) {
  var colortest = '#adffed';
} else if (515 == demipunoyletra) {
  var colortest = '#66CDAA';
  demipunoyletra = '(515) Flat-Mars-Society';
  if (user == '/user/Flat-Mars-Society') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (516 <= demipunoyletra && demipunoyletra < 600) {
  var colortest = '#adffed';
} else if (600 <= demipunoyletra && demipunoyletra < 615) {
  var colortest = '#add6ff';
} else if (615 == demipunoyletra) {
  var colortest = '#71589f';
  demipunoyletra = '(615) parker_cube';
  var elcolor = '#ffffff';
  if (user == '/user/parker_cube') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (616 == demipunoyletra) {
  var colortest = '#890003';
  demipunoyletra = '(616) DemonBurritoCat';
  var elcolor = '#ffffff';
  if (user == '/user/DemonBurritoCat') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (617 <= demipunoyletra && demipunoyletra < 666) {
  var colortest = '#add6ff';
} else if (666 == demipunoyletra) {
  var colortest = '#ff0000';
  if (user == '/user/rideride') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (667 <= demipunoyletra && demipunoyletra < 689) {
  var colortest = '#add6ff';
} else if (689 == demipunoyletra) {
  var colortest = '#060647';
  demipunoyletra = 'smarvin6(689)';
  var elcolor = '#ffffff';
  if (user == '/user/smarvin6689') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (690 <= demipunoyletra && demipunoyletra < 700) {
  var colortest = '#add6ff';
} else if (700 <= demipunoyletra && demipunoyletra < 777) {
  var colortest = '#bcadff';
} else if (777 == demipunoyletra) {
  var colortest = '#e66b00';
  demipunoyletra = '(777) artbn';
  if (user == '/user/artbn') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
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
  if (user == '/user/Smartstocks') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (974 <= demipunoyletra && demipunoyletra < 998) {
  var colortest = '#ffadf8';
} else if (998 == demipunoyletra) {
  var colortest = '#9acd32';
  demipunoyletra = '(998) qwertylool';
  if (user == '/user/qwertylool') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (999 <= demipunoyletra && demipunoyletra < 1000) {
  var colortest = '#ffadf8';
} else if (1000 <= demipunoyletra && demipunoyletra < 1234) {
  var colortest = '#ededed';
} else if (1234 == demipunoyletra) {
  var colortest = '#00cc99';
  demipunoyletra = 'randomusername(1234)58';
  if (user == '/user/randomusername123458') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (1235 <= demipunoyletra && demipunoyletra < 1521) {
  var colortest = '#ededed';
} else if (1521 == demipunoyletra) {
  var colortest = '#ffaf47';
  demipunoyletra = 'darthvader1521';
  if (user == '/user/darthvader1521') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (1522 <= demipunoyletra && demipunoyletra < 1616) {
  var colortest = '#ededed';
} else if (1616 == demipunoyletra) {
  var colortest = '#1affa7';
  demipunoyletra = 'VitaminB1616';
  if (user == '/user/VitaminB16') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (1617 <= demipunoyletra && demipunoyletra < 69420) {
  var colortest = '#ededed';
} else if (69420 == demipunoyletra) {
  var colortest = '#bb00ff';
  demipunoyletra = 'lol';
  var elcolor = '#ffff00';
} else {
  if (user == '/user/countmeister') {var user2 = $node.find('.body').children().first().next().text(); $node.find('.body').append("<span id=fakeauthor></div>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body').children().first().next().css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
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
