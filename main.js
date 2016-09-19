var el = document.getElementById("main"),
two = new Two ({fullscreen: true});
two.appendTO(el);

var circle = two.makeCircle(110,110,100);
circle.fill = "#881111";
two.update();
