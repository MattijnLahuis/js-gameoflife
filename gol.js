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
  // setInterval(function() {
    var boardValues = [];
    for(var i=0; i<X; i++) {
      var row = [];
      for(var j=0; j<Y; j++) {
        if($(`#cell-${i}-${j}`).hasClass('alive')) {
          row.push(false);
        } else {
          row.push(true);
        }

        console.log(i + "-" + j + " has " + numberOfNeighbors(i,j) + " neighbors");
      }
      boardValues.push(row);
    }

    for(var i=0;i<boardValues.length;i++) {
      var row = boardValues[i];
      for(var j=0;j<row.length;j++) {
        var cell = row[j];

        if(cell) {
          $(`#cell-${i}-${j}`).addClass('alive');
        } else {
          $(`#cell-${i}-${j}`).removeClass('alive');
        }
      }
    }

  // }, 2000)
}

function numberOfNeighbors(x, y) {
  var neighbors = 0;
  //make sure we don't count the cell itself, only it's neighbors
  if($(`#cell-${x}-${y}`).hasClass('alive')) {
    neighbors--;
  }


  //to check for neighbors, we have to look around x and y 1 cell in every direction
  for(var i=x-1; i<=x+1; i++) {
    for(var j=y-1; j<=y+1; j++) {
      //make sure we don't go outside of the board
      if(i>=0 && i<X && j>=0 && j<Y) {
        if($(`#cell-${i}-${j}`).hasClass('alive')) {
          neighbors++;
        }
      }
    }
  }
  return neighbors;
}
