
// business logic

// entry constructor

function Entry (title, text) {
  this.title = title;
  this.text = text;
}

// method of counting characters in entry

Entry.prototype.countCharacters = function() {
  return this.text.length;
}

exports.Entry = Entry;
