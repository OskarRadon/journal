
// interface logic

//requires

var Entry = require('./../js/journal.js').Entry;

// get values from input fields on submit

$(function() {

  $('form.journalInput').submit(function(event) {
    var title = $('input.title').val();
    var text = $('textarea.text').val();
    var newEntry = new Entry(title, text);
    // run char counting method
    var EntryLength = newEntry.countCharacters();
    // append entry to #entries div
    $('div#entries').prepend('<article><h3>' + title + '<h3><p>' + text + '</p><p>' + EntryLength + ' characters</p></article>');

    event.preventDefault();
  });
});
