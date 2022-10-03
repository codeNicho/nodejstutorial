// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'Hello idiots')
// fs.appendFileSync('notes.txt', 'APPENDED MESSAGE')

// const firstName = require('./utils.js')
// console.log(firstName)

// const add = require('./utils')

// const sum = add(4, -2)
// console.log(sum)

// const validator = require('validator')
const chalk = require('chalk');
const getNotes = require('./notes.js')

msg = getNotes()
// console.log(msg);

// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('https//test.com'))
const greenMessage = chalk.red('Success!!!')
console.log(greenMessage);