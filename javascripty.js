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
  var lc = $('.liveupdate-listing');

  var USER = $('#header .user a[href]').html();

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
  
  if(window.location.href.indexOf("yrnkgszr6zdu") > -1) {
    $("#liveupdate-description").append("<p style='background:#e2ffdb;font-size:16px;' id=countdownslow></p>");
            document.title = "[live] Slow counting (one count per hour)";
$( ".save-button button.btn" ).click(function() {
var countDownDateA = new Date();
    countDownDateA.setHours( countDownDateA.getHours() + 1 );
    $("#countdownslow").css('background','#e2ffdb');
var tugOfWarWrongDirectionA = setInterval(function() {
    var nowTugA = new Date().getTime();
    var distanceTugA = countDownDateA - nowTugA;
    var minutesTugA = Math.floor((distanceTugA % (1000 * 60 * 60)) / (1000 * 60));
    var secondsTugA = Math.floor((distanceTugA % (1000 * 60)) / 1000);
    document.getElementById("countdownslow").innerHTML = minutesTugA + "m " + secondsTugA + "s";
    document.title = "["+minutesTugA+"m] Slow counting (one count per hour)";
    if (distanceTugA < 0) {
        clearInterval(tugOfWarWrongDirectionA);
        document.getElementById("countdownslow").innerHTML = "You can post now!";
        $("#countdownslow").css('background','#ffaeae');
        document.title = "[!!] Slow counting (one count per hour)";
    }
    }, 1000);
    });
}
  
  
  
  
var pranky = 0;
$( "#liveupdate-statusbar p.state" ).click(function() {
pranky++;

if (pranky == 1) {
document.getElementById("liveupdate-statusbar").innerHTML = "<p id=pyan class=state title='updating in real time'>dead</p><p class=viewer-count>69 viewers</p><p id=countdown></p>";
//////new prank lol

//$('#liveupdate-statusbar').append("<p id=countdown></p>");
var countDownDate = new Date("Aug 19 2018 23:00:00 GMT-0500 (CDT)").getTime();
var tugOfWarWrongDirection = setInterval(function() {
    var nowTug = new Date().getTime();
    var distanceTug = countDownDate - nowTug;
    var daysTug = Math.floor(distanceTug / (1000 * 60 * 60 * 24));
    var hoursTug = Math.floor((distanceTug % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesTug = Math.floor((distanceTug % (1000 * 60 * 60)) / (1000 * 60));
    var secondsTug = Math.floor((distanceTug % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = daysTug + "d " + hoursTug + "h "
    + minutesTug + "m " + secondsTug + "s";
    if (distanceTug < 0) {
        clearInterval(tugOfWarWrongDirection);
        document.getElementById("countdown").innerHTML = "01101011 01101111 01101110 01100001 01101101 01101001 01100011 01101111 01100100 01100101";
var konamicheck = 0;
function onKonamiCode(cb) {
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}
onKonamiCode(function () {
if (konamicheck == 0) {
konamicheck++;
var despacitotext = prompt("___________ found on mars", "");
despacitotext = despacitotext.toUpperCase() 
if (despacitotext == "DESPACITO 2") {
konamicheck++;
document.getElementById("countdown").innerHTML = "";
//var cnnuser1 = $('.liveupdate-listing').find('.body').children().first().next().attr('href');
var cnnuser1 = $('.liveupdate-listing').children().first().children().first().next().children().last().attr('href');
var cnnuser2 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(0)').children().first().next().children().last().attr('href');
var cnnuser3 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(1)').children().first().next().children().last().attr('href');
var cnnuser4 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(2)').children().first().next().children().last().attr('href');
var cnnusertest = setInterval(change, 20000);
var cnntext1 = $('.liveupdate-listing').children().first().children().first().next().children().first().text();
var cnntext1 = $('.liveupdate-listing').children().first().children().first().next().children().first().text();
var cnntext2 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(0)').children().first().next().children().first().text();
var cnntext3 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(0)').children().first().next().children().first().text();
var cnntext4 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(0)').children().first().next().children().first().text();
var cnndone1 = cnnuser1 + ': ' + cnntext1;
var cnndone2 = cnnuser2 + ': ' + cnntext2;
var cnndone3 = cnnuser3 + ': ' + cnntext3;
var cnndone4 = cnnuser4 + ': ' + cnntext4;
function change() {
cnnuser1 = $('.liveupdate-listing').children().first().children().first().next().children().last().attr('href');
cnnuser1 = cnnuser1.substring(6);
cnnuser2 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(0)').children().first().next().children().last().attr('href');
cnnuser2 = cnnuser2.substring(6);
cnnuser3 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(1)').children().first().next().children().last().attr('href');
cnnuser3 = cnnuser3.substring(6);
cnnuser4 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(2)').children().first().next().children().last().attr('href');
cnnuser4 = cnnuser4.substring(6);
cnntext1 = $('.liveupdate-listing').children().first().children().first().next().children().last().prev().text();
cnntext2 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(0)').children().first().next().children().last().prev().text();
cnntext3 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(1)').children().first().next().children().last().prev().text();
cnntext4 = $('.liveupdate-listing').children().first().nextAll(".liveupdate").filter(':eq(2)').children().first().next().children().last().prev().text();
cnndone1 = cnnuser1 + ': ' + cnntext1;
cnndone2 = cnnuser2 + ': ' + cnntext2;
cnndone3 = cnnuser3 + ': ' + cnntext3;
cnndone4 = cnnuser4 + ': ' + cnntext4;
document.getElementById("cnntick2").innerHTML = cnndone1;
document.getElementById("cnntick3").innerHTML = cnndone2;
document.getElementById("cnntick4").innerHTML = cnndone3;
document.getElementById("cnntick5").innerHTML = cnndone4;
}
$('#liveupdate-header').prepend("<div id=cnn>BREAKING NEWS</div><div id=cnn2>DESPACITO 2 FOUND ON MARS</div><div id=cnn4></div><iframe class=embed-responsive-item id=cnn3 type=text/html width=420 height=345 src=https://www.youtube.com/embed/kJQP7kiw5Fk?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=kJQP7kiw5Fk></iframe><div id=ticker><div class=title></div><ul><li id=cnntick1>\"DESPACITO\'S SEQUEL HAS BEEN DISCOVERED,\" SPACEX CEO ELON MUSK ANNOUNCES</li><li id=cnntick2>Hello LC!</li><li id=cnntick3>After the ticker completes the first cycle...</li><li id=cnntick4>LC posts will be put here...</li><li id=cnntick5>so wait just a bit</li></ul></div>");
$( '#cnn' ).css('position', 'fixed').css('fontSize','25px').css('background','#d70000').css('color','white').css('marginLeft','-160px').css('marginTop','412px').css('paddingBottom','69px').css('paddingLeft','5px').css('paddingRight','5px').css('zIndex','8').css('fontFamily','Helvetica');
$( '#cnn2' ).css('position', 'fixed').css('fontSize','60px').css('background','#edeeee').css('color','black').css('marginLeft','-150px').css('marginTop','441px').css('paddingLeft','5px').css('paddingRight','5px').css('zIndex','9').css('fontFamily','Helvetica');
$( '#cnn3' ).css('display', 'none');
$( '#cnn4' ).css('position', 'fixed').css('width', '113px').css('height', '120px').css('background', 'url(https://i.imgur.com/dKLtsSG.png)').css('zIndex', '10').css('marginTop', '412px').css('marginLeft', '777px');
function addCss(fileName) {
   var link = $("<link />",{
     rel: "stylesheet",
     type: "text/css",
     href: fileName
   })
   $('head').append(link);
}

addCss("https://rideride.github.io/css.css");
}
    }
else {
    alert('nope');
} 
}, 1000);
    } 
})
//////
  $( "#pyan" ).click(function() {
$('head').append('<style>.state:before{display:none !important;}</style>');
document.getElementById("liveupdate-statusbar").style.backgroundColor = '#eee';
document.getElementById("liveupdate-statusbar").style.border = '1px solid #ddd';
document.getElementById("new-update-form").style.display= 'none';
document.getElementById("liveupdate-statusbar").innerHTML = "<p id=pyan2 class=state>no further updates</p>";
document.getElementById("pyan2").style.cursor = 'text';
$( "#pyan2" ).click(function() {
document.getElementById("new-update-form").style.display= 'block';
document.getElementById("liveupdate-statusbar").style.backgroundColor = '#e2ffdb';
document.getElementById("liveupdate-statusbar").style.border = '1px solid #b1e0a9';
document.getElementById("liveupdate-statusbar").innerHTML = "<p class=state title='updating in real time'>live</p><p class=viewer-count>9 viewers</p>";
})
})
}

})


//$( "#liveupdate-statusbar p.state" ).click(function() {
//         document.getElementById("liveupdate-statusbar").innerHTML = "<p class=state title=updating in real time>dead</p><p class=viewer-count>69 viewers</p>";
//       });


//$( '.stricken' ).css('position', 'absolute');
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
    document.getElementById("msbox").style.height = '274px';
   document.getElementById("msbox").style.marginTop = '22px';
    document.getElementById("liveupdate-resources").style.marginTop = '12px';

$('#msbox').prepend("<button id=save>Save Text</button>");
$( '#save' ).css('position','absolute').css('margin-left','210px');
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
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=005 id=option5> <div id=desc5 title='Customizes the background of stricken counts.'>CUSTOM STRICKEN</div><input type=text class=inversetextbox data-box-id=201 id=inverse1 style='max-width:50px; margin-left: 134px; margin-top: 85px;position: absolute;' placeholder=color>");
$( '#option5' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '88px');
$( '#desc5' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '87px');
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=006 id=option6> <div id=desc6 title='Inverses stricken counts.'>INVERSE</div>");
$( '#option6' ).css('position', 'absolute').css('margin-left', '192px').css('margin-top', '88px');
$( '#desc6' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '209px').css('margin-top', '87px');
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=007 id=option7> <div id=desc7 title='Inverses stricken counts.'>LAST COUNT</div>");
$( '#option7' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '112px');
$( '#desc7' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '111px');
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=008 id=option8> <div id=desc8 title='Disables special RES night mode colors.'>DISABLE NIGHT MODE COLORS</div>");
$( '#option8' ).css('position', 'absolute').css('margin-left', '5px').css('margin-top', '136px');
$( '#desc8' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '21px').css('margin-top', '135px');
$('#msbox').prepend("<input type=checkbox class=checkbox data-box-id=420 id=option420>");
$( '#option420' ).css('position', 'fixed').css('margin-left', '1092px').css('margin-top', '110px').css('overflow', 'hidden');
$('#msbox').prepend("<div id=shadowboxenabler class=shadowboxenabler>[+] Enable Shadows</div><div class=shadowboxenabler id=shadowboxenabler2>[-] Disable Shadows</div><div id=shadowbox></div>");
$( '#shadowboxenabler' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '5px').css('margin-top', '159px').css('cursor', 'pointer').css('color', '#369');
$( '#shadowboxenabler2' ).css('font-size', '10px').css('position', 'absolute').css('margin-left', '5px').css('margin-top', '159px').css('display', 'none').css('cursor', 'pointer').css('color', '#369');
$('#shadowbox').prepend("<input type=text class=shadowtextbox data-box-id=101 id=shadow1 value=amazingpikachu_38 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=102 id=shadow2 value=purple style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1021 id=shadow2p1 value=5 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a id=shadowadd>+</a>").css('position', 'absolute').css('margin-left', '5px').css('margin-top', '178px');
$('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=103 id=shadow3 value=TOP_20 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=104 id=shadow4 value=red style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1041 id=shadow4p1 value=1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
$('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=105 id=shadow5 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=106 id=shadow6 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1061 id=shadow6p1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
$('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=107 id=shadow7 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=108 id=shadow8 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1081 id=shadow8p1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
$('#shadowbox').append("<div><input type=text class=shadowtextbox data-box-id=109 id=shadow9 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=user><input type=text class=shadowtextbox data-box-id=110 id=shadow10 style='max-width:50px; margin-right: 5px; margin-bottom: 2px;' placeholder=color><input type=text class=shadowtextbox data-box-id=1091 id=shadow10p1 style='max-width:20px; margin-right: 5px; margin-bottom: 2px;' placeholder=#><a class=remove_field style='cursor: pointer; color=#369;'>[x]</a></div>")
$( '#shadowadd' ).css('cursor', 'pointer').css('color', '#369');
$( ".remove_field" ).css('cursor', 'pointer').css('color', '#369');
  var shadowcount = 2;
document.getElementById('save').onclick = function() {
localStorage['inverse1'] = document.getElementById('inverse1').value;
localStorage['shadow1'] = document.getElementById('shadow1').value;
localStorage['shadow2'] = document.getElementById('shadow2').value;
localStorage['shadow2p1'] = document.getElementById('shadow2p1').value;
localStorage['shadow3'] = document.getElementById('shadow3').value;
localStorage['shadow4'] = document.getElementById('shadow4').value;
localStorage['shadow4p1'] = document.getElementById('shadow4p1').value;
localStorage['shadow5'] = document.getElementById('shadow5').value;
localStorage['shadow6'] = document.getElementById('shadow6').value;
localStorage['shadow6p1'] = document.getElementById('shadow6p1').value;
localStorage['shadow7'] = document.getElementById('shadow7').value;
localStorage['shadow8'] = document.getElementById('shadow8').value;
localStorage['shadow8p1'] = document.getElementById('shadow8p1').value;
localStorage['shadow9'] = document.getElementById('shadow9').value;
localStorage['shadow10'] = document.getElementById('shadow10').value;
localStorage['shadow10p1'] = document.getElementById('shadow10p1').value;
alert('You need to refresh to see the changes made in the text boxes for some reason :/');
 };
document.getElementById('inverse1').value = localStorage['inverse1'] || "";
document.getElementById('shadow1').value = localStorage['shadow1'] || "";
document.getElementById('shadow2').value = localStorage['shadow2'] || "";
document.getElementById('shadow2p1').value = localStorage['shadow2p1'] || "";
document.getElementById('shadow3').value = localStorage['shadow3'] || "";
document.getElementById('shadow4').value = localStorage['shadow4'] || "";
document.getElementById('shadow4p1').value = localStorage['shadow4p1'] || "";
document.getElementById('shadow5').value = localStorage['shadow5'] || "";
document.getElementById('shadow6').value = localStorage['shadow6'] || "";
document.getElementById('shadow6p1').value = localStorage['shadow6p1'] || "";
document.getElementById('shadow7').value = localStorage['shadow7'] || "";
document.getElementById('shadow8').value = localStorage['shadow8'] || "";
document.getElementById('shadow8p1').value = localStorage['shadow8p1'] || "";
document.getElementById('shadow9').value = localStorage['shadow9'] || "";
document.getElementById('shadow10').value = localStorage['shadow10'] || "";
document.getElementById('shadow10p1').value = localStorage['shadow10p1'] || "";

$("#shadowadd").click(function(e) {
    e.preventDefault();
if (shadowcount == 1) {
  shadowcount++;
  } else if (shadowcount == 2) {
  shadowcount++;
  }
  else if (shadowcount == 3) {
  shadowcount++;
}
  else if (shadowcount == 4) {
  shadowcount++;
}

  });
 $('#shadowbox').on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault();
   $(this).parent('div').remove();
   shadowcount--;
    });


  $( "#shadowbox" ).hide();
//      $( ".shadowboxenabler" ).click(function() {
//$('#shadowboxenabler').hide();
//$('#shadowboxenabler2').show();
//    $('#shadowbox').show();
//        $( "#shadowbox" ).toggle();
//         $( ".shadowboxenabler" ).toggle();
//       });

 $( "#shadowboxenabler" ).click(function() {
             document.getElementById("msbox").style.height = '274px';
$('#shadowboxenabler').hide();
$('#shadowboxenabler2').show();
    $('#shadowbox').show();
$.cookie('shadowenable', true);
       });

  $( "#shadowboxenabler2" ).click(function() {
                 document.getElementById("msbox").style.height = '180px';
$('#shadowboxenabler').show();
$('#shadowboxenabler2').hide();
    $('#shadowbox').hide();
$.cookie('shadowenable', false);
       });

if($.cookie('shadowenable') == 'true'){
    $('#shadowboxenabler').click();
} else {
    $('#shadowboxenabler2').click();
}

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

var inversecheck = 0;
  ///////////SPECIAL
  
  if (document.getElementById("option7").checked == true) {
var validcount1 = '';
var validcount2 = '';
var validcount3 = '';
var validtimy = '';
var validtimestamp = '';
var vc000t = '';
var vc100t = '';
var vc200t = '';
var vc300t = '';
var vc400t = '';
var vc500t = '';
var vc600t = '';
var vc700t = '';
var vc800t = '';
var vc900t = '';
var vc000s = '';
var vc100s = '';
var vc200s = '';
var vc300s = '';
var vc400s = '';
var vc500s = '';
var vc600s = '';
var vc700s = '';
var vc800s = '';
var vc900s = '';
var fullcount1 = '';
var author1 = '';
var author2 = '';
var authorme = $('#header .user a[href]').html();
var validcountwrong = 0;
var validcountnotme = 0;
$('#liveupdate-header').prepend("<div id=idlecontainer><div id=congrats></div><div id=statsplace><p>EXPERIMENTAL</p><p id=lastcountdesc>Last count:<p id=lastcountcount>"+validcount3+"</p><p>/u/<span id=lastcountuser>"+author2+"</span></p></p><p id=splits><p>000s:<span id=split0>"+vc000t+"</span></p><p>100s:<span id=split1>"+vc100t+"</span></p><p>200s:<span id=split2>"+vc200t+"</span></p><p>300s:<span id=split3>"+vc300t+"</span></p><p>400s:<span id=split4>"+vc400t+"</span></p><p>500s:<span id=split5>"+vc500t+"</span></p><p>600s:<span id=split6>"+vc600t+"</span></p><p>700s:<span id=split7>"+vc700t+"</span></p><p>800s:<span id=split8>"+vc800t+"</span></p><p>900s:<span id=split9>"+vc900t+"</span></p></p></div></div>");
$('#idlecontainer').css({'position': 'absolute', 'left': '200px', 'top': '75px', 'width': '115px', 'background': 'transparent', 'height': '70px'});
$('#congrats').css({
'position': 'absolute',
'top': '0px',
'left': '-46px',
'border-left': '1px solid black',
'padding-left': '5px',
'font-size': '30px',
'z-index': '999999',
'background': '#e2ffdb',
'height': '50px',
'width': '1140px',
'display': 'none'
});
$('#statsplace').css({
'position': 'absolute',
'top': '75px',
'left': '-46px',
'border-left': '1px solid black',
'padding-left': '5px',
'display': 'initial'
});
}
///////////////
  
  lc.on('DOMNodeInserted', function (e) {

if (document.getElementById("option5").checked == true) {

if (inversecheck == 0) {
function injectStyles(rule) {
  var div = $("<div />", {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo("body");    
}
var inverse2 = '-webkit-filter: invert(100%);filter: invert(100%);';
if (document.getElementById("option6").checked == false) {
var inverse2 = '';
}
var injecting = '.liveupdate.stricken {background:'  + inverse1.value + '!important;' + inverse2 + '}';
//injectStyles('.liveupdate.stricken {background:#cccccc;-webkit-filter: invert(100%);filter: invert(100%);}');
injectStyles(injecting);
inversecheck++;
} 
}

      
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
    var threadid = magin.substring(magin.lastIndexOf("live/") + 5,magin.lastIndexOf("/updates"));
           var magin2 = magin.substring(magin.indexOf("updates/") + 8);
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

           var magin4 = magin3.substring(magin.indexOf("updates/") + 8);
           var magin4p1 = magin4.substring(0, 8);
    var magin4p11 = magin4.substring(9, 13);
     var magin4p111 = magin4.substring(15, 18);
    var magin4p1111 = magin4p111 + magin4p11 + magin4p1;
           var magin4p2 = parseInt(magin4p1111, 16);
           var teenviopoemas = magin2p2 - magin4p2;
           var demipunoyletra = teenviopoemas / 1000;
demipunoyletra = Math.round( demipunoyletra * 10 ) / 10;
           demipunoyletra = demipunoyletra / 10;
demipunoyletra = Math.round(demipunoyletra);

    
    
//////////SPECIAL
if (document.getElementById("option7").checked == true) {
if ( isNaN(validcount2) == true ) {
validcount2 = validcount1;
}
 fullcount1 = $node.find('.body > .md').text();
author1 = $node.find('.body > .author').text();
author1 = author1.trim().replace('/u/', '');
 validcount1 = fullcount1;
validcount1 = validcount1.substring(0, 10);
    validcount1 = validcount1.replace(/[A-Za-z]/g, '');
validcount1 = validcount1.replace(/\./g, '');
    validcount1 = validcount1.replace(/,/g, '');
validcount1 = validcount1.replace(/ /g, '');
validcount2 = parseInt(validcount2);
validcount1 = parseInt(validcount1);
validcount2++;
if (validcount2 == validcount1 && author2 != author1 || isNaN(validcount2) == true) {
//if (author1 != author2) {
validcount3 = validcount1;
$("#lastcountcount").text(validcount3.toLocaleString());
$("#lastcountuser").text(author1);
validtimy = validcount3.toString();
validtimy = validtimy.substr(validtimy.length - 3);
 if (validtimy == '000') {

//if (vc900t != '') {
vc900t = magin2p2;
if (vc800t != '') {
           vc900s = vc900t - vc800t;
           vc900s = vc900s / 1000;
           vc900s = (Math.round(vc900s / 10) * 10) / 10;
           $("#split9").text(vc900s);
}
//} else {vc900t = magin2p2;}

} else if (validtimy == '900') {
vc800t = magin2p2;
if (vc700t != '') {
           vc800s = vc800t - vc700t;
           vc800s = vc800s / 1000;
           vc800s = (Math.round(vc800s / 10) * 10) / 10;
           $("#split8").text(vc800s);
}

} else if (validtimy == '800') {

vc700t = magin2p2;
if (vc600t != '') {
           vc700s = vc700t - vc600t;
           vc700s = vc700s / 1000;
           vc700s = (Math.round(vc700s / 10) * 10) / 10;
           $("#split7").text(vc700s);
}

}  else if (validtimy == '700') {
vc600t = magin2p2;
if (vc500t != '') {
           vc600s = vc600t - vc500t;
           vc600s = vc600s / 1000;
           vc600s = (Math.round(vc600s / 10) * 10) / 10;
           $("#split6").text(vc600s);
}

}  else if (validtimy == '600') {

vc500t = magin2p2;
if (vc400t != '') {
           vc500s = vc500t - vc400t;
           vc500s = vc500s / 1000;
           vc500s = (Math.round(vc500s / 10) * 10) / 10;
           $("#split5").text(vc500s);
}

}  else if (validtimy == '500') {

vc400t = magin2p2;
if (vc300t != '') {
           vc400s = vc400t - vc300t;
           vc400s = vc400s / 1000;
           vc400s = (Math.round(vc400s / 10) * 10) / 10;
           $("#split4").text(vc400s);
}

}  else if (validtimy == '400') {

vc300t = magin2p2;
if (vc200t != '') {
           vc300s = vc300t - vc200t;
           vc300s = vc300s / 1000;
           vc300s = (Math.round(vc300s / 10) * 10) / 10;
           $("#split3").text(vc300s);
}

}  else if (validtimy == '300') {

vc200t = magin2p2;
if (vc100t != '') {
           vc200s = vc200t - vc100t;
           vc200s = vc200s / 1000;
           vc200s = (Math.round(vc200s / 10) * 10) / 10;
           $("#split2").text(vc200s);
}

}  else if (validtimy == '200') {

vc100t = magin2p2;
if (vc000t != '') {
           vc100s = vc100t - vc000t;
           vc100s = vc100s / 1000;
           vc100s = (Math.round(vc100s / 10) * 10) / 10;
           $("#split1").text(vc100s);
}

}  else if (validtimy == '100') {

vc000t = magin2p2;
if (vc900t != '') {
           vc000s = vc000t - vc900t;
           vc000s = vc000s / 1000;
           vc000s = (Math.round(vc000s / 10) * 10) / 10;
           $("#split0").text(vc000s);
}
//} else {vc000t = magin2p2;}

} 








/*else if (validtimy == '551') {
vc700t = magin2p2;
           validtimestamp = vc700t - vc600t;
           validtimestamp = validtimestamp / 10000;
           validtimestamp = ~~validtimestamp;
           $("#lastcountuser").text(validtimestamp);
}*/
//$("#lastcountuser").text(validtimy);
//validtimestamp = magin2p2;
//$("#lastcountuser").text(demipunoyletra);
//document.getElementById("lastcountuser").innerHTML = validtimestamp;
if (validcount3 == '10000000') {
$("#congrats").css('display','initial');
//$("#congrats").text(author1);
document.getElementById("congrats").innerHTML = 'CONGRATS TO /u/'+author1+' ON THE TEN MILLION!!!!!';
}
validcountwrong = 0;
if (author1 == authorme) {
validcountnotme = 0;
} else {
validcountnotme = 1;
}
//}
author2 = author1;
} else {
validcount2--;
validcount3 = validcount2;
validcountwrong++;
if (validcountwrong == 10) {
document.getElementById("lastcountdesc").innerHTML = 'Click to reset?';
document.getElementById("lastcountdesc").style.background = '#ef7070';
var wrongtimer = setTimeout( function() {
         document.getElementById("lastcountdesc").innerHTML = 'Last count:';
document.getElementById("lastcountdesc").style.background = '';
      },15000);
}
}
$( "#lastcountdesc" ).hover(function() {
         document.getElementById("lastcountdesc").innerHTML = 'Click to reset';
document.getElementById("lastcountdesc").style.cursor = 'pointer';
       }, function() {
    document.getElementById("lastcountdesc").innerHTML = 'Last count:';
  });
$( "#lastcountdesc" ).click(function() {
validcount1 = '';
validcount2 = '';
validcount3 = '';
fullcount1 = '';
author1 = '';
author2 = '';
});
}
//////////
 
          var regexy = /\/live\/............\/updates\//
          if(window.location.href.indexOf("10itx") > -1) {
var regexy = /\/live\/.............\/updates\//
}
                    var user = $node.find('.body').children().first().next().attr('href');

    var user2 = '';
    var shadowval1 = document.getElementById("shadow1").value;
    var shadowval2 = document.getElementById("shadow2").value;
    var shadowval2p1 = document.getElementById("shadow2p1").value;
     var shadowval3 = document.getElementById("shadow3").value;
    var shadowval4 = document.getElementById("shadow4").value;
     var shadowval4p1 = document.getElementById("shadow4p1").value;
      var shadowval5 = document.getElementById("shadow5").value;
    var shadowval6 = document.getElementById("shadow6").value;
      var shadowval6p1 = document.getElementById("shadow6p1").value;
      var shadowval7 = document.getElementById("shadow7").value;
    var shadowval8 = document.getElementById("shadow8").value;
      var shadowval8p1 = document.getElementById("shadow8p1").value;
      var shadowval9 = document.getElementById("shadow9").value;
    var shadowval10 = document.getElementById("shadow10").value;
      var shadowval10p1 = document.getElementById("shadow10p1").value;
    
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
if (document.getElementById("option420").checked == true) {
restofbody1 = restofbody1.replace(/b/g, '🅱️');
}
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

    var colortest = '#ededed';
        var elcolor = '#000000';
    var randomx = '0';
var darkcheck = 0;
if ($('#lc-body').hasClass('res-nightmode')) {
//colortest = 'black';
elcolor = '#ddd';
darkcheck = 1;
} 

    if (document.getElementById("option8").checked == true) {
darkcheck = 0;
elcolor = '#000000';
}
                if (magin == "#") {
      demipunoyletra = '';
          colortest = '';
    }
    if (document.getElementById("mynameisnotrider").checked == true) {
     if (demipunoyletra <= -500) {
  var colortest = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)';
} else if (-499 <= demipunoyletra && demipunoyletra < 1) {
  var colortest = '#969400';
if (darkcheck == 1) {colortest = '#727200';}
} else if (1 <= demipunoyletra && demipunoyletra < 100) {
  var colortest = '#ef7070';
if (darkcheck == 1) {colortest = '#4d0000';}
} else if (100 <= demipunoyletra && demipunoyletra < 200) {
  var colortest = '#ffaeae';
if (darkcheck == 1) {colortest = '#980000';}
} else if (200 <= demipunoyletra && demipunoyletra < 300) {
  var colortest = '#ffebba';
if (darkcheck == 1) {colortest = '#654700';}
} else if (300 <= demipunoyletra && demipunoyletra < 400) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (400 <= demipunoyletra && demipunoyletra < 500) {
  var colortest = '#a2e8af';
if (darkcheck == 1) {colortest = '#003b0b';}
} else if (500 <= demipunoyletra && demipunoyletra < 600) {
  var colortest = '#adffed';
if (darkcheck == 1) {colortest = '#006b53';}
} else if (600 <= demipunoyletra && demipunoyletra < 700) {
  var colortest = '#add6ff';
if (darkcheck == 1) {colortest = '#004183';}
} else if (700 <= demipunoyletra && demipunoyletra < 800) {
  var colortest = '#bcadff';
if (darkcheck == 1) {colortest = '#14006c';}
} else if (800 <= demipunoyletra && demipunoyletra < 900) {
  var colortest = '#e9adff';
if (darkcheck == 1) {colortest = '#460060';}
} else if (900 <= demipunoyletra && demipunoyletra < 1000) {
  var colortest = '#ffadf8';
if (darkcheck == 1) {colortest = '#6e0064';}
} else {
  var colortest = '#ededed';
if (darkcheck == 1) {colortest = '#2a2a2a';}
}
  } else {
    if (demipunoyletra <= -500) {
  var colortest = 'linear-gradient(to right,red,orange,yellow,green,blue,indigo,violet)';
} else if (-499 <= demipunoyletra && demipunoyletra < 1) {
  var colortest = '#f2ee0e';
if (darkcheck == 1) {colortest = '#727200';}
} else if (1 == demipunoyletra) {
  var colortest = '#008080';
  demipunoyletra = '(1) rschaosid';
  var elcolor = '#ffffff';
  if (user == '/user/rschaosid') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (2 <= demipunoyletra && demipunoyletra < 8) {
  var colortest = '#ef7070';
if (darkcheck == 1) {colortest = '#4d0000';}
} else if (8 == demipunoyletra) {
  var colortest = '#00ff00';
  demipunoyletra = 'gordonpt8';
elcolor = '#000000';
  if (user == '/user/gordonpt8') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (9 <= demipunoyletra && demipunoyletra < 18) {
  var colortest = '#ef7070';
if (darkcheck == 1) {colortest = '#4d0000';}
} else if (18 == demipunoyletra) {
  var colortest = '#0000ff';
  demipunoyletra = 'Kris18';
  var elcolor = '#ffffff';
  if (user == '/user/Kris18') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (19 <= demipunoyletra && demipunoyletra < 36) {
  var colortest = '#ef7070';
if (darkcheck == 1) {colortest = '#4d0000';}
} else if (36 == demipunoyletra) {
  var colortest = '#00BFFF';
  demipunoyletra = 'Iamspeedy36';
elcolor = '#000000';
  if (user == '/user/Iamspeedy36') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (37 == demipunoyletra) {
  var colortest = '#ffff00';
  demipunoyletra = 'amazingpikachu_37';
elcolor = '#000000';
  if (user == '/user/amazingpikachu_38') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (38 <= demipunoyletra && demipunoyletra < 47) {
  var colortest = '#ef7070';
if (darkcheck == 1) {colortest = '#4d0000';}
} else if (47 == demipunoyletra) {
  var colortest = '#191970';
  var elcolor = '#ffffff';
  demipunoyletra = '(47) kdiuro13';
  if (user == '/user/kdiuro13') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (48 <= demipunoyletra && demipunoyletra < 100) {
  var colortest = '#ef7070';
if (darkcheck == 1) {colortest = '#4d0000';}
} else if (100 == demipunoyletra) {
  var colortest = '#2b0090';
  demipunoyletra = '(100) abplows';
    var elcolor = '#ffffff';
  if (user == '/user/abplows') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (101 <= demipunoyletra && demipunoyletra < 123) {
  var colortest = '#ffaeae';
if (darkcheck == 1) {colortest = '#980000';}
} else if (123 == demipunoyletra) {
      randomx = Math.floor((Math.random() * 2) + 1);
    if (randomx == 1) {
  var colortest = '#6495ED';
  demipunoyletra = 'davidjl123';
elcolor = '#000000';
      if (user == '/user/davidjl123') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    } else {
        var colortest = '#0000ff';
  demipunoyletra = 'dominodan123';
      var elcolor = '#ffffff';
      if (user == '/user/dominodan123') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    }
} else if (124 <= demipunoyletra && demipunoyletra < 151) {
  var colortest = '#ffaeae';
if (darkcheck == 1) {colortest = '#980000';}
} else if (151 == demipunoyletra) {
  var colortest = '#FFFF33';
  demipunoyletra = '(151) MewDP';
elcolor = '#000000';
  if (user == '/user/MewDP') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (152 <= demipunoyletra && demipunoyletra < 191) {
  var colortest = '#ffaeae';
if (darkcheck == 1) {colortest = '#980000';}
} else if (191 == demipunoyletra) {
  var colortest = '#8FBC8F';
  demipunoyletra = '(191) PaleRepresentative';
elcolor = '#000000';
  if (user == '/user/PaleRepresentative') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (192 <= demipunoyletra && demipunoyletra < 200) {
  var colortest = '#ffaeae';
if (darkcheck == 1) {colortest = '#980000';}
} else if (200 == demipunoyletra) {
  var colortest = '#800080';
  demipunoyletra = '(200) QuestoGuy';
  var elcolor = '#ffffff';
  if (user == '/user/QuestoGuy') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (201 <= demipunoyletra && demipunoyletra < 212) {
  var colortest = '#ffebba';
if (darkcheck == 1) {colortest = '#654700';}
} else if (212 == demipunoyletra) {
  var colortest = '#CC6600';
  demipunoyletra = 'MrBahr212';
  var elcolor = '#ffffff';
  if (user == '/user/MrBahr12') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (213 <= demipunoyletra && demipunoyletra < 217) {
  var colortest = '#ffebba';
if (darkcheck == 1) {colortest = '#654700';}
} else if (217 == demipunoyletra) {
  var colortest = '#a35252';
  var elcolor = '#ffffff';
  demipunoyletra = '(217) Lonadont';
  if (user == '/user/Lonadont') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (218 <= demipunoyletra && demipunoyletra < 220) {
  var colortest = '#ffebba';
if (darkcheck == 1) {colortest = '#654700';}
} else if (220 == demipunoyletra) {
  var colortest = '#F08080';
  demipunoyletra = '(220) Chalupa_Dad';
elcolor = '#000000';
  if (user == '/user/Chalupa_Dad') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (221 <= demipunoyletra && demipunoyletra < 222) {
  var colortest = '#ffebba';
if (darkcheck == 1) {colortest = '#654700';}
} else if (222 == demipunoyletra) {
  var colortest = '#ffc130';
  demipunoyletra = '(222) treje';
elcolor = '#000000';
  if (user == '/user/treje') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (223 <= demipunoyletra && demipunoyletra < 234) {
  var colortest = '#ffebba';
if (darkcheck == 1) {colortest = '#654700';}
} else if (234 == demipunoyletra) {
  var colortest = '#00FFDD';
  demipunoyletra = '(234) ElliottB1';
elcolor = '#000000';
  if (user == '/user/ElliottB1') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (235 <= demipunoyletra && demipunoyletra < 300) {
  var colortest = '#ffebba';
if (darkcheck == 1) {colortest = '#654700';}
} else if (300 <= demipunoyletra && demipunoyletra < 301) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (301 == demipunoyletra) {
  var colortest = '#ff0000';
  demipunoyletra = 'piyushsharma301';
elcolor = '#000000';
  if (user == '/user/piyushsharma301') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (302 <= demipunoyletra && demipunoyletra < 333) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (333 == demipunoyletra) {
  var colortest = '#8A2BE2';
  var elcolor = '#ffffff';
  demipunoyletra = '(333) Majestic_Bear';
  if (user == '/user/Majestic_Bear') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (334 <= demipunoyletra && demipunoyletra < 360) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (360 == demipunoyletra) {
  var colortest = '#86D8CA';
  demipunoyletra = '(360) NikinCZ';
elcolor = '#000000';
  if (user == '/user/NikinCZ') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (361 <= demipunoyletra && demipunoyletra < 364) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (364 == demipunoyletra) {
  var colortest = '#373267';
  var elcolor = '#ffffff';
  demipunoyletra = '(364) SecretAsianMa';
  if (user == '/user/SecretAsianMa') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (365 <= demipunoyletra && demipunoyletra < 369) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (369 == demipunoyletra) {
  var colortest = '#D9009C';
    var elcolor = '#ffffff';
  demipunoyletra = '(369) Whitney';
  if (user == '/user/TOP_20') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (370 <= demipunoyletra && demipunoyletra < 373) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (373 == demipunoyletra) {
  var colortest = '#066666';
    var elcolor = '#ffffff';
  demipunoyletra = '(373) MaybeNotWrong';
  if (user == '/user/MaybeNotWrong') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (374 <= demipunoyletra && demipunoyletra < 400) {
  var colortest = '#cfffba';
if (darkcheck == 1) {colortest = '#216e00';}
} else if (400 <= demipunoyletra && demipunoyletra < 404) {
  var colortest = '#a2e8af';
if (darkcheck == 1) {colortest = '#003b0b';}
} else if (404 == demipunoyletra) {
  randomx = Math.floor((Math.random() * 2) + 1);
    if (randomx == 1) {
      var colortest = '#ffa500';
  demipunoyletra = '(404) Tranquilsunrise';
elcolor = '#000000';
  if (user == '/user/Tranquilsunrise') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    } else {
            var colortest = '#191970';
      var elcolor = '#ffffff';
  demipunoyletra = '(404) KingCaspianX';
  if (user == '/user/KingCaspianX') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
    }
    } else if (405 <= demipunoyletra && demipunoyletra < 420) {
  var colortest = '#a2e8af';
if (darkcheck == 1) {colortest = '#003b0b';}
} else if (420 == demipunoyletra) {
  var colortest = '#00ff00';
} else if (421 <= demipunoyletra && demipunoyletra < 471) {
  var colortest = '#a2e8af';
if (darkcheck == 1) {colortest = '#003b0b';}
} else if (471 == demipunoyletra) {
  var colortest = '#0000ff';
  demipunoyletra = 'albert471';
  var elcolor = '#ffffff';
  if (user == '/user/albert471') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (472 <= demipunoyletra && demipunoyletra < 500) {
  var colortest = '#a2e8af';
if (darkcheck == 1) {colortest = '#003b0b';}
} else if (500 == demipunoyletra) {
  var colortest = '#f6dec0';
  demipunoyletra = '(500) Rajalaxo';
elcolor = '#000000';
  if (user == '/user/Rajalaxo') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (501 == demipunoyletra) {
  var colortest = '#520063';
  demipunoyletra = '(501) LeinadSpoon';
  var elcolor = '#ffffff';
  if (user == '/user/LeinadSpoon') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (502 <= demipunoyletra && demipunoyletra < 505) {
  var colortest = '#adffed';
if (darkcheck == 1) {colortest = '#006b53';}
} else if (505 == demipunoyletra) {
  var colortest = '#32ff95';
  demipunoyletra = '(505) ItzTaken';
elcolor = '#000000';
  if (user == '/user/ItzTaken') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (506 <= demipunoyletra && demipunoyletra < 555) {
  var colortest = '#adffed';
if (darkcheck == 1) {colortest = '#006b53';}
} else if (555 == demipunoyletra) {
  var colortest = '#00FFFF';
  demipunoyletra = '(555) PrinceCrinkle';
elcolor = '#000000';
  if (user == '/user/PrinceCrinkle') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (556 <= demipunoyletra && demipunoyletra < 559) {
  var colortest = '#adffed';
if (darkcheck == 1) {colortest = '#006b53';}
} else if (559 == demipunoyletra) {
  var colortest = '#B22222';
  demipunoyletra = '(559) iwannaplay5050';
  var elcolor = '#ffffff';
  if (user == '/user/iwannaplay5050') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (560 <= demipunoyletra && demipunoyletra < 600) {
  var colortest = '#adffed';
if (darkcheck == 1) {colortest = '#006b53';}
} else if (600 <= demipunoyletra && demipunoyletra < 615) {
  var colortest = '#add6ff';
if (darkcheck == 1) {colortest = '#004183';}
} else if (615 == demipunoyletra) {
  var colortest = '#71589f';
  demipunoyletra = '(615) parker_cube';
  var elcolor = '#ffffff';
  if (user == '/user/parker_cube') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (616 == demipunoyletra) {
  var colortest = '#890003';
  demipunoyletra = '(616) DemonBurritoCat';
  var elcolor = '#ffffff';
  if (user == '/user/DemonBurritoCat') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (617 <= demipunoyletra && demipunoyletra < 639) {
  var colortest = '#add6ff';
if (darkcheck == 1) {colortest = '#004183';}
} else if (639 == demipunoyletra) {
  var colortest = '#35e0cf';
  demipunoyletra = '(639) MrUnderdawg';
elcolor = '#000000';
  if (user == '/user/MrUnderdawg') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (640 <= demipunoyletra && demipunoyletra < 666) {
  var colortest = '#add6ff';
if (darkcheck == 1) {colortest = '#004183';}
} else if (666 == demipunoyletra) {
  var colortest = '#ff0000';
  if (user == '/user/rideride') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (667 <= demipunoyletra && demipunoyletra < 689) {
  var colortest = '#add6ff';
if (darkcheck == 1) {colortest = '#004183';}
} else if (689 == demipunoyletra) {
  var colortest = '#060647';
  demipunoyletra = 'smarvin6(689)';
  var elcolor = '#ffffff';
  if (user == '/user/smarvin6689') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (690 <= demipunoyletra && demipunoyletra < 700) {
  var colortest = '#add6ff';
if (darkcheck == 1) {colortest = '#004183';}
} else if (700 == demipunoyletra) {
  var colortest = '#ff69ff';
  demipunoyletra = '(700) Noob2137';
elcolor = '#000000';
  if (user == '/user/Noob2137') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (701 <= demipunoyletra && demipunoyletra < 777) {
  var colortest = '#bcadff';
if (darkcheck == 1) {colortest = '#14006c';}
} else if (777 == demipunoyletra) {
  var colortest = '#e66b00';
  demipunoyletra = '(777) artbn';
elcolor = '#000000';
  if (user == '/user/artbn') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (778 <= demipunoyletra && demipunoyletra < 800) {
  var colortest = '#bcadff';
if (darkcheck == 1) {colortest = '#14006c';}
} else if (800 <= demipunoyletra && demipunoyletra < 845) {
  var colortest = '#e9adff';
if (darkcheck == 1) {colortest = '#460060';}
} else if (845 == demipunoyletra) {
  var colortest = '#0d2d89';
  demipunoyletra = '(845) noduorg';
    var elcolor = '#ffffff';
  if (user == '/user/noduorg') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (846 <= demipunoyletra && demipunoyletra < 888) {
  var colortest = '#e9adff';
if (darkcheck == 1) {colortest = '#460060';}
} else if (888 == demipunoyletra) {
  var colortest = '#BC12DD';
  demipunoyletra = '(888) NobodyL0vesMe';
elcolor = '#000000';
  if (user == '/user/NobodyL0vesMe') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (889 <= demipunoyletra && demipunoyletra < 900) {
  var colortest = '#e9adff';
if (darkcheck == 1) {colortest = '#460060';}
} else if (900 <= demipunoyletra && demipunoyletra < 973) {
  var colortest = '#ffadf8';
if (darkcheck == 1) {colortest = '#6e0064';}
} else if (973 == demipunoyletra) {
  var colortest = '#840d0d';
  demipunoyletra = '(973) Smartstocks';
    var elcolor = '#ffffff';
  if (user == '/user/Smartstocks') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (974 <= demipunoyletra && demipunoyletra < 998) {
  var colortest = '#ffadf8';
if (darkcheck == 1) {colortest = '#6e0064';}
} else if (998 == demipunoyletra) {
  var colortest = '#9acd32';
  demipunoyletra = '(998) qwertylool';
elcolor = '#000000';
  if (user == '/user/qwertylool') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (999 <= demipunoyletra && demipunoyletra < 1000) {
  var colortest = '#ffadf8';
if (darkcheck == 1) {colortest = '#6e0064';}
} else if (1000 <= demipunoyletra && demipunoyletra < 1111) {
  var colortest = '#ededed';
if (darkcheck == 1) {colortest = '#2a2a2a';}
} else if (1111 == demipunoyletra) {
  var colortest = '#2cd626';
  demipunoyletra = '(1111) andrewtheredditor';
  var elcolor = '#ffffff';
  if (user == '/user/andrewtheredditor') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (1112 <= demipunoyletra && demipunoyletra < 1234) {
  var colortest = '#ededed';
if (darkcheck == 1) {colortest = '#2a2a2a';}
} else if (1234 == demipunoyletra) {
  var colortest = '#00cc99';
  demipunoyletra = 'randomusername(1234)58';
elcolor = '#000000';
  if (user == '/user/randomusername123458') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (1235 <= demipunoyletra && demipunoyletra < 1521) {
  var colortest = '#ededed';
if (darkcheck == 1) {colortest = '#2a2a2a';}
} else if (1521 == demipunoyletra) {
  var colortest = '#ffaf47';
  demipunoyletra = 'darthvader1521';
elcolor = '#000000';
  if (user == '/user/darthvader1521') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (1522 <= demipunoyletra && demipunoyletra < 1616) {
  var colortest = '#ededed';
if (darkcheck == 1) {colortest = '#2a2a2a';}
} else if (1616 == demipunoyletra) {
  var colortest = '#1affa7';
  demipunoyletra = 'VitaminB1616';
elcolor = '#000000';
  if (user == '/user/VitaminB16') {var user2 = $node.find('.body > .author').text(); $node.find('.body').append("<span id=fakeauthor></span>"); document.getElementById("fakeauthor").innerHTML = user2; $node.find('.body > .author').css('fontSize', '0px'); document.getElementById("fakeauthor").style.cssText = 'font-size: 13px; color: transparent; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text!important;';}
} else if (1617 <= demipunoyletra && demipunoyletra < 69420) {
  var colortest = '#ededed';
if (darkcheck == 1) {colortest = '#2a2a2a';}
} else if (69420 == demipunoyletra) {
  var colortest = '#bb00ff';
  demipunoyletra = 'lol';
  var elcolor = '#ffff00';
} else {
  var colortest = '#ededed';
if (darkcheck == 1) {colortest = '#2a2a2a';}
}
}
      


    
if (document.getElementById("option2").checked == true) {
  if (magin == "#") {
    $node.find('.body').parent().css('background', 'initial');
  } else {
       $node.find('.body').parent().css('background', colortest);
  }
}
    
var testhref = "https://old.reddit.com/live/" + threadid + "/updates/" + magin2; 
         $node.find('.river').css('position', 'absolute');
      $node.find('.body').prepend("<div onclick=window.open('"+testhref+"'); id=river></div>");


document.getElementById("river").innerHTML = demipunoyletra;
     if(window.location.href.indexOf("10itx") > -1) {
var barregexy = /\/live\/.............\/updates\//
    var barmagin = $node.find('.body').prev().attr('href');
           var barmagin2 = barmagin.replace(barregexy, '');
           var barmagin2p1 = barmagin2.substring(0, 8);
    var barmagin2p11 = barmagin2.substring(9, 13);
    var barmagin2p111 = barmagin2.substring(15, 18);
    var barmagin2p1111 = barmagin2p111 + barmagin2p11 + barmagin2p1;

           var barmagin2p2 = parseInt(barmagin2p1111, 16);
var mago = barmagin2p2.toString();
mago = mago.substring(0, 15);
mago = parseInt(mago);
mago = Math.round( mago * 10 ) / 10;
           mago = mago / 10;
mago = Math.round(mago);
var dateTime = new Date( mago );
var dateTime2 = dateTime.toISOString();
var dateTime3 = dateTime2.substring(11, 23);
       document.getElementById("river").innerHTML = dateTime3;
    }
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

    if (window.innerWidth >= 700) {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-135px').css('font-size', '9px').css('margin-top', '4px').css('width','120px').css('text-align','right').css('max-width','120px');
        }
        else {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-10px').css('font-size', '9px').css('margin-top', '-16px').css('width','120px').css('text-align','right').css('max-width','120px');
        }
    
    if ( $('#lc-body[data-DisplayMode="Minimal"] #liveupdate-statusbar').css('display') == 'none') {
  $( 'div#river' ).css('margin-left', '-141px');
}
    if ( $('#lc-body[data-DisplayMode="Super Minimal"] #liveupdate-statusbar').css('display') == 'none') {
  $( 'div#river' ).css('display', 'none');
}
    if (document.getElementById("option3").checked == true) {
    $('#river').delay(60000).hide(500); 
}

        

  if (USER == 'TOP_20') {
    $( 'div#river' ).css('font-size', '11px')
  }

      
  });
  
  $(window).on('load resize', function () {
    if (window.innerWidth >= 700) {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-135px').css('font-size', '9px').css('margin-top', '4px').css('width','120px').css('text-align','right').css('max-width','120px');
        }
        else {
            $( 'div#river' ).css('position', 'absolute').css('margin-left', '-10px').css('font-size', '9px').css('margin-top', '-16px').css('width','120px').css('text-align','right').css('max-width','120px');
        }
    });


}) ();
