
// interface logic

//requires

var Entry = require('./journal.js').Entry;

// get values from input fields on submit

$(function() {
  event.preventDefault();

  $('.journalInput').submit(function(event) {
    var title = $('.title').val();
    var text = $('text').val();
    var newEntry = new Entry(title, text);

    var EntryLength = newEntry.countCharacters(text);

    $('#entries').append('<article><h3>' + title + '<h3><p>' + text + '</p><p>' + EntryLength + ' letters</p></article>');

  });
});

// run char counting method

// append entry to #entries div
