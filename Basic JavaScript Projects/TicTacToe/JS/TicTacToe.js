//this variable keeps track of whose turn it is//
let activePlayer= 'X';
//this array stores an array of moves. We use this to determine win conditions.//
let selectedSquares=[];

//this function is for placing an X or O in a square.//
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of selectedSquare array//
    if (!selectedSquares.some(element=>element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is.
        if (activePlayer==='X')  {
            //the activePlayer is equal to 'X', the x.png is placed in the HTML.
        select.style.backgroundImage = 'url("Images/x.png")'  
        //Active player may only be 'X' or 'O', so if not 'X' it must be 'O'     
     } else {
         //if activePlayer is equal to 'O', the o.png is placed in HTML
         select.style.backgroundImage = 'url("Images/o.png")'
     }
     //squareNumber and activePlayer are concatenated together and added to array
     selectedSquares.push(squareNumber + activePlayer);
     //thsi condition is for changing the active player.
     if (activePlayer ==='X') {
         activePlayer ='O';
         //If active player is anything other than 'X"
     } else {
         //change the activePlayer to 'X'
         activePlayer ='X';
     }
     //this function plays placement sound
     audio('./Media/place.mp3');
     //this condition checks to see if it is computers turn
     if(activePlayer ==='O') {
         //this function disables clicking for computer choice
         disableClick();
         //this fumciton waits 1 second beofre computer places image and enables click
         setTimeout(function () { computersTurn(); }, 1000)
     }
     //returning trueis needed for our computerTurn() function to work
     return true;
    }
    //this function results in  a random square being selected
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores an random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already//
        while(!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
           //if the random number evaluated returns true, the square hansn't been selected yet
           if (placeXOrO(pickASquare)) {
               //this line calls the function
               placeXOrO(pickASquare);
               //this changes our boolean and ends the loop
               success = true;
            };
        }
    }
}

//this function parses the selectedSqures array to ssearch for win conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    //x 0, 1, 2 condition
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    // X 6, 7, 8 condition
    else if (arrayIncludes( '6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6x')) {drawWinLine(100, 50, 100, 558)}
    //X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    //X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    //O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    // O 6, 7, 8 condition
    else if (arrayIncludes( '6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    //O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    //O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    //this condition checks for tie. If none of the above conditions register and 9
    //squares are selected the code execute
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./Media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called
        setTimeout(function() {resetGame(); }, 1000);
        //this function checks if an array includes 3 strings. it is used to check for each win condition
        function arrayIncludes(squareA, squareB, squareC) {
            //these 3 variables will be used to check for 3 in a row
            const a = selectedSquares.includes(squareA)
            const b = selectedSquares.includes(squareB)
            const c = selectedSquares.includes(squareC)
            //if the 3 variables we pass are all included in our array true is
            //returned and our else if condition exexcutes the drawWinLine function
            if (a===true && b===true && c===true) {return true}
        }
    }
}

//this function makes our body element teporarily unclickable
function disableClick() {
    //this makes our boy unclickable
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}
//this function takes a sting parameter of the path you set earlier for
//placement sound('./Media/place.mp3)
function audio(audioURL) {
    //we create a new audio object and we pass teh path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

//this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our html canvas element
    const canvas = document.getElementById('win-lines')
    //this line gies us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is
    let X1 = coordX1,
    //this line indicates wehre the start of a lines y axis is
     Y1 = coordY1,
     //this line incidates where the end of a lines x axis is
     X2 =coordX2,
     //this line indicates where the end of a lines y axis is
     Y2 = coordY2,
     //this variable stores temporary x axis data we update in our animation loop
     X = X1;
     //this variable stores temporary y axis data we update in our animation loop
     Y = Y1;
     //this function interacts with the canvas
     function animateLineDrawing() {
         //this variable creates a loop
         const animationLoop = requestAnimationFrame(animateLineDrawing);
         //this method clears content from last loop iteration
         c.clearRect(0, 0, 608, 608)
         //this method starts a new path
         c.beginPath();
         //this method moves us to a starting point for our line
         c.moveTo(X1, Y1)
         //this methohd indicates the end point in our line
         c.lineTo(X, Y)
         //this method set sthe width of our line
         c.lineWidth = 10;
         //this method set the color of our line
         c.strokeStyle = 'rgba(70, 255, 33, .8)';
         //this method draw everthing we laid out above
         c.stroke();
         //this condition checks if we've reached the endpoint
         if (X1 <= X2 && Y1 <= Y2) {
             //this condition adds 10 to the previous end x point
             if (X < X2) {X += 10;}
             //this condition adds 10 to the previous end y point
             if (Y < Y2) {Y += 10;}
             //this condition cancels our animation loop
             //if we've reached the end points
             if (X >= X2 && Y >= Y2) {cancelAnimationFrame(animationLoop);}
         }
         //this condition is similar to teh one above
         //this is necessary for the 6,4,2 win condition
         if (X1 <= X2 && Y1 >= Y2) {
             if ( X < X2) { X +=10;}
             if (Y > Y2) {Y -= 10;}
             if(X >= X2 && Y <= Y2) {cancelAnimationFrame(animationLoop); }

         }
     }
     //this function clears our canvas after our win line is drawn
     function clear() {
         //this line starts our animation loop
         const animationLoop = requestAnimationFrame(clear);
         //thsi line clears our canvs
         c.clearRect(0, 0, 608, 608);
         //this line stops our animation loop
         cancelAnimationFrame(animationLoop);
     }
     //this line disallows clicking while the win sound is playing
     disableClick();
     //thsi line plays the hwind sounds
     audio('./Media/winGame.mp3');
     //this line calls our main animation loop
     animateLineDrawing();
     //this line waits 1 second. Then, clears canvas, resets game, and allos clicking again
     setTimeout(function () { clear(); resetGame(); }, 1000);
}



//this function resets the game in the event of a tie or a win
function resetGame() {
    //this for loop iterates through each HTML squre element
    for (let i = 0; i < 9;  i++) {
        //this variable get the html element of i
        let square = document.getElementById(String(i))
        //this removes our elements backgroundImage
        square.style.backgroundImage = ''
    }
    //this restes our array so it is empty and we can start over
    selectedSquares = [];
}