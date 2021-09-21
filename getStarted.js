// const inquirer = require('inquirer')
// const chalk = require("chalk");

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(chalk.greenBright(`Hi ${answers['name']}!`))
// })

// exports.car = {
//   brand: 'Ford',
//   model: 'Fiesta'
// }

// path module
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// os module
// const os = require('os');
// const totalMemory = os.totalmem();
// console.log(totalMemory);
// console.log(os.freemem());

// fs module
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// const filesAsync = fs.readdir('.../', function(err, files) {
//   if (err) console.log('error xd ', err)
//   else console.log("result: ", files)
// })


//events module
const EventEmitter = require('events'); 
const emitter = new EventEmitter();

//adding a listener
emitter.on('messageLogged', function(){
  console.log('se cargo el mensaje');
})

// raising an event
emitter.emit('messageLogged');  

// momento cambio