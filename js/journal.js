
// business logic

// entry prototype

function entry (title, text) {
  this.title = title;
  this.text = text;
}

// method of counting characters in entry

entry.countCharacters = function(text) {
  return text.length();
}
