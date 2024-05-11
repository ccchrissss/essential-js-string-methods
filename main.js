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



// .includes()
// explanation: returns a true or false if the called upon string contains the specified substring
// use: check if a string contains a substring

const str2 = 'Stone Cold Steve Austin'
const str3 = 'Steve Jobs'
const str4 = 'Stephan Marbury'

console.log( str2.includes('Steve') )
console.log( str3.includes('Steve') )
console.log( str4.includes('Steve') )



// .indexOf()
// explanation: returns the index of the specified substring if its contained within the called upon string
// returns -1 if the substring does not exist within the string
// use: check if  a string contains a substring

console.log( str2.indexOf('Steve') )
console.log( str3.indexOf('Steve') )
console.log( str4.indexOf('Steve') )


