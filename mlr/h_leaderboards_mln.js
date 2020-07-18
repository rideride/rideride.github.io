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
        url: "https://rideride.github.io/mlr/MLNWithMLRIDs.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {data2 = data;}
     });
	$.ajax({
        type: "GET",
        url: "https://rideride.github.io/mlr/MLNAllPAsNoS4.txt",
        dataType: "text",
        //success: function(data) {processData(data);}
		success: function(data) {databruh = data;}
     });
	 
	  function loadData() {
          var url = "https://docs.google.com/spreadsheet/pub?key=1GakU_5L_bQYpRl4GZrcASXDxwgWtAWl_ibxCgQ9Pg68&output=csv&callback=googleDocCallback";
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
	s5data = s5data.split("\n").slice(1).join("\n");
	s5data = s5data.replace(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,4,","");
	s5data = s5data.replace(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,4,","");
	//console.log(s5data);
	databruh = databruh + s5data;
	s5data = '';
	//console.log(databruh);

//console.log("Ready");

var data3 = $.csv.toObjects(data2)

//console.log(data3);

players = {}
pids = {}

for(var key in data3) {
    var value = data3[key];
	var player_name = data3[key]["MLN Name"];
	var player_id = data3[key]["MLR ID"];
	players[player_name] = player_id;
	if(pids[player_id] && pids[player_id].length > 0) {
	    pids[player_id].push(player_name);
    } else {
        pids[player_id] = [player_name];
    }
    //console.log(value);
}


//console.log(s1stats);

var databruh3 = $.csv.toObjects(databruh)
//databruh = '';

var stats = {};
var stats1 = {};
var stats2 = {};
var stats3 = {};
var stats4 = {};
var stats5 = {};

var bruhbruh = 0;
var bruhbruh2 = 0;

var h_list = {};
var line = 0;

for(var key in databruh3) {
	line = line + 1;
	var hitter = databruh3[key]["Hitter"];
	var pitcher = databruh3[key]["Pitcher"];
	var result = databruh3[key]["Result"];
	var run = databruh3[key]["Run Scored"];
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
	var rbi = databruh3[key]["RBIs"];
	if(rbi.length < 1) {
		rbi = 0;
		//console.log("yeet2");
	}
	var game = databruh3[key]["Season"] + '_' + databruh3[key]["Game #"]
	try {
		var hitter_id = players[hitter];
	} 
	catch(err) {
		//console.log(hitter)
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
	} //season 5 end

}





function statsDoer(statsdict, s) {

	for(var key in statsdict) {
	//var hitter_id = players[key];
	var hitter_id = key;
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
statsDoer(stats,0);




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

//}, 1000); //setTimeout (unnecessary now???)
} //Flag check else end

} //everything() end








