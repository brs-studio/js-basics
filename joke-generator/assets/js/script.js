/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 26-05-2023 
Library / Component: Script file
Description: Joke generator
(c) Copyright by BRS with Nyros. 
**/

/* Get Our Elements */
const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("getJoke");

// Jokes Array
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why did the bicycle fall over? It was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I'm on a seafood diet. I see food, and I eat it!",
    "I invented a new word: plagiarism!",
    "Why did the math book look sad? Because it had too many problems!",
    "Why don't vampires go to Starbucks? They prefer to have their brews!",
    "What's orange and sounds like a parrot? A carrot!",
    "I got a job at a bakery because I kneaded dough!",
];

// Get a random index based on the length of the jokes array and use that index to get a joke from array
function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  jokeElement.innerText = joke;
}

// event listener
jokeBtn.addEventListener('click', getRandomJoke)

// Init function
getRandomJoke();