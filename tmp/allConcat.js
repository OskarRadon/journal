
// interface logic

//requires

var Entry = require('./../js/journal.js').Entry;

// get values from input fields on submit

$(function() {

  $('.journalInput').submit(function(event) {
    var title = $('.title').val();
    var text = $('.text').val();
    var newEntry = new Entry(title, text);
    // run char counting method
    var EntryLength = newEntry.countCharacters();
    // append entry to #entries div
    $('#entries').prepend('<article><h3>' + title + '<h3><p>' + text + '</p><p>' + EntryLength + ' characters</p></article>');

    event.preventDefault();
  });
});


// business logic

// entry constructor

function Entry (title, text) {
  this.title = title;
  this.text = text;
}

// method of counting characters in entry

Entry.prototype.countCharacters = function() {
  return this.text.length();
}

exports.Entry = Entry;
