let allQuestion = [{
    'question': 'Wann entdeckte Christoph Kolumbus Amerika?',
    'answer_1': '1482',
    'answer_2': '1492',
    'answer_3': '1499',
    'answer_4': '1502',
    'right_answer': 2
},
{
    'question': 'wie ist die frage',
    'answer_1': 'Antwort 1',
    'answer_2': 'Antwort 2',
    'answer_3': 'Antwort 3',
    'answer_4': 'Antwort 4',
    'right_answer': 3
},
{
    'question': 'wie ist die frage',
    'answer_1': 'Antwort 1',
    'answer_2': 'Antwort 2',
    'answer_3': 'Antwort 3',
    'answer_4': 'Antwort 4',
    'right_answer': 3
}];


let questionNummer = 0;
let progress = 0;
let right_answer;




function loadQuestion() {
    document.getElementById('question').innerHTML = allQuestion[questionNummer - 1][`question`];
    document.getElementById('answer1').innerHTML = allQuestion[questionNummer - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestion[questionNummer - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestion[questionNummer - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestion[questionNummer - 1]['answer_4'];
    right_answer = allQuestion[0]['right_answer'];
}

function answer(a) {

    if (a == right_answer) {

        document.getElementById('success').classList.remove('d-none');
        document.getElementById('next_Question').classList.remove('d-none');
        document.getElementById('danger').classList.add('d-none');
    } else {

        document.getElementById('success').classList.add('d-none');
        document.getElementById('danger').classList.remove('d-none');
    }
}


function nextQuestion() {
    hideElemetnt()
    if(questionNummer == allQuestion.length){
        finisch()
    }else{
         questionNummer = questionNummer + 1;
         progress = Math.round((questionNummer / allQuestion.length) * 100); 
        document.getElementById('progress-bar').innerHTML = progress + `%`;
        document.getElementById('progress-bar').style.width = progress + `%`;
        loadQuestion() 
     }
}



function hideElemetnt() {
    document.getElementById('next_Question').classList.add('d-none');
    document.getElementById('success').classList.add('d-none');
}

function finisch(){
    document.getElementById('all').innerHTML = `Du hast es geschafft `;
    document.getElementById('next_Question'). innerHTML = `Noch eine Runde`;
    document.getElementById('next_Question').classList.remove('d-none');
}



