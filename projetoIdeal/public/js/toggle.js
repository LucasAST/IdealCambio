$(document).ready(function () {
  $('#toggleOne, #toggleTwo, #toggleThree, #toggleFour').hide();

  $('#btnToggleOne').click(function () {
    $('#toggleOne').toggle()
  });

  $('#btnToggleTwo').click(function () {
    $('#toggleTwo').toggle()
  });

  $('#btnToggleThree').click(function () {
    $('#toggleThree').toggle()
  });


  $('#btnToggleFour').click(function () {
    $('#toggleFour').toggle()
  });

});