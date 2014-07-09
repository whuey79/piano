// version 2 - module pattern

var Piano = (function(){
  var order = [];
  
  // cache common selectors
  var s = {
    pianoKeys: $('#pianokeys'),
    clearButton: $('#clear'),
    replayButton: $('#replay'),
    displayOrder : $('#displayOrder')
  };
  
  var me = {};

  me.init = function() {
    setUpBindings();
  }
  
  function setUpBindings() {
    s.clearButton.on('click',function(){
      clearOrder();
    })
    s.replayButton.on('click',function(){
      replayOrder();
    })
    s.pianoKeys.on('click','div',function(){
      keyOnOff(this.id);
      addKey(this.id);
    })
  }
  
  function keyOnOff(el) {
    var test = $("#"+el);
    
    if (test) {
      test.addClass('highlight');
      setTimeout(function() { 
        test.removeClass('highlight');
      },500);
    }
  }

  function addKey(id) {
    order.push(id);
    var currentText = s.displayOrder.html();
    if (currentText.length > 0) {
      currentText += " ";
      s.displayOrder.html(currentText + id);
    }
    else {
      s.displayOrder.html(id);
    }
  }

  function removeKey() {
    var currentText = s.displayOrder.html();
    if (currentText.length > 0) {
      currentText = currentText.split(" ");
      currentText.splice(0,1);
      s.displayOrder.html(currentText.join(" "));
    }
    return order.splice(0,1);
  }

  function replayOrder() {
    if (order.length > 0) {
      var iter = removeKey(); 
      keyOnOff(iter);
      setTimeout(function() { 
        replayOrder();
      },1000);
    }
    else {
      alert("No keys in queue.")
    }
  }
  
  function clearOrder() {
    order = [];
    s.displayOrder.html("");
    alert("Order cleared.")
  }
  
  return me;
}());

Piano.init();