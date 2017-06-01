(function() {
  'use strict'

  $(document).ready(function() {
    var X = 20;
    var Y = 20;

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
  });
})();
