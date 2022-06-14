let myName = prompt('What is your name?')

// if myName is truthy the if will run
// otherwise the else will run
if (myName) {
  console.log(`Hello, ${name}!`)
} else {
  console.log('Hello, stranger!')
}

// This is a condition chain
// Only the first thing that's true runs
// Otherwise only the else runs at the end
if (myName.length > 5) {
  console.log(`Your name is too long`)
} else if (myName.length < 3) {
  console.log(`Your name is too short`)
} else {
  // I know here for sure that the name is:
  // - not larger than 5
  // - not smaller than 3
  // any name between 3 and 5 will end here
  console.log(`Your name is just right`)
}
