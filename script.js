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

function rps(body){
    
}