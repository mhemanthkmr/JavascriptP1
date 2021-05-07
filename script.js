function ageindays(){
    var birthYear = prompt("What Year you Born .")
    var ageinday = (2021 - birthYear) * 365
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageinday + ' Days Old.')
    h1.setAttribute('id','ageindays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function remo(){
    document.getElementById('ageindays').remove()
}

//Generating a Cat

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function rpsGame(yourChoice){
    //console.log(yourChoice);
    var humanChoice , botChoice;
    humanChoice = yourChoice.id ;
    botChoice = numberToChoice(randToRpsInt());
    //alert(botChoice);
    //console.log('Computer Choice',botChoice)
    result = decideWinner(humanChoice,botChoice); // [0,1] Human Lost , Bot Won 
   // console.log(result);
    message = finalMessage(result); // "{ message : "You Won " , 'colr' : green )
   // console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3 );
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number] ;
}

function decideWinner(yourChoice , computerChoice){
    var rpsDatabase = {
        'rock' : {'scissors' : 1 ,'rock' : 0.5 ,'paper':0 },
        'paper' : {'rock' : 1 ,'paper' : 0.5 ,'scissors':0 },
        'scissors' : {'paper' : 1 ,'scissors' : 0.5 ,'rock':0 },
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0) {
        return {'message' : 'You Lost !' ,'color' : 'red'};
    }
    else if ( yourScore === 0.5) {
        return {'message' : 'You Tied !' , 'color' : 'yellow'}
    }
    else {
        return {'message' : 'You Won !' , 'color' : 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }
    // lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src ='" + imageDatabase[humanImageChoice] + "' height = 150px width = 150px style = 'box-shadow : 0px 10px 50px rgba(37,50,233,1)'>"
    messageDiv.innerHTML = "<h1 style = 'color :" + finalMessage['color'] + "; font-size:60px ; padding : 30px ; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src ='" + imageDatabase[botImageChoice] + "' height = 150px width = 150px style = 'box-shadow : 0px 10px 50px rgba(243,38,24,1)'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

    var butDiv = document.createElement('button');
    butDiv.innerHTML = "<button class='btn btn-danger'><a href='https://mhemanthkmr.github.io/JavascriptP1/'>Reset</a></button>"
    document.getElementById('flex-box-rps-div').appendChild(butDiv);
    

}

//Challenge 4 : Change All Color of All Button

var all_button = document.getElementsByTagName('button');
console.log(all_button);
var copyAllButtons = [] ;
for (let i = 0 ; i < 7 ; i++){
    copyAllButtons.push(all_button[i]);
}
console.log(copyAllButtons);