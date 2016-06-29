// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


function greaterNum(num1, num2) {
  console.log("The greater number of " + num1 + " and " + num2 + " is " + Math.max(num1, num2) + "." );
}

greaterNum(600, 10928)
greaterNum(649, 84730)


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


function helloWorld(language) {
  if (language == "es") {
    console.log("Hola, Mundo!");
  } else if (language == "de") {
    console.log("Hallo, Welt!");
  } else if (language == "por") {
    console.log("Ola, Mundo!");
  } else {
    console.log("Hello, World!");
  }
}

helloWorld("es")
helloWorld("por")
helloWorld("finnish")


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
  if (score >= 0 && score <= 1.99){
    console.log("Your grade is F");
} else if (score >= 2 && score <= 3.99)
    console.log("Your grade is D");
  else if (score >= 3 && score <= 5.99){
  console.log("Your grade is C");
} else if (score >=6 && score <= 7.99) {
  console.log("Your grade is B");
} else if (score >= 8 && score <= 10) {
  console.log("Your grade is A")
}
}

assignGrade(4)
assignGrade(6.5)
assignGrade(10)

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralize(word, number) {
 if (word == "sheep") {
   console.log(number + " " + word);
} else if (word == "goose" || word == "geese") {
    console.log(number + " " + word);
} else if (number == 1) {
    console.log(number + " " + word);
} else if (number > 1) {
    console.log(number + " " + word + "s");
}
}

pluralize("cat", 6)
pluralize("dog", 1)
pluralize("house", 10)
pluralize("sheep", 50)
pluralize("geese", 6)
