const results = ['hr', '3b', '2b', '1b', 'bb', 'fo', 'k', 'po', 'rgo', 'lgo'];
const INFIELD_IN_RANGE = {
    'hr': 0,
    '3b': 0,
    '2b': 0,
    '1b': 18,
    'bb': 0,
    'fo': 0,
    'k': 0,
    'po': 0,
    'rgo': -9,
    'lgo': -9,
};

let pitchingType;
let pitchingBonus;
let pitcherHand;
let battingType;
let batterHand;
let park;
updateParkDescriptor();
updateTypeDescriptors();

function updatePlayerDescriptors() {
    // Pitcher types
    let pitcherId = parseInt($('#calc-pitcher').val());
    let pitcher = pitcherId ? window.fakebaseball.players.find(function (p) { return p.id === pitcherId }) : undefined;
    let pitcherType = pitcher ? window.fakebaseball.pitchingTypes.find(function (pt) { return pt.id === pitcher.pitchingType }) : undefined;
    pitcherType = pitcherType ? pitcherType : window.fakebaseball.pitchingTypes.find(function (pt) { return pt.name === "Position" });
    let pitcherBonus = pitcher ? window.fakebaseball.pitchingBonuses.find(function (pb) { return pb.id === pitcher.pitchingBonus }) : undefined;

    // Batter types
    let batterId = parseInt($('#calc-batter').val());
    let batter = batterId ? window.fakebaseball.players.find(function (p) { return p.id === batterId }) : undefined;
    let batterType = batter ? window.fakebaseball.battingTypes.find(function (bt) { return bt.id === batter.battingType }) : undefined;

    // Populate the descriptors
    if (pitcher) {
        $('#calc-pitcher-info').text(`${pitcher.rightHanded ? 'Right' : 'Left'} | ${pitcherType.shortcode}${pitcherBonus ? `-${pitcherBonus.shortcode}` : ''}`);
        pitchingType = pitcherType;
        pitchingBonus = pitcherBonus;
    } else {
        $('#calc-pitcher-info').text(`Select a pitcher.`);
    }
    if (batter) {
        $('#calc-batter-info').text(`${batter.rightHanded ? 'Right' : 'Left'} | ${batterType.shortcode}`);
    } else {
        $('#calc-batter-info').text(`Select a batter.`);
    }

    // Update references for the calc button
    pitchingType = pitcherType;
    pitchingBonus = pitcherBonus;
    pitcherHand = pitcher ? pitcher.rightHanded : undefined;
    battingType = batterType;
    batterHand = batter ? batter.rightHanded : undefined;
}

function updateTypeDescriptors() {
    let pitchingTypeId = parseInt($('#calc-pitching-type').val());
    pitchingType = pitchingTypeId ? window.fakebaseball.pitchingTypes.find(function (pt) { return pt.id === pitchingTypeId }) : undefined;
    let pitchingBonusId = parseInt($('#calc-pitching-bonus').val());
    pitchingBonus = pitchingBonusId ? window.fakebaseball.pitchingBonuses.find(function (pt) { return pt.id === pitchingBonusId }) : undefined;
    let battingTypeId = parseInt($('#calc-batting-type').val());
    battingType = battingTypeId ? window.fakebaseball.battingTypes.find(function (pt) { return pt.id === battingTypeId }) : undefined;
}

function updateParkDescriptor() {
    let parkId = parseInt($('#calc-park').val());
    park = window.fakebaseball.parks.find(function (p) { return p.id === parkId });
    $('#calc-park-info').text(`${park.factorHR.toFixed(3)}/${park.factor3B.toFixed(3)}/${park.factor2B.toFixed(3)}/${park.factor1B.toFixed(3)}/${park.factorBB.toFixed(3)}`);
}

$('#calc-pitcher').on('change', updatePlayerDescriptors);
$('#calc-batter').on('change', updatePlayerDescriptors);
$('#calc-park').on('change', updateParkDescriptor);
$('#calc-pitching-type').on('change', updateTypeDescriptors);
$('#calc-pitching-bonus').on('change', updateTypeDescriptors);
$('#calc-batting-type').on('change', updateTypeDescriptors);

