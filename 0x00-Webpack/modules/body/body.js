import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(function() {
  let count = 0;

  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  function updateCounter() {
      count++;
      $('#count').text(`${count} clicks on the button`);
  }

  $('button').on('click', _.debounce(updateCounter, 1000));

});
