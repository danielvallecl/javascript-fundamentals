// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

number_of_children = 3
partner_name = "Ana"
location = "Toronto"
job_title =  "Web Developer"

console.log ("You will be a " + job_title + " in " + location + ", and married to "  + partner_name + " " + "with" + " " + number_of_children + " " + "kids.");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.

  var current_year = 2016
  var birth_year = 1970

  console.log ("You are " + (current_year - birth_year) + " years old.");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

  age = 35;
  amount_per_day = 1;
  total_snacks = (365 * amount_per_day) * age;

  console.log("You will need " + Math.round(total_snacks) + " snacks to last you until the ripe age of " + age + ".");


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var pi = 3.14
var radius = 10
var circumference = pi * radius

console.log("The circumference is " + circumference);


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

temperature = 95
celsius = (temperature - 32) * 5/9;
console.log("The temperature in celsius is " + Math.round(celsius));
