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
        url: "https://rideride.github.io/mlr/MiLRSeasonsNoS5.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {databruh = data;}
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
	  
	 
//$(document).ready(function() {
window.onload = function everything() {
	var flag = s5datamilr.length;
	 if(flag < 1000) {
       window.setTimeout(everything, 100);
    } else {

//setTimeout(function(){
	
//	setTimeout(function(){
//		if(databruh.length < 1000) {
//			$("#h3").text("Season 5 loading failed. Try refreshing?");
//		}
//	},5000);
	
	//console.log(databruh);
	s5datamilr = s5datamilr.split("\n").slice(1).join("\n");
	//console.log(s5data);
	databruh = databruh + s5datamilr;
	s5datamilr = '';
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

var datamilr3 = $.csv.toObjects(databruh)

var pmilrstats = {};
var pmilrstats3 = {};
var pmilrstats4 = {};
var pmilrstats5 = {};

var milr_bruhbruh = 0;
var milr_bruhbruh2 = 0;

var p_list_milr = {};
var line_milr = 0;

for(var key in datamilr3) {
	line_milr = line_milr + 1;
	var hitter = datamilr3[key]["Hitter"];
	var pitcher = datamilr3[key]["Pitcher"];
	var result = datamilr3[key]["Old Result"];
	var run = datamilr3[key]["Run"];
	var season = "MiLR_"+datamilr3[key]["Season"];
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
	
	
	
	//season 3
	if(season == "MiLR_3") { 
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





function pstatsDoer(pstatsdict, s) {
	
for(var key in pstatsdict) {
	//var pitcher_id = players[key];
	//console.log(key);
	if(s==1) {
	if(key in s1stats) {
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



pstatsDoer(pmilrstats3,6);
pstatsDoer(pmilrstats4,7);
pstatsDoer(pmilrstats5,8);
pstatsDoer(pmilrstats,9);




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
s0_h = getKeysWithHighestValueMinPAs(pmilrstats, 10, stat_request, result_request, minresult, maxresult);
s3_h = getKeysWithHighestValueMinPAs(pmilrstats3, 10, stat_request, result_request, minresult, maxresult);
s4_h = getKeysWithHighestValueMinPAs(pmilrstats4, 10, stat_request, result_request, minresult, maxresult);
s5_h = getKeysWithHighestValueMinPAs(pmilrstats5, 10, stat_request, result_request, minresult, maxresult);
addRows(s0_h, "s0-hits-lb", stat_request, pmilrstats);
addRows(s3_h, "s3-hits-lb", stat_request, pmilrstats3);
addRows(s4_h, "s4-hits-lb", stat_request, pmilrstats4);
addRows(s5_h, "s5-hits-lb", stat_request, pmilrstats5);	
	}
		if(highlow == "lowest") {
s0_h = getKeysWithLowestValueMinPAs(pmilrstats, 10, stat_request, result_request, minresult, maxresult);
s3_h = getKeysWithLowestValueMinPAs(pmilrstats3, 10, stat_request, result_request, minresult, maxresult);
s4_h = getKeysWithLowestValueMinPAs(pmilrstats4, 10, stat_request, result_request, minresult, maxresult);
s5_h = getKeysWithLowestValueMinPAs(pmilrstats5, 10, stat_request, result_request, minresult, maxresult);
//console.log(s3_h);
addRows(s0_h, "s0-hits-lb", stat_request, pmilrstats);
addRows(s3_h, "s3-hits-lb", stat_request, pmilrstats3);
addRows(s4_h, "s4-hits-lb", stat_request, pmilrstats4);
addRows(s5_h, "s5-hits-lb", stat_request, pmilrstats5);	
	}
	
});



$("#loading").css('display','none');
//document.getElementById("bblol").removeAttribute("style");

//}, 1000); //setTimeout (unnecessary now???)
} //Flag check else end

} //everything() end








