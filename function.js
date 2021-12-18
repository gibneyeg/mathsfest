 function plusS() {
        document.getElementById("plus").innerHTML = "This is the addition sign: " + "It is used to add countless numbers together ";
      }
       function minusS() {
        document.getElementById("minus").innerHTML = "This is the minus sign:" + "It is used to take numbers away from eachother";
      }
         function multiply() {
        document.getElementById("times").innerHTML = "This is the multiplication sign:" + "Using this will result in a product";
      }
        function division() {
        document.getElementById("divide").innerHTML = "This is the division sign:" + "It is used to show a number being &#247; by a number";
      }
        function equals() {
        document.getElementById("result").innerHTML = "This is the equals sign:" + "It is used to show the result of  a previous equasion ";
      }
       function rootQ() {
        document.getElementById("root").innerHTML = "This is the square root sign:" + "it is used to show a number multiplied by itself";
      }

function game(){
			//set up variables
			var uGuess;
			var msge;
      var msges;

			var winnerScores = [0,0]; //index 0 = comp, index 1 = user

			
			//play game 6 times using for loop
			for( let i = 1; i < 7; i++){
				//set up random number - cGuess
				//Math.random returns a random number between 0-1 so we multiply by 5. Math.floor rounds down to nearest whole number
				var cGuess = Math.floor(Math.random()*5)+1;
        
				//alert("Computer random guess" + cGuess); //testing line
				//get user guesses
			
				//compare the guesses
				if(cGuess === 1){//comp guess is 1
          	uGuess = parseInt(prompt("1 + 19 = _"));
					if(uGuess < 19){
						msge="wrong";
            	//update comp score
						winnerScores[0]++;
					}else if(uGuess > 20){
						msge = "wrong";
						//update comp score
						winnerScores[0]++;
					}else if(uGuess === 20){
						msge = "Success!";
						//update user score
						winnerScores[1]++;
					}
				}else if(cGuess === 2){/* comp gues is 2*/
          	uGuess = parseInt(prompt("8 * 5 = _ "));
					if(uGuess >40 ){
						msge="wrong";
						//update comp score
						winnerScores[0]++;
					}else if(uGuess < 40){
						msge = "wrong";
            winnerScores[0]++;

					}else if(uGuess === 40){
						msge = "success!";
						//update user score
						winnerScores[1]++;
					}
				}else if(cGuess === 3){/* comp gues is 3*/
          	uGuess = parseInt(prompt("If y=10x − 1 and the value of x is 10, what is the value of y? "));
					if(uGuess > 99){
						msge="wrong";
						//user wins
						winnerScores[0]++;
					}else if(uGuess < 99){
						msge = "wrong";
						//comp wins
						winnerScores[0]++;
					}else if(uGuess === 99){
						msge = "success!";
            winnerScores[1]++;

					}
        }else if(cGuess === 4){/* comp gues is 4*/
          	uGuess = parseInt(prompt(" 3 − 7 × 4 = _"));
			  	if(uGuess > -25){
						msge="wrong";
						//user wins
						winnerScores[0]++;
					}else if(uGuess < -25){
						msge = "wrong";
						//comp wins
						winnerScores[0]++;
					}else if(uGuess === -25){
						msge = "success!";
            winnerScores[1]++;
					}
        }else if(cGuess === 5){/* comp gues is 5*/
          	uGuess = parseInt(prompt(" Look at this series: 36, 34, 30, 28, 24, … What number should come next?"));
			  	if(uGuess > 22){
						msge="wrong";
						//user wins
						winnerScores[0]++;
					}else if(uGuess < 22){
						msge = "wrong";
						//comp wins
						winnerScores[0]++;
					}else if(uGuess === 22){
						msge = "success!";
            winnerScores[1]++;
					}
        }else if(cGuess === 6){/* comp gues is 6*/
          	uGuess = parseInt(prompt("Complete The Fibonacci Sequences 0,1,1,2,3,5,8,13,21,34?"));
			  	if(uGuess > 55){
						msge="wrong";
						//user wins
						winnerScores[0]++;
					}else if(uGuess < 55){
						msge = "wrong";
						//comp wins
						winnerScores[0]++;
					}else if(uGuess === 55){
						msge = "success!";
            winnerScores[1]++;
          }
     
   
				
        }
				//give the user feedback
				alert(msge);
      }
			
			//give the over all scores outside the for loop
			document.getElementById("userInfo").innerHTML = "CORRECT AWNSERS: "+winnerScores[1]      + " WRONG AWNSERS:" +winnerScores[0];
		} //end function
      