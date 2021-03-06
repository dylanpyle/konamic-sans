(function(document) {
  var index = 0,
      konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  var enqueue = function(key, goal, success) {
    if (goal[index] === key) {
      if (++index === goal.length) {
        success();
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  var enhance = function() {
    var style = document.createElement('style'),
        rule = "body{font-family:'Comic Sans MS' !important;}";

    style.type = 'text/css';
    style.styleSheet
      ? style.styleSheet.cssText = rule
      : style.appendChild(document.createTextNode(rule));

    document.head.appendChild(style);
  };

  document.addEventListener('keydown', function(e) {
    var key = e.charCode || e.keyCode;
    enqueue(key, konami, enhance);
  });

})(document);
