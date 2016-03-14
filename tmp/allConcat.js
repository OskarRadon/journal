
// interface logic

//requires

var Entry = require('./../js/journal.js').Entry;

// clear inputs
function resetFields() {
  $("input.title").val("");
  $("textarea.text").val("");
}


$(function() {
// get values from input fields on submit
  $('form.journalInput').submit(function(event) {

    event.preventDefault();

    var title = $('input.title').val();
    var text = $('textarea.text').val();
    var newEntry = new Entry(title, text);
    // run char counting method
    var EntryLength = newEntry.countCharacters();
    // append entry to #entries div
    $('div#entries').prepend('<article><h3>' + title + '</h3><p>' + text + '</p><p>' + EntryLength + ' characters</p></article>');

    resetFields();

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
  return this.text.length;
}

exports.Entry = Entry;
