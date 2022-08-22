// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["A", "B", "C"]); // You can determine global (random) parameters here

const emojis = {
    "Nachtisch" : { "A" : "<img src = 'images/EISice-cream_1f368.png', height=40px>", "B" : "<img src = 'images/EISsnowflake_2744.png', height=40px>", "C" : "Eis" } ,
	"Grad" : { "A" : "<img src = 'images/EISsnowflake_2744.png', height=40px>", "B" : "Eis", "C" :  "<img src = 'images/EISice-cream_1f368.png', height=40px>" },
	"Tür" : { "A" : "Schloss", "B" : "<img src = 'images/SCHLOSSlock_1f512.png', height=40px>", "C" : "<img src = 'images/SCHLOSSeuropean-castle_1f3f0.png', height=40px>" },
	"Prinzessin" : { "A" : "<img src = 'images/SCHLOSSeuropean-castle_1f3f0.png', height=40px>", "B" : "Schloss", "C" : "<img src = 'images/SCHLOSSlock_1f512.png', height=40px>" },
	"Stall" : { "A" : "<img src = 'images/HAHNpotable-water-symbol_1f6b0.png', height=40px>", "B" : "Hahn", "C" : "<img src = 'images/HAHNchicken_1f414.png', height=40px>" },
	"Klempner" : { "A" : "Hahn", "B" : "<img src = 'images/HAHNchicken_1f414.png', height=40px>", "C" : "<img src = 'images/HAHNpotable-water-symbol_1f6b0.png', height=40px>" },
	"Papier" : { "A" : "<img src = 'images/BLATTleaf-fluttering-in-wind_1f343.png', height=40px>", "B" : "<img src = 'images/PAPIERpage-facing-up_1f4c4.png', height=40px>", "C" : "Blatt" },
	"Blatt" : { "A" : "<img src = 'images/PAPIERpage-facing-up_1f4c4.png', height=40px>", "B" : "Blatt", "C" : "<img src = 'images/BLATTleaf-fluttering-in-wind_1f343.png', height=40px>" },
	"Obstsalat" : { "A" : "Birne", "B" : "<img src = 'images/BIRNEelectric-light-bulb_1f4a1.png', height=40px>", "C" : "<img src = 'images/BIRNEpear_1f350.png', height=40px>" },
	"Beleuchtung" : { "A" : "<img src = 'images/BIRNEelectric-light-bulb_1f4a1.png', height=40px>", "B" : "<img src = 'images/BIRNEpear_1f350.png', height=40px>", "C" : "Birne" },
	"Nagetier" : { "A" : "<img src = 'images/MAUSmouse_1f401.png', height=40px>", "B" : "Maus" ,"C" : "<img src = 'images/MAUSthree-button-mouse_1f5b1.png', height=40px>" },
	"Computer" : { "A" : "Maus", "B" : "<img src = 'images/MAUSthree-button-mouse_1f5b1.png', height=40px>", "C" : "<img src = 'images/MAUSmouse_1f401.png', height=40px>" },
	"Stadt" : { "A" : "<img src = 'images/KARTEworld-map_1f5fa.png', height=40px>", "B" : "<img src = 'images/KARTEcredit-card_1f4b3.png', height=40px>", "C" : "Karte" },
	"Bank" : { "A" : "<img src = 'images/KARTEcredit-card_1f4b3.png', height=40px>", "B" : "Karte", "C" : "<img src = 'images/KARTEworld-map_1f5fa.png', height=40px>" },
	"Akrobatik" : { "A" : "Rad", "B" : "<img src = 'images/RADperson-doing-cartwheel_1f938.png', height=40px>", "C" : "<img src = 'images/RADbicycle_1f6b2.png', height=40px>" },
	"Wettrennen" : { "A" : "<img src = 'images/RADperson-doing-cartwheel_1f938.png', height=40px>", "B" : "<img src = 'images/RADbicycle_1f6b2.png', height=40px>", "C" : "Rad" },
	"Kuh" : { "A" : "<img src = 'images/POLpolice-officer_1f46e.png', height=40px>", "B" : "Bullen", "C" : "<img src = 'images/BULLEox_1f402.png', height=40px>" },
	"Demo" : { "A" : "Bulle", "B" : "<img src = 'images/BULLEox_1f402.png', height=40px>", "C" : "<img src = 'images/POLpolice-officer_1f46e.png', height=40px>" },
	"Schmuggel" : { "A" : "<img src = 'images/ZOLLstraight-ruler_1f4cf.png', height=40px>", "B" : "<img src = 'images/ZOLLcustoms_1f6c3.png', height=40px>", "C" : "Zoll" },
	"Längenumrechnung" : { "A" : "<img src = 'images/ZOLLcustoms_1f6c3.png', height=40px>", "B" : "Zoll", "C" : "<img src = 'images/ZOLLstraight-ruler_1f4cf.png', height=40px>" },
	"Aktien" : { "A" : "DAX", "B" : "<img src = 'images/DACHSbadger_1f9a1.png', height=40px>", "C" : "<img src = 'images/DAXchart-with-upwards-trend_1f4c8.png', height=40px>" },
	"Waldtier" : { "A" : "<img src = 'images/DACHSbadger_1f9a1.png', height=40px>", "B" : "<img src = 'images/DAXchart-with-upwards-trend_1f4c8.png', height=40px>", "C" : "Dachs" },
	"Meeressäuger" : { "A" : "<img src = 'images/WAHLballot-box-with-ballot_1f5f3.png', height=40px>", "B" : "Wal", "C" : "<img src = 'images/WALspouting-whale_1f433.png', height=40px>" },
	"Politik" : { "A" : "Wahl", "B" : "<img src = 'images/WALspouting-whale_1f433.png', height=40px>", "C" : "<img src = 'images/WAHLballot-box-with-ballot_1f5f3.png', height=40px>" },
	"Alkohol" : { "A" : "<img src = 'images/WEINwine-glass_1f377.png', height=40px>", "B" : "<img src = 'images/WEINcrying-face_1f622.png', height=40px>", "C" : "Wein" },
	"Tränen" : { "A" : "<img src = 'images/WEINcrying-face_1f622.png', height=40px>", "B" : "Weinen", "C" : "<img src = 'images/WEINwine-glass_1f377.png', height=40px>" },
	"Schach" : { "A" : "Bauer", "B" : "<img src = 'images/BAUERmale-farmer_1f468-200d-1f33e.png', height=40px>", "C" : "<img src = 'images/BAUERblack-chess-pawn_265f.png', height=40px>" },
	"Feld" : { "A" : "<img src = 'images/BAUERmale-farmer_1f468-200d-1f33e.png', height=40px>", "B" : "<img src = 'images/BAUERblack-chess-pawn_265f.png', height=40px>", "C" : "Bauer" },
	"Ausscheidung" : { "A" : "<img src = 'images/STUHLpile-of-poo_1f4a9.png', height=40px>", "B" : "Stuhl", "C" : "<img src = 'images/STUHLchair_1fa91.png', height=40px>" },
	"Sitzmöbel" : { "A" : "Stuhl", "B" : "<img src = 'images/STUHLchair_1fa91.png', height=40px>", "C" : "<img src = 'images/STUHLpile-of-poo_1f4a9.png', height=40px>" }
};



/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};

const participantID = generateID(6);

// Declare your helper functions here



/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
