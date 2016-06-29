// Exercises: for loops

// EXERCISE: The even/odd reporter

for (n = 0; n <= 20; n++) {
  if (n % 2 == 0)
  console.log(n + " is even.")
  else if (n % 2 != 0)
  console.log(n + " is odd.")
}
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// EXERCISE: Multiplication Tables

for (n = 0; n <= 10; n++) {
  result = n * 9
  console.log(n + " * 9 = " + result)
}


// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// EXERCISE: The Grade Assigner

function assignGrade(grade) {
  if (grade >= 60 && grade <= 69) {
    console.log("For " + grade + " you got a C.");
  } else if (grade >= 70 && grade <= 79) {
    console.log("For " + grade + " you got a B");
  } else if (grade >= 80 && grade <= 89) {
    console.log("For " + grade + " you got an A");
  } else if (grade >= 90 && grade <= 100) {
    console.log("For " + grade + " you got an A+");
  }
}

assignGrade(87)
assignGrade(64)
assignGrade(95)







// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
