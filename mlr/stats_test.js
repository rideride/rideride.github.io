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
	 	$.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/MiLRSeasonsNoS5.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {databruhmilr = data;}
     });
	 
	  function loadDatamilr() {
          var url = "https://docs.google.com/spreadsheet/pub?key=13NuaXN-a4dz9RliO6c0QeYzYgkeq1dDmrDHCkOOuqS8&output=csv&callback=googleDocCallback";
          xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
			  console.log(xmlhttp.readyState);
              if (xmlhttp.readyState == 4) {
                  //document.getElementById("display").innerHTML = xmlhttp.responseText;
                  s5datamilr = xmlhttp.responseText;
                  //document.getElementById("display").innerHTML = s5data;
                  //alert(xmlhttp.responseText);
              }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send(null);
          
      }
	  loadDatamilr();
	  
	 
	  function loadData() {
          var url = "https://docs.google.com/spreadsheet/pub?key=1les2TcfGeh2C_ZYtrGNc_47DH_XMUCSGLSr0wK_MWdk&output=csv&callback=googleDocCallback";
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



//$(document).ready(function() {
window.onload = function everything() {
	var flag = s5data.length;
	var flag2 = s5datamilr.length;
	 if(flag < 1000 && flag2 < 1000) {
       window.setTimeout(everything, 100);
    } else {

	s5data = s5data.split("\n").slice(1).join("\n");
	databruh = databruh + s5data;
	s5data = '';
	s5datamilr = s5datamilr.split("\n").slice(1).join("\n");
	databruhmilr = databruh + s5datamilr;
	s5datamilr = '';


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

var stats = {};
var stats1 = {};
var stats2 = {};
var stats3 = {};
var stats4 = {};
var stats5 = {};
var pstats = {};
var pstats1 = {};
var pstats2 = {};
var pstats3 = {};
var pstats4 = {};
var pstats5 = {};

var bruhbruh = 0;
var bruhbruh2 = 0;

var h_list = {};
var p_list = {};
var line = 0;

for(var key in databruh3) {
	line = line + 1;
	var hitter = databruh3[key]["Hitter"];
	var pitcher = databruh3[key]["Pitcher"];
	var result = databruh3[key]["Result"];
	var run = databruh3[key]["Run"];
	var season = "MLR_"+databruh3[key]["Season"];
	if(!(hitter in players)) {

			if(!(hitter in h_list)) {
//						console.log(hitter);
//		console.log(line);
		var r = Math.random().toString(10).substring(7);
		players[hitter] = r;
		pids[r] = hitter;
	}
			h_list[hitter] = 0;
	}
	if(!(pitcher in players)) {
//console.log(!(pitcher in p_list));

		if(!(pitcher in p_list)) {
//		console.log(pitcher);
//		console.log(line);
		var p = Math.random().toString(10).substring(7);
		players[pitcher] = p;
		pids[p] = pitcher;
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
	if(hitter_id in stats) {
	    bruhbruh = bruhbruh + 1;
    } else {
        stats[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	stats[hitter_id][result] = stats[hitter_id][result] + 1;
	stats[hitter_id]["RBI"] = stats[hitter_id]["RBI"] + parseFloat(rbi);
	stats[hitter_id]["R"] = stats[hitter_id]["R"] + parseFloat(run);
	if((stats[hitter_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		stats[hitter_id]['Games'].push(game);
	}
	
	//season 1
	if(season == "MLR_1") { 
	if(hitter_id in stats1) {
	    bruhbruh = bruhbruh + 1;
    } else {
        stats1[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	stats1[hitter_id][result] = stats1[hitter_id][result] + 1;
	stats1[hitter_id]["RBI"] = stats1[hitter_id]["RBI"] + parseFloat(rbi);
	stats1[hitter_id]["R"] = stats1[hitter_id]["R"] + parseFloat(run);
	if((stats1[hitter_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		stats1[hitter_id]['Games'].push(game);
	}
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
	if(hitter_id in stats2) {
	    bruhbruh = bruhbruh + 1;
    } else {
        stats2[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	stats2[hitter_id][result] = stats2[hitter_id][result] + 1;
	stats2[hitter_id]["RBI"] = stats2[hitter_id]["RBI"] + parseFloat(rbi);
	stats2[hitter_id]["R"] = stats2[hitter_id]["R"] + parseFloat(run);
	if((stats2[hitter_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		stats2[hitter_id]['Games'].push(game);
	}
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
	if(hitter_id in stats3) {
	    bruhbruh = bruhbruh + 1;
    } else {
        stats3[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	stats3[hitter_id][result] = stats3[hitter_id][result] + 1;
	stats3[hitter_id]["RBI"] = stats3[hitter_id]["RBI"] + parseFloat(rbi);
	stats3[hitter_id]["R"] = stats3[hitter_id]["R"] + parseFloat(run);
	if((stats3[hitter_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		stats3[hitter_id]['Games'].push(game);
	}
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
	if(hitter_id in stats4) {
	    bruhbruh = bruhbruh + 1;
    } else {
        stats4[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	stats4[hitter_id][result] = stats4[hitter_id][result] + 1;
	stats4[hitter_id]["RBI"] = stats4[hitter_id]["RBI"] + parseFloat(rbi);
	stats4[hitter_id]["R"] = stats4[hitter_id]["R"] + parseFloat(run);
	if((stats4[hitter_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		stats4[hitter_id]['Games'].push(game);
	}
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
	if(hitter_id in stats5) {
	    bruhbruh = bruhbruh + 1;
    } else {
        stats5[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	stats5[hitter_id][result] = stats5[hitter_id][result] + 1;
	stats5[hitter_id]["RBI"] = stats5[hitter_id]["RBI"] + parseFloat(rbi);
	stats5[hitter_id]["R"] = stats5[hitter_id]["R"] + parseFloat(run);
	if((stats5[hitter_id]['Games']).includes(game)) {
		bruhbruh2 = bruhbruh2 + 1;
	} else {
		stats5[hitter_id]['Games'].push(game);
	}
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


var datamilr3 = $.csv.toObjects(databruhmilr);

var milrstats = {};
var milrstats1 = {};
var milrstats2 = {};
var milrstats3 = {};
var milrstats4 = {};
var milrstats5 = {};
var pmilrstats = {};
var pmilrstats1 = {};
var pmilrstats2 = {};
var pmilrstats3 = {};
var pmilrstats4 = {};
var pmilrstats5 = {};

var milr_bruhbruh = 0;
var milr_bruhbruh2 = 0;

var h_list_milr = {};
var p_list_milr = {};
var line_milr = 0;

for(var key in datamilr3) {
	line_milr = line_milr + 1;
	var hitter = datamilr3[key]["Hitter"];
	var pitcher = datamilr3[key]["Pitcher"];
	var result = datamilr3[key]["Old Result"];
	var run = datamilr3[key]["Run"];
	var season = "MiLR_"+datamilr3[key]["Season"];
	if(!(hitter in players)) {

			if(!(hitter in h_list_milr)) {
						//console.log(hitter);
		//console.log(line_milr);
		var r = Math.random().toString(10).substring(7);
		players[hitter] = r;
		pids[r] = [hitter];
	}
			h_list_milr[hitter] = 0;
	}
	if(!(pitcher in players)) {
//console.log(!(pitcher in p_list_milr));

		if(!(pitcher in p_list_milr)) {
		//console.log(pitcher);
		//console.log(line_milr);
		var p = Math.random().toString(10).substring(7);
		players[pitcher] = p;
		pids[p] = [pitcher];
	}
			p_list_milr[pitcher] = 0;
	}
	


	//console.log(run);
	if(run.length < 1) {
		run = 0;
		//console.log("yeet");
	}
	var rbi = datamilr3[key]["RBI"];
	if(rbi.length < 1) {
		rbi = 0;
		//console.log("yeet2");
	}
	var game = datamilr3[key]["Season"] + '_' + datamilr3[key]["Game ID"]
	try {
		var hitter_id = players[hitter];
	} 
	catch(err) {
		//console.log(hitter)
	}
	try {
		var pitcher_id = players[pitcher];
	} 
	catch(err) {
		//console.log(pitcher)
	}
	if(hitter_id in milrstats) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        milrstats[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	milrstats[hitter_id][result] = milrstats[hitter_id][result] + 1;
	milrstats[hitter_id]["RBI"] = milrstats[hitter_id]["RBI"] + parseFloat(rbi);
	milrstats[hitter_id]["R"] = milrstats[hitter_id]["R"] + parseFloat(run);
	if((milrstats[hitter_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		milrstats[hitter_id]['Games'].push(game);
	}
	
	//season 1
	if(season == "MiLR_1") { 
	if(hitter_id in milrstats1) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        milrstats1[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	milrstats1[hitter_id][result] = milrstats1[hitter_id][result] + 1;
	milrstats1[hitter_id]["RBI"] = milrstats1[hitter_id]["RBI"] + parseFloat(rbi);
	milrstats1[hitter_id]["R"] = milrstats1[hitter_id]["R"] + parseFloat(run);
	if((milrstats1[hitter_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		milrstats1[hitter_id]['Games'].push(game);
	}
	if(pitcher_id in pmilrstats1) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        pmilrstats1[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pmilrstats1[pitcher_id][result] = pmilrstats1[pitcher_id][result] + 1;
	pmilrstats1[pitcher_id]["R"] = pmilrstats1[pitcher_id]["R"] + parseFloat(run);
	if((pmilrstats1[pitcher_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		pmilrstats1[pitcher_id]['Games'].push(game);
	}
	} //season 1 end
	
	//season 2
	if(season == "MiLR_2") { 
	if(hitter_id in milrstats2) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        milrstats2[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	milrstats2[hitter_id][result] = milrstats2[hitter_id][result] + 1;
	milrstats2[hitter_id]["RBI"] = milrstats2[hitter_id]["RBI"] + parseFloat(rbi);
	milrstats2[hitter_id]["R"] = milrstats2[hitter_id]["R"] + parseFloat(run);
	if((milrstats2[hitter_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		milrstats2[hitter_id]['Games'].push(game);
	}
	if(pitcher_id in pmilrstats2) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        pmilrstats2[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pmilrstats2[pitcher_id][result] = pmilrstats2[pitcher_id][result] + 1;
	pmilrstats2[pitcher_id]["R"] = pmilrstats2[pitcher_id]["R"] + parseFloat(run);
	if((pmilrstats2[pitcher_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		pmilrstats2[pitcher_id]['Games'].push(game);
	}
	} //season 2 end
	
	//season 3
	if(season == "MiLR_3") { 
	if(hitter_id in milrstats3) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        milrstats3[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	milrstats3[hitter_id][result] = milrstats3[hitter_id][result] + 1;
	milrstats3[hitter_id]["RBI"] = milrstats3[hitter_id]["RBI"] + parseFloat(rbi);
	milrstats3[hitter_id]["R"] = milrstats3[hitter_id]["R"] + parseFloat(run);
	if((milrstats3[hitter_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		milrstats3[hitter_id]['Games'].push(game);
	}
	if(pitcher_id in pmilrstats3) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        pmilrstats3[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pmilrstats3[pitcher_id][result] = pmilrstats3[pitcher_id][result] + 1;
	pmilrstats3[pitcher_id]["R"] = pmilrstats3[pitcher_id]["R"] + parseFloat(run);
	if((pmilrstats3[pitcher_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		pmilrstats3[pitcher_id]['Games'].push(game);
	}
	} //season 3 end
	
	//season 4
	if(season == "MiLR_4") { 
	if(hitter_id in milrstats4) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        milrstats4[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	milrstats4[hitter_id][result] = milrstats4[hitter_id][result] + 1;
	milrstats4[hitter_id]["RBI"] = milrstats4[hitter_id]["RBI"] + parseFloat(rbi);
	milrstats4[hitter_id]["R"] = milrstats4[hitter_id]["R"] + parseFloat(run);
	if((milrstats4[hitter_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		milrstats4[hitter_id]['Games'].push(game);
	}
	if(pitcher_id in pmilrstats4) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        pmilrstats4[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pmilrstats4[pitcher_id][result] = pmilrstats4[pitcher_id][result] + 1;
	pmilrstats4[pitcher_id]["R"] = pmilrstats4[pitcher_id]["R"] + parseFloat(run);
	if((pmilrstats4[pitcher_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		pmilrstats4[pitcher_id]['Games'].push(game);
	}
	} //season 4 end
	
	//season 5
	if(season == "MiLR_5") { 
	if(hitter_id in milrstats5) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        milrstats5[hitter_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[],'RBI': 0, 'R': 0};
    }
	milrstats5[hitter_id][result] = milrstats5[hitter_id][result] + 1;
	milrstats5[hitter_id]["RBI"] = milrstats5[hitter_id]["RBI"] + parseFloat(rbi);
	milrstats5[hitter_id]["R"] = milrstats5[hitter_id]["R"] + parseFloat(run);
	if((milrstats5[hitter_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		milrstats5[hitter_id]['Games'].push(game);
	}
	if(pitcher_id in pmilrstats5) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        pmilrstats5[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pmilrstats5[pitcher_id][result] = pmilrstats5[pitcher_id][result] + 1;
	pmilrstats5[pitcher_id]["R"] = pmilrstats5[pitcher_id]["R"] + parseFloat(run);
	if((pmilrstats5[pitcher_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		pmilrstats5[pitcher_id]['Games'].push(game);
	}
	} //season 5 end
	
	if(pitcher_id in pmilrstats) {
	    milr_bruhbruh = milr_bruhbruh + 1;
    } else {
        pmilrstats[pitcher_id] = {'HR': 0, '3B': 0, '2B': 0, '1B': 0, 'BB': 0, 'FO': 0, 'K': 0, 'PO': 0, 'RGO': 0, 'LGO': 0, 'DP': 0, 'Sac': 0, 'SB': 0, 'CS': 0, 'IBB': 0, 'Auto BB': 0, 'Auto K': 0, 'Bunt Sac': 0, 'Bunt K': 0, 'Bunt 1B': 0, 'TP': 0, 'Bunt': 0, 'Bunt GO': 0, 'Games':[], 'R': 0};
    }
	pmilrstats[pitcher_id][result] = pmilrstats[pitcher_id][result] + 1;
	pmilrstats[pitcher_id]["R"] = pmilrstats[pitcher_id]["R"] + parseFloat(run);
	if((pmilrstats[pitcher_id]['Games']).includes(game)) {
		milr_bruhbruh2 = milr_bruhbruh2 + 1;
	} else {
		pmilrstats[pitcher_id]['Games'].push(game);
	}
	

}


//console.log(milrstats);
	//console.log(h_list);
	//console.log(p_list);
//	console.log(players);
//	console.log(stats);
//	console.log(stats3);
//	console.log(pstats4);



for(var key in stats) {
	//var hitter_id = players[key];
	var hitter_id = key;
	//if(hitter_id in s1stats && s1stats[hitter_id]["R"].length > 1) {
	if(hitter_id in s1stats && s1stats[key]["R"].length > 0) {
		if(isNaN(stats[hitter_id]["RBI"])) {
			console.log("prebrr");
			console.log(stats[hitter_id]);
		}
		//console.log("Ok it's fine now?");
		//console.log("Hitter: "+pids[key]+", Runs:"+s1stats[hitter_id]["R"]+", RBI: "+s1stats[hitter_id]["RBI"]);
		try {
			stats[hitter_id]["R"] = stats[hitter_id]["R"] + parseFloat(s1stats[hitter_id]["R"]);
			if(isNaN(stats[hitter_id]["R"])) {
				console.log(stats[hitter_id]);
				console.log(stats[hitter_id]["R"], parseFloat(s1stats[hitter_id]["R"]), stats[hitter_id]["R"] + parseFloat(s1stats[hitter_id]["R"]));
				}
		}
		catch(err) {
		//console.log(key)
		}
		//stats[hitter_id]["RBI"] = stats[hitter_id]["RBI"] + parseFloat(s1stats[hitter_id]["RBI"]);
		stats[hitter_id]["RBI"] = stats[hitter_id]["RBI"] + parseFloat(s1stats[hitter_id]["RBI"]);
		if(isNaN(stats[hitter_id]["RBI"])) {
			console.log("brr");
			console.log(key in stats1);
			console.log(key in stats2);
			console.log(key in stats3);
			console.log(key in stats4);
			console.log(key in stats5);
			console.log(stats[hitter_id]["RBI"],parseFloat(s1stats[hitter_id]["RBI"]));
		}
	}
	var games = stats[key]['Games'].length;
	var hits = stats[key]['HR']+stats[key]['3B']+stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B'];
	var tb = 4*stats[key]['HR']+3*stats[key]['3B']+2*stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B'];
	var abs = stats[key]['HR']+stats[key]['3B']+stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B']+stats[key]['FO']+stats[key]['K']+stats[key]['PO']+stats[key]['RGO']+stats[key]['LGO']+stats[key]['DP']+stats[key]['Bunt K']+stats[key]['TP']+stats[key]['Bunt GO'];
	var abs_2 = stats[key]['HR']+stats[key]['3B']+stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B']+stats[key]['FO']+stats[key]['K']+stats[key]['PO']+stats[key]['RGO']+stats[key]['LGO']+stats[key]['DP']+stats[key]['Auto K']+stats[key]['Bunt K']+stats[key]['TP']+stats[key]['Bunt GO'];
	var ob = stats[key]['HR']+stats[key]['3B']+stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B']+stats[key]['BB'];
	var ob_2 = stats[key]['HR']+stats[key]['3B']+stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B']+stats[key]['BB']+stats[key]['IBB']+stats[key]['Auto BB'];
    var pas = stats[key]['HR']+stats[key]['3B']+stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B']+stats[key]['FO']+stats[key]['K']+stats[key]['PO']+stats[key]['RGO']+stats[key]['LGO']+stats[key]['DP']+stats[key]['Bunt K']+stats[key]['TP']+stats[key]['Bunt GO']+stats[key]['BB']+stats[key]['Sac']+stats[key]['Bunt Sac']+stats[key]['Bunt'];
	var pas_2 = stats[key]['HR']+stats[key]['3B']+stats[key]['2B']+stats[key]['1B']+stats[key]['Bunt 1B']+stats[key]['FO']+stats[key]['K']+stats[key]['PO']+stats[key]['RGO']+stats[key]['LGO']+stats[key]['DP']+stats[key]['Auto K']+stats[key]['Bunt K']+stats[key]['TP']+stats[key]['Bunt GO']+stats[key]['BB']+stats[key]['IBB']+stats[key]['Auto BB']+stats[key]['Sac']+stats[key]['Bunt Sac']+stats[key]['Bunt'];
	try {
		stats[key]['AVG'] = parseFloat((hits / abs).toFixed(3));
		if(isNaN(stats[key]['AVG'])) {stats[key]['AVG'] = 0;}
	}
	catch(err) {
		console.log("Aight here's a problem with avg!!!");
		console.log(key);
		stats[key]['AVG'] = 0;
	}
	try {
		stats[key]['OBP'] = parseFloat((ob / pas).toFixed(3));
		if(isNaN(stats[key]['OBP'])) {stats[key]['OBP'] = 0;}
	}
	catch(err) {
		stats[key]['OBP'] = 0;
	}
	try {
		stats[key]['SLG'] = parseFloat((tb / abs).toFixed(3));
		if(isNaN(stats[key]['SLG'])) {stats[key]['SLG'] = 0;}
	}
	catch(err) {
		stats[key]['SLG'] = 0;
	}
	try {
		stats[key]['OPS'] = parseFloat((stats[key]['OBP'] + stats[key]['SLG']).toFixed(3));
		if(isNaN(stats[key]['OPS'])) {stats[key]['OPS'] = 0;}
	}
	catch(err) {
		stats[key]['OPS'] = 0;
	}
	try {
		stats[key]['AVG_2'] = parseFloat((hits / abs_2).toFixed(3));
		if(isNaN(stats[key]['AVG_2'])) {stats[key]['AVG_2'] = 0;}
	}
	catch(err) {
		stats[key]['AVG_2'] = 0;
	}
	try {
		stats[key]['OBP_2'] = parseFloat((ob_2 / pas_2).toFixed(3));
		if(isNaN(stats[key]['OBP_2'])) {stats[key]['OBP_2'] = 0;}
	}
	catch(err) {
		stats[key]['OBP_2'] = 0;
	}
	try {
		stats[key]['SLG_2'] = parseFloat((tb / abs_2).toFixed(3));
		if(isNaN(stats[key]['SLG_2'])) {stats[key]['SLG_2'] = 0;}
	}
	catch(err) {
		stats[key]['SLG_2'] = 0;
	}
	try {
		stats[key]['OPS_2'] = parseFloat((stats[key]['OBP_2'] + stats[key]['SLG_2']).toFixed(3));
		if(isNaN(stats[key]['OPS_2'])) {stats[key]['OPS_2'] = 0;}
	}
	catch(err) {
		stats[key]['OPS_2'] = 0;
	}
	stats[key]['PA'] = pas;
	stats[key]['AB'] = abs;
	stats[key]['PA_2'] = pas_2;
	stats[key]['AB_2'] = abs_2;
	stats[key]['H'] = hits;
	stats[key]['G'] = games;
}


function statsDoer(statsdict, s) {

	for(var key in statsdict) {
	//var hitter_id = players[key];
	var hitter_id = key;
	if(s==1) {
	if(hitter_id in s1stats && s1stats[key]["R"].length > 0) {
		try {
			statsdict[hitter_id]["R"] = statsdict[hitter_id]["R"] + parseFloat(s1stats[hitter_id]["R"]);
		}
		catch(err) {
		//console.log(key)
		}
		//statsdict[hitter_id]["RBI"] = statsdict[hitter_id]["RBI"] + parseFloat(s1stats[hitter_id]["RBI"]);
		statsdict[hitter_id]["RBI"] = parseFloat(s1stats[hitter_id]["RBI"]);
		if(isNaN(statsdict[hitter_id]["RBI"])) {
			console.log(pids[key],statsdict[key])
			console.log(statsdict[hitter_id]["R"],parseFloat(s1stats[hitter_id]["R"]),statsdict[hitter_id]["RBI"],parseFloat(s1stats[hitter_id]["RBI"]));
			}
	}
	}
	var games = statsdict[key]['Games'].length;
	var hits = statsdict[key]['HR']+statsdict[key]['3B']+statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B'];
	var tb = 4*statsdict[key]['HR']+3*statsdict[key]['3B']+2*statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B'];
	var abs = statsdict[key]['HR']+statsdict[key]['3B']+statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B']+statsdict[key]['FO']+statsdict[key]['K']+statsdict[key]['PO']+statsdict[key]['RGO']+statsdict[key]['LGO']+statsdict[key]['DP']+statsdict[key]['Bunt K']+statsdict[key]['TP']+statsdict[key]['Bunt GO'];
	var abs_2 = statsdict[key]['HR']+statsdict[key]['3B']+statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B']+statsdict[key]['FO']+statsdict[key]['K']+statsdict[key]['PO']+statsdict[key]['RGO']+statsdict[key]['LGO']+statsdict[key]['DP']+statsdict[key]['Auto K']+statsdict[key]['Bunt K']+statsdict[key]['TP']+statsdict[key]['Bunt GO'];
	var ob = statsdict[key]['HR']+statsdict[key]['3B']+statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B']+statsdict[key]['BB'];
	var ob_2 = statsdict[key]['HR']+statsdict[key]['3B']+statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B']+statsdict[key]['BB']+statsdict[key]['IBB']+statsdict[key]['Auto BB'];
    var pas = statsdict[key]['HR']+statsdict[key]['3B']+statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B']+statsdict[key]['FO']+statsdict[key]['K']+statsdict[key]['PO']+statsdict[key]['RGO']+statsdict[key]['LGO']+statsdict[key]['DP']+statsdict[key]['Bunt K']+statsdict[key]['TP']+statsdict[key]['Bunt GO']+statsdict[key]['BB']+statsdict[key]['Sac']+statsdict[key]['Bunt Sac']+statsdict[key]['Bunt'];
	var pas_2 = statsdict[key]['HR']+statsdict[key]['3B']+statsdict[key]['2B']+statsdict[key]['1B']+statsdict[key]['Bunt 1B']+statsdict[key]['FO']+statsdict[key]['K']+statsdict[key]['PO']+statsdict[key]['RGO']+statsdict[key]['LGO']+statsdict[key]['DP']+statsdict[key]['Auto K']+statsdict[key]['Bunt K']+statsdict[key]['TP']+statsdict[key]['Bunt GO']+statsdict[key]['BB']+statsdict[key]['IBB']+statsdict[key]['Auto BB']+statsdict[key]['Sac']+statsdict[key]['Bunt Sac']+statsdict[key]['Bunt'];
	try {
		statsdict[key]['AVG'] = parseFloat((hits / abs).toFixed(3));
		if(isNaN(statsdict[key]['AVG'])) {statsdict[key]['AVG'] = 0;}
	}
	catch(err) {
		console.log("Aight here's a problem with avg!!!");
		console.log(key);
		statsdict[key]['AVG'] = 0;
	}
	try {
		statsdict[key]['OBP'] = parseFloat((ob / pas).toFixed(3));
		if(isNaN(statsdict[key]['OBP'])) {statsdict[key]['OBP'] = 0;}
	}
	catch(err) {
		statsdict[key]['OBP'] = 0;
	}
	try {
		statsdict[key]['SLG'] = parseFloat((tb / abs).toFixed(3));
		if(isNaN(statsdict[key]['SLG'])) {statsdict[key]['SLG'] = 0;}
	}
	catch(err) {
		statsdict[key]['SLG'] = 0;
	}
	try {
		statsdict[key]['OPS'] = parseFloat((statsdict[key]['OBP'] + statsdict[key]['SLG']).toFixed(3));
		if(isNaN(statsdict[key]['OPS'])) {statsdict[key]['OPS'] = 0;}
	}
	catch(err) {
		statsdict[key]['OPS'] = 0;
	}
	try {
		statsdict[key]['AVG_2'] = parseFloat((hits / abs_2).toFixed(3));
		if(isNaN(statsdict[key]['AVG_2'])) {statsdict[key]['AVG_2'] = 0;}
	}
	catch(err) {
		statsdict[key]['AVG_2'] = 0;
	}
	try {
		statsdict[key]['OBP_2'] = parseFloat((ob_2 / pas_2).toFixed(3));
		if(isNaN(statsdict[key]['OBP_2'])) {statsdict[key]['OBP_2'] = 0;}
	}
	catch(err) {
		statsdict[key]['OBP_2'] = 0;
	}
	try {
		statsdict[key]['SLG_2'] = parseFloat((tb / abs_2).toFixed(3));
		if(isNaN(statsdict[key]['SLG_2'])) {statsdict[key]['SLG_2'] = 0;}
	}
	catch(err) {
		statsdict[key]['SLG_2'] = 0;
	}
	try {
		statsdict[key]['OPS_2'] = parseFloat((statsdict[key]['OBP_2'] + statsdict[key]['SLG_2']).toFixed(3));
		if(isNaN(statsdict[key]['OPS_2'])) {statsdict[key]['OPS_2'] = 0;}
	}
	catch(err) {
		statsdict[key]['OPS_2'] = 0;
	}
	statsdict[key]['PA'] = pas;
	statsdict[key]['AB'] = abs;
	statsdict[key]['PA_2'] = pas_2;
	statsdict[key]['AB_2'] = abs_2;
	statsdict[key]['H'] = hits;
	statsdict[key]['G'] = games;
}

} //statsDoer end

statsDoer(stats1,1);
statsDoer(stats2,2);
statsDoer(stats3,3);
statsDoer(stats4,4);
statsDoer(stats5,5);


statsDoer(milrstats3,6);
statsDoer(milrstats4,7);
statsDoer(milrstats5,8);
statsDoer(milrstats,9);

//console.log(stats1);
//console.log(stats2);
//console.log(stats3);
//console.log(stats4);
//console.log(stats5);


//console.log(stats3[342]["AVG"]);


for(var key in pstats) {
	//var pitcher_id = players[key];
	//console.log(key);
	if(key in s1stats && s1stats[key]["R_P"].length > 0) {
		///console.log("yeeeeeet");
		//console.log(pids[key]);
		//console.log(pstats[key]["R"],parseFloat(s1stats[key]["R_P"]),pstats[key]["R"]+parseFloat(s1stats[key]["R_P"]));
		if(isNaN(pstats[key]["R"])) {
			console.log("prebrr"+pids[key]);
			console.log(pstats[key]);
			console.log(s1stats[key]["R_P"]);
		}
		//console.log("Ok it's fine now?");
		//console.log("Hitter: "+pids[key]+", Runs:"+s1stats[hitter_id]["R"]+", RBI: "+s1stats[hitter_id]["RBI"]);
		try {
			pstats[key]["R"] = pstats[key]["R"] + parseFloat(s1stats[key]["R_P"]);
			//console.log(pstats[key]["R"]);
			if(isNaN(pstats[key]["R"])) {
				console.log(pstats[key]);
				console.log(pstats[key]["R"], parseFloat(s1stats[key]["R_P"]), pstats[key]["R"] + parseFloat(s1stats[key]["R_P"]));
				}
		}
		catch(err) {
		//console.log(key)
		}
	}
	var games = pstats[key]['Games'].length;
	var hits = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B'];
	var tb = 4*pstats[key]['HR']+3*pstats[key]['3B']+2*pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B'];
	var abs = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['FO']+pstats[key]['K']+pstats[key]['PO']+pstats[key]['RGO']+pstats[key]['LGO']+pstats[key]['DP']+pstats[key]['Bunt K']+pstats[key]['TP']+pstats[key]['Bunt GO'];
	var ob = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['BB'];
    var pas = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['FO']+pstats[key]['K']+pstats[key]['PO']+pstats[key]['RGO']+pstats[key]['LGO']+pstats[key]['DP']+pstats[key]['Bunt K']+pstats[key]['TP']+pstats[key]['Bunt GO']+pstats[key]['BB']+pstats[key]['Sac']+pstats[key]['Bunt Sac']+pstats[key]['Bunt'];
	var bf = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['FO']+pstats[key]['K']+pstats[key]['PO']+pstats[key]['RGO']+pstats[key]['LGO']+pstats[key]['DP']+pstats[key]['Bunt K']+pstats[key]['TP']+pstats[key]['Bunt GO']+pstats[key]['BB']+pstats[key]['Sac']+pstats[key]['Bunt Sac']+pstats[key]['Bunt'];
	var abs_2 = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['FO']+pstats[key]['K']+pstats[key]['PO']+pstats[key]['RGO']+pstats[key]['LGO']+pstats[key]['DP']+pstats[key]['Auto K']+pstats[key]['Bunt K']+pstats[key]['TP']+pstats[key]['Bunt GO'];
	var ob_2 = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['BB']+pstats[key]['IBB']+pstats[key]['Auto BB'];
    var pas_2 = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['FO']+pstats[key]['K']+pstats[key]['PO']+pstats[key]['RGO']+pstats[key]['LGO']+pstats[key]['DP']+pstats[key]['Auto K']+pstats[key]['Bunt K']+pstats[key]['TP']+pstats[key]['Bunt GO']+pstats[key]['BB']+pstats[key]['IBB']+pstats[key]['Auto BB']+pstats[key]['Sac']+pstats[key]['Bunt Sac']+pstats[key]['Bunt'];
	var bf_2 = pstats[key]['HR']+pstats[key]['3B']+pstats[key]['2B']+pstats[key]['1B']+pstats[key]['Bunt 1B']+pstats[key]['FO']+pstats[key]['K']+pstats[key]['PO']+pstats[key]['RGO']+pstats[key]['LGO']+pstats[key]['DP']+pstats[key]['Bunt K']+pstats[key]['TP']+pstats[key]['Bunt GO']+pstats[key]['BB']+pstats[key]['Sac']+pstats[key]['Bunt Sac']+pstats[key]['Bunt']+pstats[key]['Auto BB']+pstats[key]['Auto K']+pstats[key]['IBB'];
	var outs = pstats[key]['FO']+pstats[key]['K']+pstats[key]['PO']+pstats[key]['RGO']+pstats[key]['LGO']+2*pstats[key]['DP']+pstats[key]['Auto K']+pstats[key]['Bunt K']+3*pstats[key]['TP']+pstats[key]['Bunt GO']+pstats[key]['Sac']+pstats[key]['Bunt Sac']+pstats[key]['Bunt']+pstats[key]['CS'];
	try {
		pstats[key]['AVG'] = parseFloat((hits / abs).toFixed(3));
		if(isNaN(pstats[key]['AVG'])) {pstats[key]['AVG'] = 0;}
	}
	catch(err) {
		pstats[key]['AVG'] = 0;
	}
	try {
		pstats[key]['OBP'] = parseFloat((ob / pas).toFixed(3));
		if(isNaN(pstats[key]['OBP'])) {pstats[key]['OBP'] = 0;}
	}
	catch(err) {
		pstats[key]['OBP'] = 0;
	}
	try {
		pstats[key]['SLG'] = parseFloat((tb / abs).toFixed(3));
		if(isNaN(pstats[key]['SLG'])) {pstats[key]['SLG'] = 0;}
	}
	catch(err) {
		pstats[key]['SLG'] = 0;
	}
	try {
		pstats[key]['OPS'] = parseFloat((pstats[key]['OBP'] + pstats[key]['SLG']).toFixed(3));
		if(isNaN(pstats[key]['OPS'])) {pstats[key]['OPS'] = 0;}
	}
	catch(err) {
		pstats[key]['OPS'] = 0;
	}
	try {
		pstats[key]['AVG_2'] = parseFloat((hits / abs_2).toFixed(3));
		if(isNaN(pstats[key]['AVG_2'])) {pstats[key]['AVG_2'] = 0;}
	}
	catch(err) {
		pstats[key]['AVG_2'] = 0;
	}
	try {
		pstats[key]['OBP_2'] = parseFloat((ob_2 / pas_2).toFixed(3));
		if(isNaN(pstats[key]['OBP_2'])) {pstats[key]['OBP_2'] = 0;}
	}
	catch(err) {
		pstats[key]['OBP_2'] = 0;
	}
	try {
		pstats[key]['SLG_2'] = parseFloat((tb / abs_2).toFixed(3));
		if(isNaN(pstats[key]['SLG_2'])) {pstats[key]['SLG_2'] = 0;}
	}
	catch(err) {
		pstats[key]['SLG_2'] = 0;
	}
	try {
		pstats[key]['OPS_2'] = parseFloat((pstats[key]['OBP_2'] + pstats[key]['SLG_2']).toFixed(3));
		if(isNaN(pstats[key]['OPS_2'])) {pstats[key]['OPS_2'] = 0;}
	}
	catch(err) {
		pstats[key]['OPS_2'] = 0;
	}
	pstats[key]['PA'] = pas;
	pstats[key]['AB'] = abs;
	pstats[key]['PA_2'] = pas_2;
	pstats[key]['AB_2'] = abs_2;
	pstats[key]['H'] = hits;
	pstats[key]['G'] = games;
	pstats[key]['BF'] = bf;
	pstats[key]['BF_2'] = bf_2;
	pstats[key]['IP'] = (outs/3).toFixed(3);
	pstats[key]['WHIP'] = ((hits + pstats[key]['BB']) / (outs/3)).toFixed(2);
	pstats[key]['WHIP_2'] = ((hits + pstats[key]['BB'] + pstats[key]['IBB'] + pstats[key]['Auto BB']) / (outs/3)).toFixed(2);
	pstats[key]['K6'] = ((6*pstats[key]['K']) / (outs/3)).toFixed(3);
	pstats[key]['ERA'] = ((6*pstats[key]['R']) / (outs/3)).toFixed(2);
	if(outs==0 && pstats[key]['R'] == 0) {
		pstats[key]['ERA'] = (0).toFixed(2);
	}
	if(outs==0 && pstats[key]['K'] == 0) {
		pstats[key]['K6'] = (0).toFixed(2);
	}
	if(outs==0 && (hits + pstats[key]['BB']) == 0) {
		pstats[key]['WHIP'] = (0).toFixed(2);
	}
	if(outs==0 && (hits + pstats[key]['BB']) > 0) {
		pstats[key]['WHIP'] = Infinity;
	}
	if(outs==0 && (hits + pstats[key]['BB'] + pstats[key]['IBB'] + pstats[key]['Auto BB']) == 0) {
		pstats[key]['WHIP_2'] = (0).toFixed(2);
	}
	if(outs==0 && (hits + pstats[key]['BB'] + pstats[key]['IBB'] + pstats[key]['Auto BB']) > 0) {
		pstats[key]['WHIP_2'] = Infinity;
	}
}


function pstatsDoer(pstatsdict, s) {
	
for(var key in pstatsdict) {
	//var pitcher_id = players[key];
	//console.log(key);
	if(s==1) {
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


pstatsDoer(pstats1,1);
pstatsDoer(pstats2,2);
pstatsDoer(pstats3,3);
pstatsDoer(pstats4,4);
pstatsDoer(pstats5,5);


pstatsDoer(pmilrstats3,6);
pstatsDoer(pmilrstats4,7);
pstatsDoer(pmilrstats5,8);
pstatsDoer(pmilrstats,9);

console.log(milrstats);
//console.log(pmilrstats5);



function statsPut(season, stname, staty) {
	
	if(!(parseFloat(players[staty]) in stname)) {
		$("#s"+season).css("display","none")
		//console.log(season);
	} else {
		//console.log("yes?");
	$("#s"+season).css("display","table-row")
	$('#calc-s'+season+'-bt-hr').text(stname[parseFloat(players[staty])]["HR"])
	$('#calc-s'+season+'-bt-3b').text(stname[parseFloat(players[staty])]["3B"])
	$('#calc-s'+season+'-bt-2b').text(stname[parseFloat(players[staty])]["2B"])
	$('#calc-s'+season+'-bt-1b').text(stname[parseFloat(players[staty])]["1B"])
	$('#calc-s'+season+'-bt-bb').text(stname[parseFloat(players[staty])]["BB"])
	$('#calc-s'+season+'-bt-avg').text(stname[parseFloat(players[staty])]["AVG"])
	$('#calc-s'+season+'-bt-obp').text(stname[parseFloat(players[staty])]["OBP"])
	$('#calc-s'+season+'-bt-slg').text(stname[parseFloat(players[staty])]["SLG"])
	$('#calc-s'+season+'-bt-sb').text(stname[parseFloat(players[staty])]["SB"])
	$('#calc-s'+season+'-bt-ops').text(stname[parseFloat(players[staty])]["OPS"])
	$('#calc-s'+season+'-bt-pa').text(stname[parseFloat(players[staty])]["PA"])
	$('#calc-s'+season+'-bt-ab').text(stname[parseFloat(players[staty])]["AB"])
	$('#calc-s'+season+'-bt-h').text(stname[parseFloat(players[staty])]["H"])
	$('#calc-s'+season+'-bt-g').text(stname[parseFloat(players[staty])]["G"])
	$('#calc-s'+season+'-bt-auto-k').text(stname[parseFloat(players[staty])]["Auto K"])
	$('#calc-s'+season+'-bt-k').text(stname[parseFloat(players[staty])]["K"])
	$('#calc-s'+season+'-bt-r').text(stname[parseFloat(players[staty])]["R"])
	$('#calc-s'+season+'-bt-rbi').text(stname[parseFloat(players[staty])]["RBI"])
	//console.log("done");
	}
}

function pstatsPut(season, stname, staty) {
	
	if(!(parseFloat(players[staty]) in stname)) {
		$("#ps"+season).css("display","none")
		//console.log(season);
	} else {
		//console.log("yes?");
	$("#ps"+season).css("display","table-row")
	$('#calc-s'+season+'-pt-hr').text(stname[parseFloat(players[staty])]["HR"]);
	$('#calc-s'+season+'-pt-3b').text(stname[parseFloat(players[staty])]["3B"]);
	$('#calc-s'+season+'-pt-2b').text(stname[parseFloat(players[staty])]["2B"]);
	$('#calc-s'+season+'-pt-1b').text(stname[parseFloat(players[staty])]["1B"]);
	$('#calc-s'+season+'-pt-bb').text(stname[parseFloat(players[staty])]["BB"]);
	$('#calc-s'+season+'-pt-era').text(stname[parseFloat(players[staty])]["ERA"]);
	$('#calc-s'+season+'-pt-ip').text(stname[parseFloat(players[staty])]["IP"]);
	$('#calc-s'+season+'-pt-whip').text(stname[parseFloat(players[staty])]["WHIP"]);
	$('#calc-s'+season+'-pt-k6').text(stname[parseFloat(players[staty])]["K6"]);
	$('#calc-s'+season+'-pt-sb').text(stname[parseFloat(players[staty])]["SB"]);
	$('#calc-s'+season+'-pt-bf').text(stname[parseFloat(players[staty])]["BF"]);
	$('#calc-s'+season+'-pt-ab').text(stname[parseFloat(players[staty])]["AB"]);
	$('#calc-s'+season+'-pt-h').text(stname[parseFloat(players[staty])]["H"]);
	$('#calc-s'+season+'-pt-g').text(stname[parseFloat(players[staty])]["G"]);
	$('#calc-s'+season+'-pt-auto-k').text(stname[parseFloat(players[staty])]["Auto K"]);
	$('#calc-s'+season+'-pt-k').text(stname[parseFloat(players[staty])]["K"]);
	$('#calc-s'+season+'-pt-er').text(stname[parseFloat(players[staty])]["R"]);
	//console.log("done");
	}
}

function getKeysWithHighestValue(o, n){
  var keys = Object.keys(o);
  keys.sort(function(a,b){
    return o[b]["PA"] - o[a]["PA"];
  })
  //console.log(keys);
  return keys.slice(0,n);
}

//console.log(stats);
//console.log(getKeysWithHighestValue(stats, 4));



$('#calc-submit').click(function() {
	staty = document.getElementById('calc-pitcher').value;
	$("#calc-pitcher-info").text("Player ID: "+players[staty]);
	
	if(!(parseFloat(players[staty]) in stats)) {
		$(".div-batting").css("display","none")
	} else {
	$(".div-batting").css("display","block")
	$('#calc-out-bt-hr').text(stats[parseFloat(players[staty])]["HR"])
	$('#calc-out-bt-3b').text(stats[parseFloat(players[staty])]["3B"])
	$('#calc-out-bt-2b').text(stats[parseFloat(players[staty])]["2B"])
	$('#calc-out-bt-1b').text(stats[parseFloat(players[staty])]["1B"])
	$('#calc-out-bt-bb').text(stats[parseFloat(players[staty])]["BB"])
	$('#calc-out-bt-avg').text(stats[parseFloat(players[staty])]["AVG"])
	$('#calc-out-bt-obp').text(stats[parseFloat(players[staty])]["OBP"])
	$('#calc-out-bt-slg').text(stats[parseFloat(players[staty])]["SLG"])
	$('#calc-out-bt-sb').text(stats[parseFloat(players[staty])]["SB"])
	$('#calc-out-bt-ops').text(stats[parseFloat(players[staty])]["OPS"])
	$('#calc-out-bt-pa').text(stats[parseFloat(players[staty])]["PA"])
	$('#calc-out-bt-ab').text(stats[parseFloat(players[staty])]["AB"])
	$('#calc-out-bt-h').text(stats[parseFloat(players[staty])]["H"])
	$('#calc-out-bt-g').text(stats[parseFloat(players[staty])]["G"])
	$('#calc-out-bt-auto-k').text(stats[parseFloat(players[staty])]["Auto K"])
	$('#calc-out-bt-k').text(stats[parseFloat(players[staty])]["K"])
	$('#calc-out-bt-r').text(stats[parseFloat(players[staty])]["R"])
	$('#calc-out-bt-rbi').text(stats[parseFloat(players[staty])]["RBI"])
	}
	
	statsPut(1, stats1, staty);
	statsPut(2, stats2, staty);
	statsPut(3, stats3, staty);
	statsPut(4, stats4, staty);
	statsPut(5, stats5, staty);
	statsPut("m3", milrstats3, staty);
	statsPut("m4", milrstats4, staty);
	statsPut("m5", milrstats5, staty);
	statsPut("m0", milrstats, staty);
	pstatsPut(1, pstats1, staty);
	pstatsPut(2, pstats2, staty);
	pstatsPut(3, pstats3, staty);
	pstatsPut(4, pstats4, staty);
	pstatsPut(5, pstats5, staty);
	pstatsPut("m3", pmilrstats3, staty);
	pstatsPut("m4", pmilrstats4, staty);
	pstatsPut("m5", pmilrstats5, staty);
	pstatsPut("m0", pmilrstats, staty);
	
	
	if(!(parseFloat(players[staty]) in pmilrstats)) {
		$(".div-pitching-milr").css("display","none")
	} else {
	$(".div-pitching-milr").css("display","block")
	}
	if(!(parseFloat(players[staty]) in milrstats)) {
		$(".div-batting-milr").css("display","none")
	} else {
	$(".div-batting-milr").css("display","block")
	}
	
//	console.log(pstats4[parseFloat(players["River Ride"])]["IP"]);
	
	if(!(parseFloat(players[staty]) in pstats)) {
		$(".div-pitching").css("display","none")
	} else {
	$(".div-pitching").css("display","block")
	$('#calc-out-pt-hr').text(pstats[parseFloat(players[staty])]["HR"])
	$('#calc-out-pt-3b').text(pstats[parseFloat(players[staty])]["3B"])
	$('#calc-out-pt-2b').text(pstats[parseFloat(players[staty])]["2B"])
	$('#calc-out-pt-1b').text(pstats[parseFloat(players[staty])]["1B"])
	$('#calc-out-pt-bb').text(pstats[parseFloat(players[staty])]["BB"])
	$('#calc-out-pt-era').text(pstats[parseFloat(players[staty])]["ERA"])
	$('#calc-out-pt-whip').text(pstats[parseFloat(players[staty])]["WHIP"])
	$('#calc-out-pt-k6').text(pstats[parseFloat(players[staty])]["K6"])
	$('#calc-out-pt-sb').text(pstats[parseFloat(players[staty])]["SB"])
	$('#calc-out-pt-bf').text(pstats[parseFloat(players[staty])]["BF"])
	$('#calc-out-pt-ab').text(pstats[parseFloat(players[staty])]["AB"])
	$('#calc-out-pt-h').text(pstats[parseFloat(players[staty])]["H"])
	$('#calc-out-pt-g').text(pstats[parseFloat(players[staty])]["G"])
	$('#calc-out-pt-auto-k').text(pstats[parseFloat(players[staty])]["Auto K"])
	$('#calc-out-pt-k').text(pstats[parseFloat(players[staty])]["K"])
	$('#calc-out-pt-er').text(pstats[parseFloat(players[staty])]["R"])
	$('#calc-out-pt-ip').text(pstats[parseFloat(players[staty])]["IP"])
	}
	$("#stats-name").text("Stats for "+staty);
	
});

//console.log(stats[342]);
//console.log(pstats[342]);
//console.log(pstats[1705]);
//console.log(bruhbruh2);

$("#loading").css('display','none');
//document.getElementById("bblol").removeAttribute("style");

//}, 1000); //setTimeout

	} //else end

} //everything() end








