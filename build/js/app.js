(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// business logic

// entry constructor

function Entry (title, text) {
  this.title = title;
  this.text = text;
}

// method of counting characters in entry

Entry.prototype.countCharacters = function(text) {
  return text.length();
}

exports.Entry = Entry;

},{}],2:[function(require,module,exports){

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
    var EntryLength = newEntry.countCharacters(text);
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

Entry.prototype.countCharacters = function(text) {
  return text.length();
}

exports.Entry = Entry;

},{"./../js/journal.js":1}]},{},[2]);
