(function() {
  'use strict'

  function generateBoard() {
    //JavaScript quirks, we need a separate function to handle clicking a specific
    //cell, see: https://stackoverflow.com/questions/7774636/jquery-event-handler-created-in-loop
    function handleClick(y,z) {
      return function(event) {
          $(`#cell-${y}-${z}`).toggleClass('alive');
      };
    }

    for(var i=0; i<X; i++) {
      var row = $('<div></div>', {
        id: `row-${i}`,
        'class': 'row'
      })[0];

      for(var j=0; j<Y; j++) {
        var newCell = $('<div>', {
          id: `cell-${i}-${j}`,
          'class': 'cell'
        });

        newCell.click(handleClick(i,j));
        row.append(newCell[0]);
      }

      $('#board').append(row);

    }
  }

  $(document).ready(function() {
    generateBoard();
    // runGame();
  });
})();

var X = 10;
var Y = 10;

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

  }, 2000)
}
