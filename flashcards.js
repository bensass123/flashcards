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
      if err throw err;
      else console.log('saving cloze card');
        });
     }
    else {
      console.log('failure');
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
      if err throw err;
      else console.log('saving basic card');
        });
  }

  front() {
    return this.front;
  }
  back() {
    return this.back;
  }
}