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

data2 = '';
databruh = ''
datas1 = '';
var datamilr1 = '';
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
	 $.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/MiLRSeasons.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {datamilr1 = data;}
     });
	 
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
window.onload = function() {

setTimeout(function(){
	
	setTimeout(function(){
		if(s5data.length < 1000) {
			$("#loading").text("Loading probably failed, try refreshing");
		}
	},5000);
	
	//console.log(databruh);
	s5data = s5data.split("\n").slice(1).join("\n");
	//console.log(s5data);
	databruh = databruh + s5data;
	//console.log(databruh);

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
						//console.log(hitter);
		//console.log(line);
		var r = Math.random().toString(10).substring(7);
		players[hitter] = r;
		pids[r] = [hitter];
	}
			h_list[hitter] = 0;
	}
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
	try {
		if(run.length < 1) {
		run = 0;
		//console.log("yeet");
	}
	}
	catch(err) {
		console.log(line);
	}
	var rbi = databruh3[key]["RBI"];
	if(rbi.length < 1) {
		rbi = 0;
		//console.log("yeet2");
	}
	var game = databruh3[key]["Season"] + '_' + databruh3[key]["Game ID"]
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


var datamilr3 = $.csv.toObjects(datamilr1)

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


//console.log(milrstats3);
//console.log(stats1[241]);
//console.log(stats1[457]);
//console.log(h_list_milr);
//console.log(p_list_milr);
	//console.log(h_list);
	//console.log(p_list);
	//console.log(players);
	//console.log(stats);
	//console.log(stats3);
//	console.log(pstats4);



for(var key in stats) {
	//var hitter_id = players[key];
	var hitter_id = key;
	if(hitter_id in s1stats && s1stats[key]["R"].length > 0) {
		try {
			stats[hitter_id]["R"] = stats[hitter_id]["R"] + parseFloat(s1stats[hitter_id]["R"]);
		}
		catch(err) {
		//console.log(key)
		}
		stats[hitter_id]["RBI"] = stats[hitter_id]["RBI"] + parseFloat(s1stats[hitter_id]["RBI"]);
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

//console.log(milrstats3);
//console.log(stats1);
//console.log(stats2);
//console.log(stats3);
//console.log(stats4);
//console.log(stats5);

//console.log(s1stats);
//console.log(stats[113]["RBI"]);
//console.log(stats1[113]["RBI"]);
//console.log(stats2[113]["RBI"]);
//console.log(stats3[113]["RBI"]);
//console.log(stats4[113]["RBI"]);
//console.log(stats5[113]["RBI"]);

//console.log(stats3[342]["AVG"]);


for(var key in pstats) {
	//var pitcher_id = players[key];
	//console.log(key);
	if(key in s1stats && s1stats[key]["R_P"].length > 0) {
		//console.log(pids[pitcher_id]);
		pstats[key]["R"] = pstats[key]["R"] + parseFloat(s1stats[key]["R_P"]);
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

//console.log(pmilrstats5);

//console.log(pstats3);
//console.log(pstats4);



var otherplayerslist = [];

/*
function getKeysWithHighestValue(o, n){
  var keys = Object.keys(o);
  keys.sort(function(a,b){
    return o[b]["H"] - o[a]["H"];
  })
 // console.log(keys);
 // console.log(keys[10]);
  var counter = 0;
  while(o[keys[9]]["H"] == o[keys[10+counter]]["H"]) {
	  counter = counter + 1;
  }
//  console.log(counter);
  otherplayerslist.push(counter);
  hh = keys.slice(0,n+counter);
  //console.log(o[keys[10]]["H"]);
  //return keys.slice(0,n);
  return hh;
}
*/

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
	if(isNaN(parseFloat(minresult))) {
		minresult = 0;
	}
	if(isNaN(parseFloat(maxresult))) {
		maxresult = 5000;
	}
	//console.log(highlow,stat_request,minresult,maxresult,result_request);
	if(highlow == "highest") {
s0_h = getKeysWithHighestValueMinPAs(stats, 10, stat_request, result_request, minresult, maxresult);
s1_h = getKeysWithHighestValueMinPAs(stats1, 10, stat_request, result_request, minresult, maxresult);
s2_h = getKeysWithHighestValueMinPAs(stats2, 10, stat_request, result_request, minresult, maxresult);
s3_h = getKeysWithHighestValueMinPAs(stats3, 10, stat_request, result_request, minresult, maxresult);
s4_h = getKeysWithHighestValueMinPAs(stats4, 10, stat_request, result_request, minresult, maxresult);
s5_h = getKeysWithHighestValueMinPAs(stats5, 10, stat_request, result_request, minresult, maxresult);
addRows(s0_h, "s0-hits-lb", stat_request, stats);
addRows(s1_h, "s1-hits-lb", stat_request, stats1);
addRows(s2_h, "s2-hits-lb", stat_request, stats2);
addRows(s3_h, "s3-hits-lb", stat_request, stats3);
addRows(s4_h, "s4-hits-lb", stat_request, stats4);
addRows(s5_h, "s5-hits-lb", stat_request, stats5);	
	}
		if(highlow == "lowest") {
s0_h = getKeysWithLowestValueMinPAs(stats, 10, stat_request, result_request, minresult, maxresult);
s1_h = getKeysWithLowestValueMinPAs(stats1, 10, stat_request, result_request, minresult, maxresult);
s2_h = getKeysWithLowestValueMinPAs(stats2, 10, stat_request, result_request, minresult, maxresult);
s3_h = getKeysWithLowestValueMinPAs(stats3, 10, stat_request, result_request, minresult, maxresult);
s4_h = getKeysWithLowestValueMinPAs(stats4, 10, stat_request, result_request, minresult, maxresult);
s5_h = getKeysWithLowestValueMinPAs(stats5, 10, stat_request, result_request, minresult, maxresult);
//console.log(s3_h);
addRows(s0_h, "s0-hits-lb", stat_request, stats);
addRows(s1_h, "s1-hits-lb", stat_request, stats1);
addRows(s2_h, "s2-hits-lb", stat_request, stats2);
addRows(s3_h, "s3-hits-lb", stat_request, stats3);
addRows(s4_h, "s4-hits-lb", stat_request, stats4);
addRows(s5_h, "s5-hits-lb", stat_request, stats5);	
	}
	
});



$("#loading").css('display','none');
//document.getElementById("bblol").removeAttribute("style");

}, 1000); //setTimeout

}; //documentReady








