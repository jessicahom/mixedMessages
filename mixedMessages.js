// Greeting based on time of day
// Ask question
// Encouragement

let message = '';

function addGreeting (hour) {
    if (hour >= 5 && hour <= 12) {
        message += 'Good morning!';
    } else if (hour > 12 && hour <= 17) {
        message += 'Good afternoon!';
    } else if (hour > 17 && hour <= 23) {
        message += 'Good evening!';
    } else {
        message += 'Hello!';
    }
}

addGreeting(0);

console.log(message);