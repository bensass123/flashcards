var inquirer = require("inquirer");
var fs = require('fs');
var response, response2;


class Basic {
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

class Cloze {
  constructor(text, cloze) {
    this.text = text;
    this.cloze = cloze;
  }

  cloze() {
  	return this.cloze;
  }

  text() {
  	return this.text;
  }
}

inquirer.prompt([
  {
    type: "list",
    message: "Cloze Flashcard or Basic Flashcard",
    choices: ['Cloze','Basic'],
    name: "type"
  },
  {
    type: "input",
    message: "Please enter front of flashcard (use ... to indicate blanks in question if cloze, if Basic enter question.",
    name: "one"
  },
  {
  	type: "input",
    message: "Please enter the answer. (If Basic then enter answer, If Cloze enter correct term to fill in the blank.",
    name: "two"
  }	

]).then(function(card, err) {
	if (err) {
		console.log(err);
	}
  // initializes the variable newguy to be a programmer object which will take
  // in all of the user's answers to the questions above
  if (card.type === 'Cloze') {
  	if(card.one.includes('...')) {
	  	response = `CLOZE --- FRONT --- ${card.one} --- BACK --- ${card.two} \r\n\r\n`;
	  	fs.appendFile('cloze.txt', response, function (err) {
	  		if (err) {
	  			console.log(err);
	  		}
		});
	 }
	 else {
	 	console.log('Error: You did not include ... in your front of Flashcard entry. Your flashcard was not stored.');
	 }
  	console.log('Cloze');
  	console.log(`${card.one} --- ${card.two}`);
  }
  else {
  	response = `BASIC --- FRONT --- ${card.one} --- BACK --- ${card.two} \r\n\r\n`;
  	fs.appendFile('basic.txt', response, function (err) {
  		if (err) {
  			console.log(err);
  		}
	});
  	console.log('Basic');
  	console.log(`${card.one} --- ${card.two}`);
  }

});

