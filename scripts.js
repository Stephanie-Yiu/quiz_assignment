const hello = document.getElementById('hello-btn');
const askNameBox = document.getElementById('askNameBox');
const askNameQuestion = document.getElementById('askNameQuestion');
const nameInputBox = document.getElementById('nameInputBox');
const enterName = document.getElementById('enter');
const wellcomeBox = document.getElementById('wellcomeBox');
const wellcomeText = document.getElementById('wellcomeText');
const scoreBox = document.getElementById('scoreBox');
const scoreText = document.getElementById('scoreText');
const questionBox = document.getElementById('questionBox');
const questionText = document.querySelector('#questionText');
const answerOne = document.querySelector('#answerOne');
const answerTwo = document.querySelector('#answerTwo');
const answerThree = document.querySelector('#answerThree');
const answerFour = document.querySelector('#answerFour');
const afterAnswerText = document.querySelector('#afterAnswerText');
const endding = document.querySelector('#endding');

let score = 0;
function correct() {
  score++;
  scoreText.innerHTML = `Mark: ${score}/ ${quizArray.length}`;
  afterAnswerText.innerHTML = 'CONGREGATION !!! &#129321;';
}

const quizArray = [
  {
    question: 'What is 1+1?',
    answers: ['1', '2', '3', '4'],
    correctAnswer: '2',
  },

  {
    question: 'What is 2+1?',
    answers: ['3', '2', '4', '1'],
    correctAnswer: '3',
  },
];

endding.classList.add('hide');

askNameBox.classList.add('hide');
wellcomeBox.classList.add('hide');
scoreBox.classList.add('hide');

scoreText.innerHTML = `Mark: ${score} / ${quizArray.length}`;

hello.addEventListener('click', askName);

function askName() {
  askNameBox.classList.remove('hide');

  askNameQuestion.innerHTML = 'Who are you??? ';
}

enterName.addEventListener('click', checkName);

function checkName() {
  wellcomeBox.classList.remove('hide');
  wellcomeBox.classList.add('show-up');
  if (nameInputBox.value == 0) {
    wellcomeText.innerHTML = 'Please tell me your name !!!';
  } else {
    wellcomeText.innerHTML = `Welcome ${nameInputBox.value}`;
    askNameBox.classList.remove('show-up');
    askNameBox.classList.add('hide');
    scoreBox.classList.remove('hide');
    hello.classList.add('hide');
    showQuestion();
  }
}

function randomize(values) {
  let index = values.length,
    randomIndex;

  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;

    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
} //random the anwser && question;

let randomQ = randomize(quizArray);

let currentQindex = 0;
let randomAnwser = '';

function showQuestion() {
  questionText.innerHTML = `Question(${currentQindex})  <br>${randomQ[currentQindex].question}`;
  let randomAnswer = randomize(randomQ[currentQindex].answers);

  answerOne.innerHTML = `${randomAnswer[0]}`;
  answerTwo.innerHTML = `${randomAnswer[1]}`;
  answerThree.innerHTML = `${randomAnswer[2]}`;
  answerFour.innerHTML = `${randomAnswer[3]}`;

  answerOne.value = randomAnswer[0];
  answerTwo.value = randomAnswer[1];
  answerThree.value = randomAnswer[2];
  answerFour.value = randomAnswer[3];

  answerOne.addEventListener('click', checkAnswer);
  answerTwo.addEventListener('click', checkAnswer);
  answerThree.addEventListener('click', checkAnswer);
  answerFour.addEventListener('click', checkAnswer);
}

function checkAnswer() {
  if (this.innerHTML == randomQ[currentQindex].correctAnswer) {
    correct();
  }
  if (this.innerHTML != randomQ[currentQindex].correctAnswer) {
    afterAnswerText.innerHTML = 'Wrong';
  }

  next();
}

function next() {
  afterAnswerText.classList.add('hide');
  currentQindex++;
  if (currentQindex < quizArray.length) {
    showQuestion();
  }
  if (currentQindex == quizArray.length) {
    endding.classList.remove('hide');
    questionBox.classList.add('hide');
    hello.classList.remove('hide');
  }
}

// showQuestion();

// if (score == quizArray.length) {
//     endding.classList.remove('hide');
//   }
