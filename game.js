let allQuestion = [{
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
},
{
    'question': 'wie ist die frage',
    'answer_1': 'Antwort 1',
    'answer_2': 'Antwort 2',
    'answer_3': 'Antwort 3',
    'answer_4': 'Antwort 4',
    'right_answer': 3
}];




function loadQuestion(){
  document.getElementById('question').innerHTML = allQuestion[0][question];
  document.getElementById('answer1').innerHTML = allQuestion['answer_1'];  
  document.getElementById('answer2').innerHTML = allQuestion['answer_2'];
  document.getElementById('answer3').innerHTML = allQuestion['answer_3'];
  document.getElementById('answer4').innerHTML = allQuestion['answer_4'];
right_answer = allQuestion['right_answer'];
}

function answer(a){
    let selcet_answer; 
    if(a == 1 ){
        selcet_answer = answer_1;
    }else if (a == 2){
        selcet_answer = answer_2;
    }else if (a == 3){
        selcet_answer = answer_3;
    }else if (a == 4){
        selcet_answer = answer_4;
    }

    

    if (selcet_answer == answer_3){
        document.getElementById('danger').classList.add('d-none');
        document.getElementById('success').classList.remove('d-none');
        
    }else {
        document.getElementById('success').classList.add('d-none');
        document.getElementById('danger').classList.remove('d-none');
        
    }



}
 function nextQuestion()