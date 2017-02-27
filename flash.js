var inquirer = require("inquirer");
var fs = require('fs');
var response, response2;
var basicArray = [];
var clozeArray = [];


class BasicCard {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }

  front() {
  	return this.front;
  }
  back() {
  	return this.back;
  }
}

class ClozeCard {
  constructor(text, cloze) {
  	if (text.includes(cloze)){
  		console.log('creating');
	    this.text = text;
	    this.cloze = cloze;
	}
	else {
		return null;
	}
  }

  get partial() {
  	//fix this
  	return this.text.replace(this.cloze,'...');
  }

  get fullText() {
  	return this.text;
  }
}


var basicFile = fs.readFileSync('basic.txt').toString();
var clozeFile = fs.readFileSync('cloze.txt').toString();

var basicArray = basicFile.split('BASIC');
var clozeArray = clozeFile.split('CLOZE');
basicArray.splice(0,1);
clozeArray.splice(0,1);

console.log('clozeArray length: ' + clozeArray.length);

// var front = b.substring(b.lastIndexOf("FRONT --- ")+10,b.lastIndexOf(" --- BACK"));


var basicFrontArray = basicArray.map(function(b){
	return b.substring(b.lastIndexOf("FRONT --- ")+10,b.lastIndexOf(" --- BACK"));
  });

console.log('\r\n Basic Fronts:')
for (i in basicFrontArray) {
	console.log(basicFrontArray[i]);
}

var clozeFrontArray = clozeArray.map(function(b){
	return b.substring(b.lastIndexOf("FRONT --- ")+10,b.lastIndexOf(" --- BACK"));
  });

console.log('\r\n Cloze Fronts:')
for (i in clozeFrontArray) {
	console.log(clozeFrontArray[i]);
}

var basicBackArray = basicArray.map(function(b){
	return b.substring(b.lastIndexOf("BACK --- ")+9, b.length).trim();
  });

console.log('\r\n Basic Backs:')
for (i in basicBackArray) {
	console.log(basicBackArray[i]);
}

var clozeBackArray = clozeArray.map(function(b){
	return b.substring(b.lastIndexOf("BACK --- ")+9, b.length).trim();
  });

console.log('\r\n Cloze Backs:')
for (i in clozeBackArray) {
	console.log(clozeBackArray[i]);
}


//create array of objects
var clozeCards = [];
var basicCards = [];

for (i in basicFrontArray){
	var a = new BasicCard(basicFrontArray[i], basicBackArray[i]);
	basicCards.push(a);
}

for (i in clozeFrontArray){
	var a = new ClozeCard(clozeFrontArray[i], clozeBackArray[i]);
	clozeCards.push(a);
}




console.log('Cloze questions');
for (i in clozeCards) {
	console.log(clozeCards[i].partial);
}

console.log('Cloze full texts');
for (i in clozeCards) {
	console.log(clozeCards[i].fullText);
}


// inquirer.prompt([
//   {
//     type: "list",
//     message: "Cloze Flashcard or Basic Flashcard",
//     choices: ['Cloze','Basic'],
//     name: "type"
//   },
//   {
//     type: "input",
//     message: "Please enter full answer of flashcard.",
//     name: "one"
//   },
//   {
//   	type: "input",
//     message: "Please enter the answer. (If Cloze enter correct term to fill in the blank.)",
//     name: "two"
//   }	

// ]).then(function(card, err) {
// 	if (err) {
// 		console.log(err);
// 	}
//   // initializes the variable newguy to be a programmer object which will take
//   // in all of the user's answers to the questions above

//   var c = new ClozeCard(card.one, card.two);
//   if (card.type === 'Cloze' && c) {
//       response = `CLOZE --- FRONT --- ${card.one} --- BACK --- ${card.two} \r\n\r\n`;
//       fs.appendFile('cloze.txt', response, function(err) {
//           if (err) {
//               console.log(err);
//           }
//       });

//   	console.log('Cloze');
//   	console.log(`${card.one} --- ${card.two}`);
//   }
//   else {
//   	response = `BASIC --- FRONT --- ${card.one} --- BACK --- ${card.two} \r\n\r\n`;
//   	fs.appendFile('basic.txt', response, function (err) {
//   		if (err) {
//   			console.log(err);
//   		}
// 	});
//   	console.log('Basic');
//   	console.log(`${card.one} --- ${card.two}`);
//   }

// });

