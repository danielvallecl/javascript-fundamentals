// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
title: "Feijoada",
servings: 5,
ingredients: ["Beans", "Oranges", "Sausage", "Dried Meat"]
};

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
  {title: "The Divine Comedy", author: "Dante Alighieri", alreadyRead: true},
  {title: "War & Peace", author: "Leon Tolstoy", alreadyRead: false}
]

for (i = 0; i < books.length; i++) {
  if (books[i].alreadyRead === true) {
    console.log("You have read " + books[i].title + " by " + books[i].author)
}  else
    console.log("You have not read " + books[i].title + " by " + books[i].author);
};


// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

favourite_movie = {title: "Mouchette", director: "Robert Bresson", duration: 90, cast: ["Nadine Nortier", " Jean-Claude Guilbert"]}

function print_movie(movie_title) {
  console.log(favourite_movie.title + " lasts for " + favourite_movie.duration + "minutes." + " Stars: " + favourite_movie.cast);
};

print_movie(favourite_movie)
