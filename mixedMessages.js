// Greeting based on time of day
// Ask question
// Encouragement

let message = '';

const pieces = {
    greetings: [
        'Good morning! ',
        'Good afternoon! ',
        'Good evening! ',
        'Hello! '
    ],
    questions: [
        'How are you?',
        'How is it going?',
        'How do you feel?',
        "What's up?",
        "What's new?",
        "How's it hanging?"
    ]
}

function addGreeting (hour) {
    if (hour >= 5 && hour <= 12) {
        message += pieces.greetings[0];
    } else if (hour > 12 && hour <= 17) {
        message += pieces.greetings[1];
    } else if (hour > 17 && hour <= 23) {
        message += pieces.greetings[2];
    } else {
        message += pieces.greetings[3];
    }
}

function addQuestion () {
    message += pieces.questions[Math.floor(Math.random() * pieces.questions.length)]
}

const d = new Date();
const h = d.getHours();

addGreeting(h);
addQuestion();

console.log(message);