const score = document.getElementById('score');
const grading = document.getElementById('ranking');
const username = document.getElementById('username');

let scoreVal = localStorage.getItem('points');
score.innerText = scoreVal;

const resultGrading = (score) => {
if(score >= 18 && score <= 20) return 'A';
else if(score < 18 && score >= 14) return 'B';
else if(score < 14 && score >=10) return 'C';
else if(score < 10 && score >= 5) return 'D';
else return 'F';
}

grading.innerText = resultGrading(scoreVal);

//display username in results table
username.innerText = localStorage.getItem('username');
