(function() {
  'use strict'

  var X = 10;
  var Y = 10;

  function generateBoard() {

    for(var i=0; i<X; i++) {
      var row = $('<div></div>', {
        id: `row-${i}`,
        'class': 'row'
      })[0];

      for(var j=0; j<Y; j++) {
        var newCell = $('<div>', {
          id: `cell-${i}-${j}`,
          'class': 'cell'
        })[0];

        row.append(newCell);
      }

      $('#board').append(row);

    }
  }

  function runGame() {
    setInterval(function() {
      var boardValues = [];
      for(var i=0; i<X; i++) {
        var row = [];
        for(var j=0; j<Y; j++) {
          if($(`#cell-${i}-${j}`).hasClass('alive')) {
            row.push(false);
          } else {
            row.push(true);
          }
          $(`#cell-${i}-${j}`).toggleClass('alive');
        }
        boardValues.push(row);
      }
      console.log(boardValues);


    }, 2000)
  }



  $(document).ready(function() {
    generateBoard();
    runGame();
  });
})();
