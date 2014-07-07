var order = [];

$('#pianokeys').on("mousedown", "div", function(){
  $(this).addClass('highlight');
  addKey($(this).text())
});

$('#pianokeys').on("mouseup", "div", function(){
  $(this).removeClass('highlight');
});

$('#clear').on("click", function(){
  clearOrder();
});

$('#replay').on("click", function(){
  replayOrder();
});

function addKey(id) {
  order.push(id);
  var current = $('#displayOrder').html();
  if (current.length > 0) {
    current += " ";
    $('#displayOrder').html(current + id);
  }
  else {
    $('#displayOrder').html(id);
  }
}

function clearOrder() {
  order = [];
  $('div').removeClass("highlight");
  $('#displayOrder').html("");
}

function removeKey() {
  var current = $('#displayOrder').html();
  if (current.length > 0) {
    current = current.split(" ");
    current.splice(0,1);
    $('#displayOrder').html(current.join(" "));
  }
  return order.splice(0,1);
}

function replayOrder() {
  if (order.length > 0) {
    var iter = removeKey(); 
    keyOnOff(iter);
  }
  else {
    alert("No keys in queue.")
  }
}

function keyOnOff(el) {
  var test = $("#"+el);
  if (test) {
    test.addClass('highlight');
    setTimeout(function() { 
      test.removeClass('highlight');
      },1000);
  }
}
