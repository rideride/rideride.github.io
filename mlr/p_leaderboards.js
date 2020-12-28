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
var databruh = ''
var datas1 = '';
var s5data = '';
window.googleDocCallback = function () { return true; };
    $.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/PlayerList.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {data2 = data;}
     });
	$.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/AllSeasonsExceptS5.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {databruh = data;}
     });
	$.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/roster_s1_no_reddit_special_p.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {datas1 = data;}
     });
	 
	  function loadData() {
          var url = "https://docs.google.com/spreadsheets/d/1les2TcfGeh2C_ZYtrGNc_47DH_XMUCSGLSr0wK_MWdk/gviz/tq?tqx=out:csv&sheet=Sheet4";
          xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
			  console.log(xmlhttp.readyState);
              if (xmlhttp.readyState == 4) {
                  //document.getElementById("display").innerHTML = xmlhttp.responseText;
                  s5data = xmlhttp.responseText;
                  //document.getElementById("display").innerHTML = s5data;
                  //alert(xmlhttp.responseText);
              }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send(null);
          
      }
	  loadData();
	  function loadS5Players() {
          var url = "https://docs.google.com/spreadsheets/d/1les2TcfGeh2C_ZYtrGNc_47DH_XMUCSGLSr0wK_MWdk/gviz/tq?tqx=out:csv&sheet=Sheet3";
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
	var flag = s5data.length;
	 if(flag < 200) {
       window.setTimeout(everything, 100);
    } else {

//setTimeout(function(){
	
//	setTimeout(function(){
//		if(databruh.length < 1000) {
//			$("#h3").text("Season 5 loading failed. Try refreshing?");
//		}
//	},5000);
	
s5data = s5data.split("\n").slice(1);
	for(line in s5data) {
		s5data[line] = s5data[line] + ',6,';
	}
	s5data = s5data.join("\n");
	databruh = databruh + "\n" + s5data;
	s5data = '';


//console.log("Ready");

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
	    if(pids[player_id] != player_name) {
			pids[player_id].unshift(player_name);
		}
    } else {
        pids[player_id] = [player_name];
    }
    //console.log(value);
}


var datas13 = $.csv.toObjects(datas1)

var s1stats = {}

for(var key in datas13) {
	var player_name = datas13[key]["Player Name (Username)"];
	var player_id = players[player_name];
	s1stats[player_id] = {"G":datas13[key]["G"], "PA": datas13[key]["PA"], "H": datas13[key]["H"], "H_P": datas13[key]["H_P"], "AB": datas13[key]["AB"], "2B": datas13[key]["2B"], "3B": datas13[key]["3B"], "HR": datas13[key]["HR"], "R": datas13[key]["R"], "RBI": datas13[key]["RBI"], "SO": datas13[key]["SO"], "BB": datas13[key]["BB"], "SB": datas13[key]["SB"], "IP_P": datas13[key]["IP_P"], "R_P": datas13[key]["R_P"], "ER_P": datas13[key]["ER_P"], "HR_P": datas13[key]["HR_P"], "BB_P": datas13[key]["BB_P"], "K_P": datas13[key]["K_P"], "ERA_P": datas13[key]["ERA_P"], "WHIP_P": datas13[key]["WHIP_P"], "K6_P": datas13[key]["K/6_P"]}
    //console.log(value);
}

//console.log(s1stats);

var databruh3 = $.csv.toObjects(databruh)
databruh = '';

var pstats = {};
var pstats1 = {};
var pstats2 = {};
var pstats3 = {};
var pstats4 = {};
var pstats5 = {};
var pstats6 = {};

var bruhbruh = 0;
var bruhbruh2 = 0;

var p_list = {};
var line = 0;