function calc() {
    if (!battingType || !pitchingType || !park)
        return;

    // Calculate ranges in steps
    let combinedRange = {};
    // Step 1: Batter table values
    $('#calc-out-bt-name').text(`Best Swing For...`);
    for (let res of results) {
        let range = battingType[`range${res.toUpperCase()}`];
		var bruhh = 'no';
		var rang = 'n';
		var final_result = 0;
		if(res == 'hr') {
			bruhh = parseInt($('#calc-pitcher').val());
			rang = parseInt($('#calc-batter').val());
			field = parseInt($('#calc-park').val());
			final_result = ((bruhh+rang+field)/4515).toString();
			if(final_result.length > 8) {
			    final_result = final_result.substring(4,7);
			}
			else {
				final_result = '002';
			}
		}
		if(res == '3b') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%2 == 0) {
			final_result += 1;
			} else {
				final_result -= 1;
			}
			
			final_result = final_result.toString();
			if(final_result.length == 1) {
				final_result = '0'+final_result;
			}
			if(final_result.length == 2) {
				final_result = '0'+final_result;
			}
		}
		if(res == '2b') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result += 57;
			} else if(final_result%6 == 0) {
				final_result -= 88;
			} else if(final_result%7 == 0) {
				final_result -= 331;
			} else if(final_result%3 == 0) {
				final_result += 33;
			} else if(final_result%2 == 0) {
				final_result -= 45;
			} else {
				final_result += 63;
			}	
		}
		if(res == '1b') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result += 108;
			} else if(final_result%6 == 0) {
				final_result -= 150;
			} else if(final_result%7 == 0) {
				final_result -= 390;
			} else if(final_result%3 == 0) {
				final_result += 67;
			} else if(final_result%2 == 0) {
				final_result -= 69;
			} else {
				final_result += 93;
			}	
		}
		if(res == 'bb') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result += 128;
			} else if(final_result%6 == 0) {
				final_result -= 177;
			} else if(final_result%7 == 0) {
				final_result -= 421;
			} else if(final_result%3 == 0) {
				final_result += 102;
			} else if(final_result%2 == 0) {
				final_result -= 114;
			} else {
				final_result += 137;
			}	
		}
		if(res == 'fo') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result += 279;
			} else if(final_result%6 == 0) {
				final_result -= 303;
			} else if(final_result%7 == 0) {
				final_result += 433;
			} else if(final_result%3 == 0) {
				final_result += 289;
			} else if(final_result%2 == 0) {
				final_result -= 258;
			} else {
				final_result += 260;
			}	
		}
		if(res == 'k') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result += 401;
			} else if(final_result%6 == 0) {
				final_result -= 350;
			} else if(final_result%7 == 0) {
				final_result += 299;
			} else if(final_result%3 == 0) {
				final_result += 369;
			} else if(final_result%2 == 0) {
				final_result -= 378;
			} else {
				final_result += 404;
			}	
		}
		if(res == 'po') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result += 431;
			} else if(final_result%6 == 0) {
				final_result -= 383;
			} else if(final_result%7 == 0) {
				final_result += 321;
			} else if(final_result%3 == 0) {
				final_result += 400;
			} else if(final_result%2 == 0) {
				final_result -= 414;
			} else {
				final_result += 454;
			}	
		}
		
		if(res == 'rgo') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result += 488;
			} else if(final_result%6 == 0) {
				final_result -= 455;
			} else if(final_result%7 == 0) {
				final_result += 375;
			} else if(final_result%3 == 0) {
				final_result += 451;
			} else if(final_result%2 == 0) {
				final_result -= 464;
			} else {
				final_result += 490;
			}	
		}
		
		if(res == 'lgo') {
			final_result = $('#calc-out-bt-hr').text();
			final_result = parseInt(final_result);
			if (final_result%4 == 0) {
			final_result -= 478;
			} else if(final_result%6 == 0) {
				final_result -= 495;
			} else if(final_result%7 == 0) {
				final_result += 404;
			} else if(final_result%3 == 0) {
				final_result += 488;
			} else if(final_result%2 == 0) {
				final_result += 488;
			} else {
				final_result += 497;
			}	
		}
		
		    final_result = parseInt(final_result);
			if(final_result < 1) {
				final_result += 1000;
			} else if(final_result > 1000) {
				final_result -= 1000;
			} 
			final_result = final_result.toString();
			if(final_result.length == 1) {
				final_result = '0'+final_result;
			}
			if(final_result.length == 2) {
				final_result = '0'+final_result;
			}
        $(`#calc-out-bt-${res}`).text(final_result);
        combinedRange[res] = range;
    }

    // Step 2: Pitcher Type table values
    $('#calc-out-pt-name').text(`PT: ${pitchingType.name}`);
    for (let res of results) {
        let range = pitchingType[`range${res.toUpperCase()}`];
        $(`#calc-out-pt-${res}`).text(range);
        combinedRange[res] += range;
    }

    // Step 3: Pitching Bonus if applicable
    if (pitchingBonus && pitcherHand === batterHand) {
        $('#calc-out-pb-name').text(`PB: ${pitchingBonus.name}`);
        for (let res of results) {
            let range = pitchingBonus[`range${res.toUpperCase()}`];
            $(`#calc-out-pb-${res}`).text(range);
            combinedRange[res] += range;
        }
    } else {
        $('#calc-out-pb-name').text(`PB: None`);
        for (let res of results) {
            $(`#calc-out-pb-${res}`).text('0');
        }
    }

    // Step 4: Combined values (park-independent matchup)
    for (let res of results) {
        $(`#calc-out-matchup-${res}`).text(combinedRange[res]);
    }

    // Step 5: Park factors (shudder)
    let parkChanges = calculateParkFactors(combinedRange);
    $('#calc-out-park-name').text(`Park: ${park.name}`);
    for (let res of results) {
        let range = parkChanges[res];
        $(`#calc-out-park-${res}`).text(range);
        combinedRange[res] += range;
    }

    // Step 6: Infield In
    let infieldIn = $('#calc-infield-in').val() === "true";
    if (infieldIn) {
        $('#calc-out-if-name').text('Infield In: Yes');
        for (let res of results) {
            let range = INFIELD_IN_RANGE[res];
            $(`#calc-out-if-${res}`).text(range);
            combinedRange[res] += range;
        }
    } else {
        $('#calc-out-if-name').text('Infield In: No');
        for (let res of results) {
            $(`#calc-out-if-${res}`).text('0');
        }
    }

    // Step 7: The final totals
    for (let res of results) {
        $(`#calc-out-total-${res}`).text(combinedRange[res]);
    }

    // Step 8: Determine swing diff
    let pitch = parseInt($('#calc-pitch').val());
    let swing = parseInt($('#calc-swing').val());
    let diff;
    if (isFinite(pitch) && isFinite(swing)) {
        let max = Math.max(swing, pitch);
        let min = Math.min(swing, pitch);
        diff = Math.min(max - min, 1000 - max + min);
    }

    // Step 9: Sequential ranges (and use the loop to find the swing outcome)
    let c = 0;
    let outcome;
    for (let res of results) {
        let endOfRange = c + combinedRange[res];
        if (diff !== undefined && !outcome && diff < endOfRange)
            outcome = res.toUpperCase();
        if (combinedRange[res] === 0)
            $(`#calc-out-ranges-${res}`).text(`---`);
        else
            $(`#calc-out-ranges-${res}`).text(`${c.toString().padStart(3, '0')}-${(endOfRange - 1).toString().padStart(3, '0')}`);
        c = endOfRange;
    }

    // Step 10: Print the result to the outcome box
    if (isFinite(diff))
        $('#calc-result').val(`Pitch: ${pitch}  \nSwing: ${swing}  \nDiff: ${diff} -> ${outcome}`);
}

