// ~~~~~ String Methods and Properties! ~~~~~

// .length
// note that this is a property NOT a method!
// explanation: returns the number of characters in a string
// str.length   // no parameters because it's a property!
// use: compare the size of multiple strings 

const str = 'This town aint big enough for the two of us'
console.log(str.length)



// .trim()
// explanation: removes white space from the beginning and end of a string
// does NOT mutate the original string
// str.trim()   // no parameters
// use: processing user input fields

const str1 = '     oh hey Jimmy  '
console.log('str1: ', str1.length)
console.log(str1.trim())
console.log('str1: ', str1.trim().length)



// .includes()
// explanation: returns a true or false if the called upon string contains the specified substring
// str.includes(searchString)
// str.includes(searchString, position)     // position: the index within the string at which to begin the search
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
// str.indexOf(searchString)
// str.indexOf(searchString, position)    // position: specifies an index at which to begin the search. searchString may be found at an index equal to or greater than the specified position
// use: check if  a string contains a substring

console.log( str2.indexOf('Steve') )
console.log( str3.indexOf('Steve') )
console.log( str4.indexOf('Steve') )



// .toUpperCase()
// explanation: returns a string with all letters capitalized
// str.toUpperCase()    // no parameters
// use: eliminate case typos before evaluating string with another method

str5 = 'Hello there, General Kenobi'

console.log( str5.toUpperCase() )



// .toLowerCase()
// explanation: returns a string with all letters lower case
// str.toLowerCase()    // no parameters
// use: eliminate case typos before evaluating string with another method

console.log( str5.toLowerCase() )



// .replace()
// explanation: replaces the first occurence of a pattern with the specified replacement
// str.replace(pattern, replacement)
// use: change a user's name in a block of text that will be displayed to individual viewers

str6 = 'Harry Potter and the blank'
strReplacement = 'Prisoner of Azkaban'

console.log( str6.replace('blank', strReplacement))



// .slice()
// explanation: grabs a section of a string starting with the supplied index until the last index, or until the indexEnd if specified
// str.slice(indexStart)
// str.slice(indexStart, indexEnd)
// use: extract a substring of a name after a known punctuation mark in a string

let str7 = 'Hello, this is my name: George Q Georgeson'
let lastName = str7.slice(24)
let firstName = str7.slice(24, 30)
let fullName = str7.slice(str7.indexOf(':') + 2)

console.log(lastName)
console.log(firstName)
console.log(fullName)



