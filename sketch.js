var score = 0;
var questions = 0;
var bank = [];
var totalQs;
var usedIndex = [];
var set;

function init() {
    createBank();
    totalQs = bank.length < 10 ? bank.length : 10
    var index = getIndex();
    usedIndex.push(index);
    set = bank[index];

    ques = document.querySelector('#ques');
    ques.innerHTML = "<p>Question number 1/" + totalQs + "</p><p>" + set.q + "</p>";
    b1 = document.querySelector('#b1');
    b1.innerHTML = set.c1;
    b2 = document.querySelector('#b2');
    b2.innerHTML = set.c2;
    b3 = document.querySelector('#b3');
    b3.innerHTML = set.c3;
    b4 = document.querySelector('#b4');
    b4.innerHTML = set.c4;
    scoreD = document.querySelector('#score');
    scoreD.innerHTML = "<p>Score: " + score + "/" + questions + "</p>";
}

function createBank() {
    bank.push({q:'<strong> An integer can be</strong>', c1:'Only Positive', c2:'Only Negative', c3:'Both positive and negative', c4:'None of the above', a:'c3'});
    bank.push({q:'<strong>The value of (-10/3) x (-15/2) x (17/19) x 0 is</strong>', c1:'0', c2:'22.66', c3:'20', c4:'35', a:'c1'});
    bank.push({q:'<strong>The one’s digit of the cube of 53 is:</strong>', c1:'9', c2:'3', c3:'7', c4:'1', a:'c3'});
    bank.push({q:'<strong>What is next in the series: 1, 5, 13, 29, 61?</strong>', c1:'117', c2:'125', c3:'99', c4:'139', a:'c2'});
    bank.push({q:'<strong>The Pythagorean triples whose smallest number is 8:?</strong>', c1:'8, 16 17', c2:'8, 17, 18', c3: '8, 15, 17', c4:'8, 15, 16', a:'c3'});
    bank.push({q:'<strong>Which of the following will have 6 at unit place?</strong>', c1:'19^2', c2:'11^2', c3:'24^2', c4:'13^2', a:'c3'});
    bank.push({q:'<strong>What is next in the series: 13, 57, 911, 1315, 1719?</strong>', c1:'1879', c2:'2931', c3:'2123', c4:'1920', a:'c3'});
    bank.push({q:'<strong>The sum of 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 +19 is:</strong>', c1:'121', c2:'120', c3:'100', c4:'110', a:'c3'});
    bank.push({q:'<strong>If 5278 is squared, then what will be at unit place?</strong>', c1:'8', c2:'7', c3:'6', c4:'4', a:'c4'});
}

function gotinput(button) {
    if(questions < totalQs) {
        scoreD = document.querySelector('#score');
        questions++;

        buttonD = document.querySelector('#b' + button.charAt(1));
        buttonD.blur();

        if(button === set.a) {
            scoreD.style.backgroundColor = 'green';
            score++;
            scoreD.innerHTML = "<p>Correct!</p>";
        } else {
            scoreD.style.backgroundColor = 'red';
            scoreD.innerHTML = "<p>Incorrect!</p>";
        }

        ques = document.querySelector('#ques');
        b1 = document.querySelector('#b1');
        b2 = document.querySelector('#b2');
        b3 = document.querySelector('#b3');
        b4 = document.querySelector('#b4');

        if(questions === totalQs) {
            ques.innerHTML = "<p><strong>Game Over!</strong></p><p>Refresh window for a new round.</p>";
            ques.style.backgroundColor = 'yellow';
            b1.innerHTML = "";
            b2.innerHTML = "";
            b3.innerHTML = "";
            b4.innerHTML = "";
            scoreD.style.backgroundColor = 'yellow';
            scoreD.innerHTML += "<p>Final score: " + score + "/" + questions + "</p>";
            displayMessage(scoreD);
        } else {
            var index = getIndex();
            usedIndex.push(index);
            set = bank[index];
            ques.innerHTML = "<p>Question number " + (questions+1) + "/" + totalQs + "</p><p>" + set.q + "</p>";
            b1.innerHTML = set.c1;
            b2.innerHTML = set.c2;
            b3.innerHTML = set.c3;
            b4.innerHTML = set.c4;
            scoreD.innerHTML += "<p>Score: " + score + "/" + questions + "</p>";
        }
    }
}

function getIndex() {
    var index = Math.floor(Math.random() * bank.length);
    while(done(index)) {
        index = Math.floor(Math.random() * bank.length);
    }

    return index;
}

function done(index) {
    for(var i = 0; i < usedIndex.length; i++) {
        if(usedIndex[i] === index) {
            return true;
        }
    }

    return false;
}

function displayMessage(scoreD) {
    if(score/totalQs === 0.0) {
        scoreD.innerHTML += "<p><strong>Likely you put on all incorrect answers on purpose... Grr...<strong></p>";
    } else if(score/totalQs < 0.4) {
        scoreD.innerHTML += "<p><strong>It's okay... Try again!<strong></p>";
    } else if(score/totalQs < 0.6) {
        scoreD.innerHTML += "<p><strong>Not the best score, not the worst!<strong></p>";
    } else if(score/totalQs < 0.8) {
        scoreD.innerHTML += "<p><strong>Good try!<strong></p>";
    } else if(score/totalQs < 1.0) {
        scoreD.innerHTML += "<p><strong>Great score!<strong></p>";
    } else {
        scoreD.innerHTML += "<p><strong>Awesome!!<strong></p>";
    }
}