// This is kinda ripped from the Scala source
// at the time of writing, MLRCalculatorService.scala:26
function calculateParkFactors(combinedRange) {
    let parkChanges = {
        'hr': Math.round(park.factorHR * combinedRange['hr']) - combinedRange['hr'],
        '3b': Math.round(park.factor3B * combinedRange['3b']) - combinedRange['3b'],
        '2b': Math.round(park.factor2B * combinedRange['2b']) - combinedRange['2b'],
        '1b': Math.round(park.factor1B * combinedRange['1b']) - combinedRange['1b'],
        'bb': Math.round(park.factorBB * combinedRange['bb']) - combinedRange['bb'],
        'fo': 0, 'k': 0, 'po': 0, 'rgo': 0, 'lgo': 0,
    };

    // Track the sum of the adjustments, since we need to remove an equal amount
    // from the out ranges
    let adjTotal = parkChanges['hr'] + parkChanges['3b'] + parkChanges['2b'] + parkChanges['1b'] + parkChanges['bb'];
    let direction = adjTotal < 0 ? 1 : -1;

    // Now loop through the out ranges incrementally until adjTotal is 0
    let outRanges = ['fo', 'k', 'po', 'rgo', 'lgo'];
    let index = 0;
    while (adjTotal !== 0) {
        let range = outRanges[index++];
        index %= 5;
        let currSize = parkChanges[range] + combinedRange[range];
        if (currSize > 0) {
            parkChanges[range] += direction;
            adjTotal += direction;
        }
    }

    return parkChanges;
}

$('#calc-submit').on('click', calc);