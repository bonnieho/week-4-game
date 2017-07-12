//This ia a class project game created in Javascript
// Author: Bonnie L. Hoffman - bonnieho@rice.edu

// This game is based on a number-guessing game where randomly generated numbers are selected and then by clicking on graphical buttons representing gemstones (also attributed to a random but unknown value), the player has to add up the numbers to match the game's random number without going over.


// NOTES

	// The random number shown at the start of the game should be between 19 - 120. These bounds are the variables minNmuBounds and maxNumBounds.

	// Each crystal should have a random hidden value between 1 - 12.




// all contained within document ready function to allow all scripts to run ONLY after the document is loaded completely

$(document).ready(function(){

	// =============================================================
	// SECTION - global variables

	// game counters

		var targetNum = 0;
		var mySum = 0;
		var countWins = 0;
		var countLosses = 0;

		var minNumBounds = 19;
		var maxNumBounds = 120;
		
		var crystalValues = "";
		var maxCrystalNum = 4;
		var minCrystalVal = 1;
		var maxCrystalVal = 12;

		//var btn0 = 0;
		//var btn1 = 0;
		//var btn2 = 0;
		//var btn3 = 0;

	// =============================================================
	// SECTION - functions

 		function launchGame() {

		    targetNum = randomNumberFromRange(minNumBounds, maxNumBounds);
			mySum = 0;
			crystalValues = make_new_array(4,1,12);
			//TEST to make sure array is populated with four unique values
			//console.log(crystalValues);
			var btn0 = crystalValues[0];
			var btn1 = crystalValues[1];
			var btn2 = crystalValues[2];
			var btn3 = crystalValues[3];

			function make_new_array(maxCrystalNum,minCrystalVal,maxCrystalVal) {

				var temp, nums = new Array;

				for (var elementIndex=0; elementIndex<maxCrystalNum; elementIndex++) {

    				while((temp=number_found(randomNumberFromRange(minCrystalVal,maxCrystalVal),nums))==-1);
    				nums[elementIndex] = temp;
				}
				console.log(nums);
				return (nums);
			}

			function number_found (random_number,number_array) {

				for (var elementIndex=0; elementIndex<number_array.length; elementIndex++) {

    				if (random_number==number_array[elementIndex]) {
        				return (-1);
					}
				}
			
				return (random_number);
			}

			// ==========  END choose four random (unique) values to the button array   =========


			// creating a random number between minimum and maximum values
			// this is used to generate both the targetNum and the crystal button array values (that are assigned to the buttons)
			function randomNumberFromRange(min,max) {
				return Math.floor(Math.random()*(max-min+1)+min);
			}

			// =================================================================
			// CREATE AND FILL NUMBER ARRAY WITH UNIQUE RANDOM NUMBERS
			// global variable initialized above: crystalValues = make_new_array(4,1,12);




			// add button values together

    		//$(function() {
        		//$(".numbtn").click(function() {
            	//	mySum = 0;
            	//	$(".numbtn").each(function() {
                //		mySum += Number($(this).val());
            	//	});
            	//	$("#mynumsum").text(mySum);
        		//});
    		//});
    		
    		/* $(".numbtn").each(function() {
					console.log(typeof(this));
					console.log(JSON.stringify(this));
					console.log(this.value);
				$(this).on("click",function(){
					//TEST for why it's not showing up!

					calculateSum();
				});
			}); */
			$("#button_one").on("click",function() {
				console.log(`got ${btn0}`);
				calculateSum(btn0);
				return;
			});
			$("#button_two").on("click",function() {
				console.log(`got ${btn1}`);
				calculateSum(btn1);
				return;
			});
			$("#button_three").on("click",function() {
				console.log(`got ${btn2}`);
				calculateSum(btn2);
				return;
			});
			$("#button_four").on("click",function() {
				console.log(`got ${btn3}`);
				calculateSum(btn3);
				return;
			});


    		function calculateSum(btnValue) {
    			mySum += btnValue;
    			$("#mynumsum").html(mySum.toFixed(0));
			
				// check for a win
				if (mySum === targetNum) {
					countWins++;
					alert("You Won!");
					// STILL NEED TO reset random number BELOW
			


					// updates the win count
					document.getElementById("wincount").innerHTML = countWins;

					// launches new random number to contimue game play
					launchGame();
				}

				// if not a win, update loss total
				else if (mySum > targetNum) {
					countLosses++;
					alert("I'm sorry, but you've lost the game. \nBetter luck next time!");
					// STILL NEED TO reset random number BELOW
			
		

					// updates the loss count
					document.getElementById("losscount").innerHTML = countLosses;

					// launches new random number to contimue game play
					launchGame();
				}
			}


// =================================================================

			// Change HTML to reflect round conditions
			
			document.getElementById("targetnumber").innerHTML = targetNum;
			document.getElementById("mynumsum").innerHTML = mySum;
			document.getElementById("button_one").innerHTML = btn0;
			document.getElementById("button_two").innerHTML = btn1;
			document.getElementById("button_three").innerHTML = btn2;
			document.getElementById("button_four").innerHTML = btn3;
			document.getElementById("wincount").innerHTML = countWins;
			document.getElementById("losscount").innerHTML = countLosses;
			
					
		}



		
	// =============================================================
	// SECTION - main processes

		// this initiates the game the first time
		launchGame();


// END document.ready	

}); 