for(var key in databruh3) {
	line = line + 1;
	var hitter = databruh3[key]["Hitter"];
	var pitcher = databruh3[key]["Pitcher"];
	var result = databruh3[key]["Result"];
	var run = databruh3[key]["Run"];
	var season = "MLR_"+databruh3[key]["Season"];
	if(!(pitcher in players)) {
//console.log(!(pitcher in p_list));

		if(!(pitcher in p_list)) {
		//console.log(pitcher);
		//console.log(line);
		var p = Math.random().toString(10).substring(7);
		players[pitcher] = p;
		pids[p] = [pitcher];
	}
			p_list[pitcher] = 0;
	}
	


	//console.log(run);
	if(run.length < 1) {
		run = 0;
		//console.log("yeet");
	}
	var rbi = databruh3[key]["RBI"];
	if(rbi.length < 1) {
		rbi = 0;
		//console.log("yeet2");
	}
	if(isNaN(run)) {
		run = 0;
		//console.log("yeet");
	}
	//var rbi = databruh3[key]["RBI"];
	if(isNaN(rbi)) {
		rbi = 0;
		//console.log("yeet2");
	}
	var game = databruh3[key]["Season"] + '_' + databruh3[key]["Game ID"]
	try {
		var hitter_id = players[hitter];
	} 
	catch(err) {
		console.log(hitter)
	}
	try {
		var pitcher_id = players[pitcher];
	} 
	catch(err) {
		console.log(pitcher)
	}
	
	//season 1
	if(season == "MLR_1") { 
	if(pitcher_id in pstats1) {
	    bruhbruh = bruhbruh + 1;
    } else {
        pstats1[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pstats1[pitcher_id][result] = pstats1[pitcher_id][result] + 1;
	pstats1[pitcher_id]["R"] = pstats1[pitcher_id]["R"] + parseFloat(run);
	if((pstats1[pitcher_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		pstats1[pitcher_id]['Games'].push(game);
	}
	} //season 1 end
	
	//season 2
	if(season == "MLR_2") { 
	if(pitcher_id in pstats2) {
	    bruhbruh = bruhbruh + 1;
    } else {
        pstats2[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pstats2[pitcher_id][result] = pstats2[pitcher_id][result] + 1;
	pstats2[pitcher_id]["R"] = pstats2[pitcher_id]["R"] + parseFloat(run);
	if((pstats2[pitcher_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		pstats2[pitcher_id]['Games'].push(game);
	}
	} //season 2 end
	
	//season 3
	if(season == "MLR_3") { 
	if(pitcher_id in pstats3) {
	    bruhbruh = bruhbruh + 1;
    } else {
        pstats3[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pstats3[pitcher_id][result] = pstats3[pitcher_id][result] + 1;
	pstats3[pitcher_id]["R"] = pstats3[pitcher_id]["R"] + parseFloat(run);
	if((pstats3[pitcher_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		pstats3[pitcher_id]['Games'].push(game);
	}
	} //season 3 end
	
	//season 4
	if(season == "MLR_4") { 
	if(pitcher_id in pstats4) {
	    bruhbruh = bruhbruh + 1;
    } else {
        pstats4[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pstats4[pitcher_id][result] = pstats4[pitcher_id][result] + 1;
	pstats4[pitcher_id]["R"] = pstats4[pitcher_id]["R"] + parseFloat(run);
	if((pstats4[pitcher_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		pstats4[pitcher_id]['Games'].push(game);
	}
	} //season 4 end
	
	//season 5
	if(season == "MLR_5") { 
	if(pitcher_id in pstats5) {
	    bruhbruh = bruhbruh + 1;
    } else {
        pstats5[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pstats5[pitcher_id][result] = pstats5[pitcher_id][result] + 1;
	pstats5[pitcher_id]["R"] = pstats5[pitcher_id]["R"] + parseFloat(run);
	if((pstats5[pitcher_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		pstats5[pitcher_id]['Games'].push(game);
	}
	} //season 5 end
	
	//season 6
	if(season == "MLR_6") { 
	if(pitcher_id in pstats6) {
	    bruhbruh = bruhbruh + 1;
    } else {
        pstats6[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pstats6[pitcher_id][result] = pstats6[pitcher_id][result] + 1;
	pstats6[pitcher_id]["R"] = pstats6[pitcher_id]["R"] + parseFloat(run);
	if((pstats6[pitcher_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		pstats6[pitcher_id]['Games'].push(game);
	}
	} //season 6 end
	
	if(pitcher_id in pstats) {
	    bruhbruh = bruhbruh + 1;
    } else {
        pstats[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pstats[pitcher_id][result] = pstats[pitcher_id][result] + 1;
	pstats[pitcher_id]["R"] = pstats[pitcher_id]["R"] + parseFloat(run);
	if((pstats[pitcher_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		pstats[pitcher_id]['Games'].push(game);
	}
	

}




function pstatsDoer(pstatsdict, s) {
	
for(var key in pstatsdict) {
	//var pitcher_id = players[key];
	//console.log(key);
	if(s==1 || s==0) {
	if(key in s1stats && s1stats[key]["R_P"].length > 0) {
		//console.log(pids[pitcher_id]);
		pstatsdict[key]["R"] = pstatsdict[key]["R"] + parseFloat(s1stats[key]["R_P"]);
	}
	}
	var games = pstatsdict[key]['Games'].length;
	var hits = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B'];
	var tb = 4*pstatsdict[key]['HR']+3*pstatsdict[key]['3B']+2*pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B'];
	var abs = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['FO']+pstatsdict[key]['K']+pstatsdict[key]['PO']+pstatsdict[key]['RGO']+pstatsdict[key]['LGO']+pstatsdict[key]['DP']+pstatsdict[key]['Bunt K']+pstatsdict[key]['TP']+pstatsdict[key]['Bunt GO'];
	var ob = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['BB'];
    var pas = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['FO']+pstatsdict[key]['K']+pstatsdict[key]['PO']+pstatsdict[key]['RGO']+pstatsdict[key]['LGO']+pstatsdict[key]['DP']+pstatsdict[key]['Bunt K']+pstatsdict[key]['TP']+pstatsdict[key]['Bunt GO']+pstatsdict[key]['BB']+pstatsdict[key]['Sac']+pstatsdict[key]['Bunt Sac']+pstatsdict[key]['Bunt'];
	var bf = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['FO']+pstatsdict[key]['K']+pstatsdict[key]['PO']+pstatsdict[key]['RGO']+pstatsdict[key]['LGO']+pstatsdict[key]['DP']+pstatsdict[key]['Bunt K']+pstatsdict[key]['TP']+pstatsdict[key]['Bunt GO']+pstatsdict[key]['BB']+pstatsdict[key]['Sac']+pstatsdict[key]['Bunt Sac']+pstatsdict[key]['Bunt'];
	var abs_2 = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['FO']+pstatsdict[key]['K']+pstatsdict[key]['PO']+pstatsdict[key]['RGO']+pstatsdict[key]['LGO']+pstatsdict[key]['DP']+pstatsdict[key]['Auto K']+pstatsdict[key]['Bunt K']+pstatsdict[key]['TP']+pstatsdict[key]['Bunt GO'];
	var ob_2 = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['BB']+pstatsdict[key]['IBB']+pstatsdict[key]['Auto BB'];
    var pas_2 = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['FO']+pstatsdict[key]['K']+pstatsdict[key]['PO']+pstatsdict[key]['RGO']+pstatsdict[key]['LGO']+pstatsdict[key]['DP']+pstatsdict[key]['Auto K']+pstatsdict[key]['Bunt K']+pstatsdict[key]['TP']+pstatsdict[key]['Bunt GO']+pstatsdict[key]['BB']+pstatsdict[key]['IBB']+pstatsdict[key]['Auto BB']+pstatsdict[key]['Sac']+pstatsdict[key]['Bunt Sac']+pstatsdict[key]['Bunt'];
	var bf_2 = pstatsdict[key]['HR']+pstatsdict[key]['3B']+pstatsdict[key]['2B']+pstatsdict[key]['1B']+pstatsdict[key]['Bunt 1B']+pstatsdict[key]['FO']+pstatsdict[key]['K']+pstatsdict[key]['PO']+pstatsdict[key]['RGO']+pstatsdict[key]['LGO']+pstatsdict[key]['DP']+pstatsdict[key]['Bunt K']+pstatsdict[key]['TP']+pstatsdict[key]['Bunt GO']+pstatsdict[key]['BB']+pstatsdict[key]['Sac']+pstatsdict[key]['Bunt Sac']+pstatsdict[key]['Bunt']+pstatsdict[key]['Auto BB']+pstatsdict[key]['Auto K']+pstatsdict[key]['IBB'];
	var outs = pstatsdict[key]['FO']+pstatsdict[key]['K']+pstatsdict[key]['PO']+pstatsdict[key]['RGO']+pstatsdict[key]['LGO']+2*pstatsdict[key]['DP']+pstatsdict[key]['Auto K']+pstatsdict[key]['Bunt K']+3*pstatsdict[key]['TP']+pstatsdict[key]['Bunt GO']+pstatsdict[key]['Sac']+pstatsdict[key]['Bunt Sac']+pstatsdict[key]['Bunt']+pstatsdict[key]['CS'];
	try {
		pstatsdict[key]['AVG'] = parseFloat((hits / abs).toFixed(3));
		if(isNaN(pstatsdict[key]['AVG'])) {pstatsdict[key]['AVG'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['AVG'] = 0;
	}
	try {
		pstatsdict[key]['OBP'] = parseFloat((ob / pas).toFixed(3));
		if(isNaN(pstatsdict[key]['OBP'])) {pstatsdict[key]['OBP'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['OBP'] = 0;
	}
	try {
		pstatsdict[key]['SLG'] = parseFloat((tb / abs).toFixed(3));
		if(isNaN(pstatsdict[key]['SLG'])) {pstatsdict[key]['SLG'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['SLG'] = 0;
	}
	try {
		pstatsdict[key]['OPS'] = parseFloat((pstatsdict[key]['OBP'] + pstatsdict[key]['SLG']).toFixed(3));
		if(isNaN(pstatsdict[key]['OPS'])) {pstatsdict[key]['OPS'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['OPS'] = 0;
	}
	try {
		pstatsdict[key]['AVG_2'] = parseFloat((hits / abs_2).toFixed(3));
		if(isNaN(pstatsdict[key]['AVG_2'])) {pstatsdict[key]['AVG_2'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['AVG_2'] = 0;
	}
	try {
		pstatsdict[key]['OBP_2'] = parseFloat((ob_2 / pas_2).toFixed(3));
		if(isNaN(pstatsdict[key]['OBP_2'])) {pstatsdict[key]['OBP_2'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['OBP_2'] = 0;
	}
	try {
		pstatsdict[key]['SLG_2'] = parseFloat((tb / abs_2).toFixed(3));
		if(isNaN(pstatsdict[key]['SLG_2'])) {pstatsdict[key]['SLG_2'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['SLG_2'] = 0;
	}
	try {
		pstatsdict[key]['OPS_2'] = parseFloat((pstatsdict[key]['OBP_2'] + pstatsdict[key]['SLG_2']).toFixed(3));
		if(isNaN(pstatsdict[key]['OPS_2'])) {pstatsdict[key]['OPS_2'] = 0;}
	}
	catch(err) {
		pstatsdict[key]['OPS_2'] = 0;
	}
	pstatsdict[key]['PA'] = pas;
	pstatsdict[key]['AB'] = abs;
	pstatsdict[key]['PA_2'] = pas_2;
	pstatsdict[key]['AB_2'] = abs_2;
	pstatsdict[key]['H'] = hits;
	pstatsdict[key]['G'] = games;
	pstatsdict[key]['BF'] = bf;
	pstatsdict[key]['BF_2'] = bf_2;
	pstatsdict[key]['IP'] = (outs/3).toFixed(3);
	pstatsdict[key]['WHIP'] = ((hits + pstatsdict[key]['BB']) / (outs/3)).toFixed(2);
	pstatsdict[key]['WHIP_2'] = ((hits + pstatsdict[key]['BB'] + pstatsdict[key]['IBB'] + pstatsdict[key]['Auto BB']) / (outs/3)).toFixed(2);
	pstatsdict[key]['K6'] = ((6*pstatsdict[key]['K']) / (outs/3)).toFixed(3);
	pstatsdict[key]['ERA'] = ((6*pstatsdict[key]['R']) / (outs/3)).toFixed(2);
	if(outs==0 && pstatsdict[key]['R'] == 0) {
		pstatsdict[key]['ERA'] = (0).toFixed(2);
	}
	if(outs==0 && pstatsdict[key]['K'] == 0) {
		pstatsdict[key]['K6'] = (0).toFixed(2);
	}
	if(outs==0 && (hits + pstatsdict[key]['BB']) == 0) {
		pstatsdict[key]['WHIP'] = (0).toFixed(2);
	}
	if(outs==0 && (hits + pstatsdict[key]['BB']) > 0) {
		pstatsdict[key]['WHIP'] = Infinity;
	}
	if(outs==0 && (hits + pstatsdict[key]['BB'] + pstatsdict[key]['IBB'] + pstatsdict[key]['Auto BB']) == 0) {
		pstatsdict[key]['WHIP_2'] = (0).toFixed(2);
	}
	if(outs==0 && (hits + pstatsdict[key]['BB'] + pstatsdict[key]['IBB'] + pstatsdict[key]['Auto BB']) > 0) {
		pstatsdict[key]['WHIP_2'] = Infinity;
	}
}
} //end pstatsDoer

pstatsDoer(pstats,0);
pstatsDoer(pstats1,1);
pstatsDoer(pstats2,2);
pstatsDoer(pstats3,3);
pstatsDoer(pstats4,4);
pstatsDoer(pstats5,5);
pstatsDoer(pstats6,6);




var otherplayerslist = [];


function getKeysWithHighestValueMinPAs(o, n, stat, result_qualifier, min_result, max_result){
  var keys = Object.keys(o);
  var keys2 = [];
  
  var errorcheck = 0;
  keys.sort(function(a,b){
	  if(isNaN(o[a][stat])) {
		  console.log(a);
		  console.log(pids[a][0]);
		  console.log(stat);
		  errorcheck = errorcheck + 1;
	  }
    return o[b][stat] - o[a][stat];
  })
  if(errorcheck > 0) {
	  $("h3").text("["+errorcheck+"] An error has occured somewhere... If you see this please ping me pull#0053 and if possible, screenshot your search parameters and the console (Ctrl+Shift+J)");
	  $("h3").css("background","red");
  }
  
//  keys.sort(function(a,b) {return (o[a][stat] > o[b][stat]) ? 1 : ((o[b][stat] > o[a][stat]) ? -1 : 0);} );
  for(var key in keys) {
	  if(parseFloat(o[keys[key]][result_qualifier]) >= min_result && parseFloat(o[keys[key]][result_qualifier]) <= max_result) {
		  keys2.push([keys[key]][0]);
	  } 
  }
  keys2.sort(function(a,b){
    return o[b][stat] - o[a][stat];
  })
 // console.log(keys);
 // console.log(keys2);
 // console.log(keys[10]);
  var counter = 0;
  try {
	  while(o[keys2[n-1]][stat] == o[keys2[n+counter]][stat]) {
	  counter = counter + 1;
      }
  }
  catch(err) {
	  //counter = 0;
  }
//  console.log(counter);
  otherplayerslist.push(counter);
  hh = keys2.slice(0,n+counter);
  //console.log(o[keys[10]]["H"]);
  //return keys.slice(0,n);
  return hh;
}

function getKeysWithLowestValueMinPAs(o, n, stat, result_qualifier, min_result, max_result){
  var keys = Object.keys(o);
  var keys2 = [];
  var errorcheck = 0;
  keys.sort(function(a,b){
	  if(isNaN(o[a][stat])) {
		  console.log(a);
		  console.log(pids[a][0]);
		  console.log(stat);
		  errorcheck = errorcheck + 1;
	  }
    return o[a][stat] - o[b][stat];
  })
  if(errorcheck > 0) {
	  $("h3").text("["+errorcheck+"] An error has occured somewhere... If you see this please ping me pull#0053 and if possible, screenshot your search parameters and the console (Ctrl+Shift+J)");
	  $("h3").css("background","red");
  }
  for(var key in keys) {
	  if(parseFloat(o[keys[key]][result_qualifier]) >= min_result && parseFloat(o[keys[key]][result_qualifier]) <= max_result) {
		  keys2.push([keys[key]][0]);
	  } 
  }
    keys2.sort(function(a,b){
    return o[a][stat] - o[b][stat];
  })
 // console.log(keys);
  //console.log(keys2);
 // console.log(keys[10]);
  var counter = 0;
/*
  try {
	  console.log(keys2[n-1]);
  }
  catch(err) {
	  console.log("err");
	  console.log(keys2[keys2.length-1]);
  }
  try {
	  console.log(o[keys2[n-1]][stat]);
  }
  catch(err) {
	  console.log("err");
	  console.log(o[keys2[keys2.length-1]][stat]);
  }
  try {
	  console.log(o[keys2[n]][stat]);
  }
  catch(err) {
	  console.log("err");
	  console.log(o[keys2[keys2.length-1]][stat]);
  }
  try {
	  console.log(o[keys2[n-1]][stat]);
  }
  catch(err) {
	  console.log("err");
	  console.log(o[keys2[keys2.length-1]][stat]);
  }
  */
  //console.log(o[keys2[keys2.length-1]][stat]);
  //console.log(keys2[keys2.length+0]);
  //console.log(o[keys2[keys2.length+0]][stat]);

  try {
	  //while(o[keys2[keys2.length-1]][stat] == o[keys2[keys2.length+counter]][stat]) {
    while(o[keys2[n-1]][stat] == o[keys2[n+counter]][stat]) {
	  counter = counter + 1;
	  //console.log(counter)
      }
  }
  catch(err) {
	  //counter = 0;
  }
//  console.log(counter);
  otherplayerslist.push(counter);
  hh = keys2.slice(0,n+counter);
  //console.log(o[keys[10]]["H"]);
  //return keys.slice(0,n);
  return hh;
}


//var bruhhh = getKeysWithHighestValueMinPAs(stats, 10, "AVG", "PA", 165, 9999);

//console.log(bruhhh);

//console.log(stats);

/*
s0_h = getKeysWithHighestValue(stats, 10);
s1_h = getKeysWithHighestValue(stats1, 10);
s2_h = getKeysWithHighestValue(stats2, 10);
s3_h = getKeysWithHighestValue(stats3, 10);
s4_h = getKeysWithHighestValue(stats4, 10);
s5_h = getKeysWithHighestValue(stats5, 10);

*/

//console.log(otherplayerslist);
//console.log(s1_h[0]);

var otherplayerscount = -1;

function addRows(listy, table_id, stat, season) {
	  otherplayerscount = otherplayerscount + 1;
  var table = document.getElementById(table_id);
  var row_count = 0;
  //console.log(listy);
for(var id in listy) {
	row_count = row_count + 1;
	//console.log(listy[id]);
    var row = table.insertRow(-1);
	row.classList.add("added");
	if(row_count > 10) {
		row.classList.add(table_id[1]+stat.replace(/\s/g, '')+"collapsy");
		row.classList.add("collapsed");
	}
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = pids[listy[id]][0];
    try {
		cell2.innerHTML = season[listy[id]][stat];
	}
	catch(err) {
	console.log(listy);
	console.log(listy[id]);
	}

}

	if(otherplayerslist[otherplayerscount] == 1) {
	var rowy = table.insertRow(-1);
	rowy.classList.add("added");
	rowy.classList.add(table_id[1]+stat.replace(/\s/g, '')+"toggle");
	$( "."+table_id[1]+stat.replace(/\s/g, '')+"toggle" ).click(function() {
		$( "."+table_id[1]+stat.replace(/\s/g, '')+"collapsy" ).toggle();
    });
    var celly1 = rowy.insertCell(0);
    var celly2 = rowy.insertCell(1);
    celly1.innerHTML = "[show/hide] 1 other player";
	celly2.innerHTML = season[listy[9]][stat];
	} else if(otherplayerslist[otherplayerscount] > 1) {
	var rowy = table.insertRow(-1);
	rowy.classList.add("added");
	rowy.classList.add(table_id[1]+stat.replace(/\s/g, '')+"toggle");
	$( "."+table_id[1]+stat.replace(/\s/g, '')+"toggle" ).click(function() {
		$( "."+table_id[1]+stat.replace(/\s/g, '')+"collapsy" ).toggle();
    });
    var celly1 = rowy.insertCell(0);
    var celly2 = rowy.insertCell(1);
    celly1.innerHTML = "[show/hide] "+otherplayerslist[otherplayerscount]+" other players";
	celly2.innerHTML = season[listy[9]][stat];
	} 

}

/*
addRows(s0_h, "s0-hits-lb", "H", stats);
addRows(s1_h, "s1-hits-lb", "H", stats1);
addRows(s2_h, "s2-hits-lb", "H", stats2);
addRows(s3_h, "s3-hits-lb", "H", stats3);
addRows(s4_h, "s4-hits-lb", "H", stats4);
addRows(s5_h, "s5-hits-lb", "H", stats5);	

console.log(stats[342]);
*/
//console.log(pstats[342]);
//console.log(pstats[1705]);
//console.log(bruhbruh2);


$('#calc-submit').click(function() {
	//console.log(stats[720]);
	document.querySelectorAll('.added').forEach(e => e.remove());
	var highlow = document.getElementById("highlow").value;
	var stat_request = document.getElementById("stat").value;
	var minresult = document.getElementById("minresult").value;
	var maxresult = document.getElementById("maxresult").value;
	var result_request = document.getElementById("result").value;
	$("#statt0").text(stat_request);
	$("#statt1").text(stat_request);
	$("#statt2").text(stat_request);
	$("#statt3").text(stat_request);
	$("#statt4").text(stat_request);
	$("#statt5").text(stat_request);
	$("#statt6").text(stat_request);
	if(isNaN(parseFloat(minresult))) {
		minresult = 0;
	}
	if(isNaN(parseFloat(maxresult))) {
		maxresult = 5000;
	}
	//console.log(highlow,stat_request,minresult,maxresult,result_request);
	if(highlow == "highest") {
s0_h = getKeysWithHighestValueMinPAs(pstats, 10, stat_request, result_request, minresult, maxresult);
s1_h = getKeysWithHighestValueMinPAs(pstats1, 10, stat_request, result_request, minresult, maxresult);
s2_h = getKeysWithHighestValueMinPAs(pstats2, 10, stat_request, result_request, minresult, maxresult);
s3_h = getKeysWithHighestValueMinPAs(pstats3, 10, stat_request, result_request, minresult, maxresult);
s4_h = getKeysWithHighestValueMinPAs(pstats4, 10, stat_request, result_request, minresult, maxresult);
s5_h = getKeysWithHighestValueMinPAs(pstats5, 10, stat_request, result_request, minresult, maxresult);
s6_h = getKeysWithHighestValueMinPAs(pstats6, 10, stat_request, result_request, minresult, maxresult);
addRows(s0_h, "s0-hits-lb", stat_request, pstats);
addRows(s1_h, "s1-hits-lb", stat_request, pstats1);
addRows(s2_h, "s2-hits-lb", stat_request, pstats2);
addRows(s3_h, "s3-hits-lb", stat_request, pstats3);
addRows(s4_h, "s4-hits-lb", stat_request, pstats4);
addRows(s5_h, "s5-hits-lb", stat_request, pstats5);	
addRows(s6_h, "s6-hits-lb", stat_request, pstats6);	
	}
		if(highlow == "lowest") {
s0_h = getKeysWithLowestValueMinPAs(pstats, 10, stat_request, result_request, minresult, maxresult);
s1_h = getKeysWithLowestValueMinPAs(pstats1, 10, stat_request, result_request, minresult, maxresult);
s2_h = getKeysWithLowestValueMinPAs(pstats2, 10, stat_request, result_request, minresult, maxresult);
s3_h = getKeysWithLowestValueMinPAs(pstats3, 10, stat_request, result_request, minresult, maxresult);
s4_h = getKeysWithLowestValueMinPAs(pstats4, 10, stat_request, result_request, minresult, maxresult);
s5_h = getKeysWithLowestValueMinPAs(pstats5, 10, stat_request, result_request, minresult, maxresult);
s6_h = getKeysWithLowestValueMinPAs(pstats6, 10, stat_request, result_request, minresult, maxresult);
//console.log(s3_h);
addRows(s0_h, "s0-hits-lb", stat_request, pstats);
addRows(s1_h, "s1-hits-lb", stat_request, pstats1);
addRows(s2_h, "s2-hits-lb", stat_request, pstats2);
addRows(s3_h, "s3-hits-lb", stat_request, pstats3);
addRows(s4_h, "s4-hits-lb", stat_request, pstats4);
addRows(s5_h, "s5-hits-lb", stat_request, pstats5);	
addRows(s6_h, "s6-hits-lb", stat_request, pstats6);	
	}
	
});



$("#loading").css('display','none');
//document.getElementById("bblol").removeAttribute("style");

//}, 1000); //setTimeout (unnecessary now???)
} //Flag check else end

} //everything() end








