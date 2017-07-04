/* JAVA */

$(document).ready(function(){

// Random Numbers Between 19-120 //
	var RandomNum=Math.floor(Math.random()*90+29)

// ID HTML Append Random Number //
$('#numRandom').text(RandomNum);

// Random Numbers For Stones // 
var red1= Math.floor(Math.random()*5+1+6)
var blue2= Math.floor(Math.random()*1+8+2)
var yellow3= Math.floor(Math.random()*3+2+7)
var green4= Math.floor(Math.random()*6+5+1)

// Score/Wins&Losses Totals //  
var totalScore= 0;
var wins= 0;
var losses= 0;

// ID Append wins&losses //
$('#wins').text(wins);
$('#losses').text(losses);

// Game Reset //
function reset(){
 	RandomNum=Math.floor(Math.random()*90+29);
 	console.log (RandomNum)
 	$('#numRandum').text(RandomNum);
 	red1= Math.floor(Math.random()*5+1+6);
 	blue2= Math.floor(Math.random()*1+8+2);
 	yellow3= Math.floor(Math.random()*3+2+7);
 	green4= Math.floor(Math.random()*6+5+1);
 		totalScore=0;
 		$('#score').text(totalScore);
 	 }

// Adding wins // 
function wins(){
	alert('YOU WON!');
	wins++;
	$('#wins').text(wins);
	reset();
}

// Adding losses //
function loss(){
	alert('YOU LOSE!');
	losses++;
	$('#losses').text(losess);
    reset()
}

// Stones Click Functions //
$('#red').on('click', function(){
    totalScore = totalScore + red1; 
    console.log('new totalScore=' + totalScore);
    $('#score').text(totalScore);

    if (totalScore == RandomNum){
    	wins();
    }
    else if (totalScore > RandomNum){
    	loss();
    }
})   

$('#blue').on('click', function(){
    totalScore = totalScore + blue2; 
    console.log('new totalScore=' + totalScore);
    $('#score').text(totalScore);

    if (totalScore == RandomNum){
    	wins();
    }
    else if (totalScore > RandomNum){
    	loss();
    }
})

$('#yellow').on('click', function(){
    totalScore = totalScore + yellow3; 
    console.log('new totalScore=' + totalScore);
    $('#score').text(totalScore);

    if (totalScore == RandomNum){
    	wins();
    }
    else if (totalScore > RandomNum){
    	loss();
    }
})

$('#green').on('click', function(){
    totalScore = totalScore + green4; 
    console.log('new totalScore=' + totalScore);
    $('#score').text(totalScore);

    if (totalScore == RandomNum){
    	wins();
    }
    else if (totalScore > RandomNum){
    	loss();
    }

});
});





















