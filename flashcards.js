var inquirer = require("inquirer");
var fs = require('fs');
var jsonfile = require('jsonfile');

class ClozeCard {
  constructor(text, cloze) {
    console.log(text + ' ' + cloze);
    if (text.includes(cloze)){
      console.log('creating');
      this.text = text;
      this.cloze = cloze;
      jsonfile.writeFile('cloze.json', this, {flag: 'a'}, function (err) {
        if (err){
          console.log(err);
        } 
        else {
          console.log('saved to cloze.json'); 
        }
      });  
     }
    else {
      console.log('Failure, cloze doesn\'t appear in full text. Card not saved.');
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

class BasicCard {
  constructor(front, back) {
    this.front = front;
    this.back = back;
    jsonfile.writeFile('basic.json', this, {flag: 'a'}, function (err) {
        if (err){
          console.log(err);
        } 
        else {
          console.log('Saved to basic.json');
        }
        });
  }

  front() {
    return this.front;
  }
  back() {
    return this.back;
  }
}