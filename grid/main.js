
  let chess;
  var angle = 0;
  let size = 8;
  var position;
  var faceDirection;
  
  window.onload = () => {
    drawBoard();
}
  
$("#direction").keypress(function () {
    setTimeout(checkDirection, 50)
})
  /*
    Try another random solution
  */
  function checkDirection() {
    var move = $('#direction').val();
    move = move.substring(move.length - 1, move.length);
    console.log(move);

   if( move.toLowerCase()=='l')
   {
       console.log(move);
       $("#" + position).empty();
       faceDirection = (faceDirection + 3) % 4;
       $("#" + position).append("<img src='images/hand.png' id='hand' class='rotate" + faceDirection + "'>");
   }
  else if( move.toLowerCase()=='r')
   {
       console.log(move);
       $("#" + position).empty();
       faceDirection = (faceDirection + 1) % 4;
       $("#" + position).append("<img src='images/hand.png' id='hand' class='rotate" + faceDirection + "'>");

   }
   else if (move.toLowerCase() =='f') {
    var changedPoint = directionChange();
    if (checkRange(changedPoint)) {
        alert("not grid ahead!");
    } else {
        $("#" + position).empty();
        position += changedPoint;
        $("#" + position).append("<img src='images/hand.png' id='hand' class='rotate" + faceDirection + "'>");
    }
} else if (move.toLowerCase() == 'b') {

    var changedPoint = -directionChange();
    if (checkRange(changedPoint)) {
        alert("no grid ahead!");
    } else {
        $("#" + position).empty();
        position += changedPoint;
        faceDirection = (faceDirection + 2) % 4;
        $("#" + position).append("<img src='images/hand.png' id='hand' class='rotate" + function changeColoumn() {
          document.getElementById(currentPoint).style.backgroundColor = "rgb(16 2 30 / 30%)";
      } + "'>");
    }
} else {
    alert("Pass correct direction");
}
  }
  function changeColoumn() {
    document.getElementById(position).style.backgroundColor = "rgb(16 2 30 / 30%)";
}
  
  function checkRange(extra) {
    var temp = position + extra;
    if (Math.floor((temp) / 10) > 8 || Math.floor((temp) / 10) < 1 || Math.floor((temp) % 10) > 8 || Math.floor((temp) % 10) < 1) {
        return true;
    }
    return false;
}
 
function directionChange() {
    if (faceDirection == 0) {
        return -10;
    } else if (faceDirection == 1) {
        return 1;
    } else if (faceDirection == 2) {
        return 10;
    } else if (faceDirection == 3) {
        return -1;
    }
    return -10;
}
  
  /*
    Paints the chess board
  */
  function drawMainBoard() {
    let board = document.getElementById("main-board"),
        classes = ["white-square", "dark-square"];
    
    for(let row = 0; row < size; row++) {
      let c = row % 2;
  
      for(let col = 0; col < size; col++) {
        let square = document.createElement("div");
        
        square.className = classes[c] + " " + "square";
        square.id = `${row}, ${col}`;
        
        board.appendChild(square);
        c = (c + 1) % 2;
      }
    }
    board.getElementById(2,3).appendChild(
        "<img src='images/hand.png'>"
    );
  }

  function drawBoard() {
    var i;
    for (i = 1; i < 9; i++) {
        console.log(i);
        $("table").append(
            " <tr>" +
            "<td id='" + i + "1'></td>" +
            "<td id='" + i + "2'></td>" +
            "<td id='" + i + "3'></td>" +
            "<td id='" + i + "4'></td>" +
            "<td id='" + i + "5'></td>" +
            "<td id='" + i + "6'></td>" +
            "<td id='" + i + "7'></td>" +
            "<td id='" + i + "8'></td>" +
            "</tr>"
        );
    }
    position = 33;
    faceDirection = 3;
    $("#33").append(
        "<img src='images/hand.png' id='hand' class='rotate3'>"
    );
}
   
  /*
    Clears the chess board
  */
  function clearBoard() {
   
  }