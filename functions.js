// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(number_of_children, partner_name, location, job_title) {
  console.log ("You will be a " + job_title + " in " + location + ", and married to "  + partner_name + " " + "with" + " " + number_of_children + " " + "kids.");
}

tellFortune(2, "Ana", "Toronto", "Web Developer")
tellFortune(2, "Maila", "Toronto", "Software Engineer")
tellFortune(3, "Radojka", "Toronto", "Full Stack Developer")


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

5
function calculateAge(birth_year) {
  var today = new Date();
  var year = today.getFullYear();

  console.log ("You are " + (year - birth_year) + " years old.")
}

calculateAge(1973)
calculateAge(1984)
calculateAge(1992)


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount_per_day) {
  total_snacks = (365 * amount_per_day) * age;

  console.log("You will need " + Math.round(total_snacks) + " snacks to last you until the ripe age of " + age + ".");
}

calculateSupply(21, 2.5)
calculateSupply(35, 1.2)
calculateSupply(76, 3.3)


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


function calcCircumference(radius) {
  var pi = 3.14
  var circumference = pi * radius

  console.log("The circumference is " + circumference);
}

calcCircumference(5)
calcCircumference(10)
calcCircumference(20)


function calcArea(radius) {
  var pi = 3.14;
  var area =  pi * Math.pow(radius, 2);

  console.log("The area is " + area + ".")
}

calcArea(5)
calcArea(50)
calcArea(120)


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
