/*
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/PlayerList.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
     console.log(lines);
}
*/

var data2 = '';
var databruh = '';
var databruhmilr = '';
var datas1 = '';
var s5data = '';
var s5datamilr = '';
var s5players = '';
window.googleDocCallback = function () { return true; };
    $.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/PlayerList.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {data2 = data;}
     });

	  function loadS5Players() {
          var url = "https://docs.google.com/spreadsheets/d/1les2TcfGeh2C_ZYtrGNc_47DH_XMUCSGLSr0wK_MWdk/gviz/tq?tqx=out:csv&sheet=Sheet2";
          xmlhttp2 = new XMLHttpRequest();
          xmlhttp2.onreadystatechange = function () {
			  console.log(xmlhttp2.readyState);
              if (xmlhttp2.readyState == 4) {
                  //document.getElementById("display").innerHTML = xmlhttp.responseText;
                  s5players = xmlhttp2.responseText;
                  //document.getElementById("display").innerHTML = s5data;
                  //alert(xmlhttp.responseText);
              }
          };
          xmlhttp2.open("GET", url, true);
          xmlhttp2.send(null);
          
      }
	  loadS5Players();



//$(document).ready(function() {
window.onload = function everything() {
	var flag = data2.length;
	var flag2 = s5players.length;
	 if(!(flag > 1000 && flag2 > 1000)) {
       window.setTimeout(everything, 100);
    } else {

var data3 = $.csv.toObjects(data2)

//console.log(data3);

players = {}
pids = {}

for(var key in data3) {
    var value = data3[key];
	var player_name = data3[key]["Name"];
	var player_id = data3[key]["Player ID"];
	players[player_name] = player_id;
	if(pids[player_id] && pids[player_id].length > 0) {
	    pids[player_id].push(player_name);
    } else {
        pids[player_id] = [player_name];
    }
    //console.log(value);
}

var s5playercsv = $.csv.toObjects(s5players);
for(var key in s5playercsv) {
    var value = s5playercsv[key];
	var player_name = s5playercsv[key]["Name"];
	var player_id = s5playercsv[key]["Player ID"];
	if(!(player_name in players)) {
		players[player_name] = player_id;
	}
	if(pids[player_id] && pids[player_id].length > 0) {
	    if(pids[player_id][0] != player_name) {
			pids[player_id].unshift(player_name);
		}
    } else {
        pids[player_id] = [player_name];
    }
    //console.log(value);
}

for (var playa in pids){
	for (var i in pids[playa]) {
		if(playa==4) {
			console.log(pids[playa][i])
		}
		if(playa==541) {
			console.log(pids[playa][i])
		}
    var opt = document.createElement('option');
    opt.value = pids[playa][i];
    opt.innerHTML = pids[playa][i];
    document.getElementById('playas').appendChild(opt);
	}
}



$('#calc-submit').click(function() {
	staty = document.getElementById('calc-pitcher').value;
	try {
		var hlfkmlkmflkweflfwkeml = players[staty].length;
	$("#pid").text(players[staty]);
	$("#names").text(pids[players[staty]]);
	$("#namenew").text(pids[players[staty]][0]);
	} 
	catch(err) {
		$("#pid").text("Unknown name.");
	$("#names").text("Unknown name.");
	$("#namenew").text("Unknown name.");
	}
	
});

$('#calc-submit-2').click(function() {
	staty = document.getElementById('calc-id').value;
	$("#pid").text(staty);
	try{
		var hlfkmlkmflkweflfwkeml = pids[staty].length;
	$("#names").text(pids[staty]);
	$("#namenew").text(pids[staty][0]);
	} 
	catch(err) {
		$("#names").text("Unknown ID.");
	$("#namenew").text("Unknown ID.");
	} 
	
});


$("#loading").css('display','none');


	} //else end

} //everything() end








