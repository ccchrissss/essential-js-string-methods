// ~~~~~ String Methods and Properties! ~~~~~

// .length
// note that this is a property NOT a method!
// explanation: returns the number of characters in a string
// use: compare the size of multiple strings 

const str = 'This town aint big enough for the two of us'
console.log(str.length)



// .trim()
// explanation: removes white space from the beginning and end of a string
// does NOT mutate the original string
// use: processing user input fields

const str1 = '     oh hey Jimmy  '
console.log('str1: ', str1.length)
console.log(str1.trim())
console.log('str1: ', str1.trim().length)


