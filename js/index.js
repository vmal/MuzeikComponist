window.onkeypress = function pressed(e){
    var soundID = "notes";
//    console.log(e.keyCode);
    if (e.keyCode == 13){
        return false;
      }
//    if (e.keyCode == 65){
           //Do Something
//      }
/*    if (e.keyCode == 100){
        createjs.Sound.registerSound("sound/d.wav", soundID);
        createjs.Sound.play(soundID);
      }
    if (e.keyCode == 101){
        createjs.Sound.registerSound("sound/e.wav", soundID);
        createjs.Sound.play(soundID);
      }
    if (e.keyCode == 102){
        createjs.Sound.registerSound("sound/f.wav", soundID);
        createjs.Sound.play(soundID);
      }
    if (e.keyCode == 103){
        createjs.Sound.registerSound("sound/g.wav", soundID);
        createjs.Sound.play(soundID);
      }
    if (e.keyCode == 97){
        createjs.Sound.registerSound("sound/a.wav", soundID);
        createjs.Sound.play(soundID);
      }
    if (e.keyCode == 98){
        createjs.Sound.registerSound("sound/b.wav", soundID);
        createjs.Sound.play(soundID);
      }*/
}

var count = 0;

$().ready(function(){
    $('a').click(function(){
        if (count>=1){
            document.getElementById("countA_1").remove();
            document.getElementById("countB_1").remove();
            document.getElementById("countA_2").remove();
            document.getElementById("countB_2").remove();
            count = 0;
        }
        var value = $(this).text();
        var word = value.split("/");
        numA_1 = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");
        numA_1.setAttributeNS(null, 'x', 155);
        numA_1.setAttributeNS(null, 'y', 25);
        numA_1.setAttributeNS(null, 'width', 100);
        numA_1.setAttributeNS(null, 'height', 100);
        countA_1 = document.createElement("p");
        countA_1.textContent = word[0];
        countA_1.style.cssText = 'width:auto; height:auto; font-size:6em; color: black';
        countA_1.id = "countA_1";
        numA_1.appendChild(countA_1);
        numA_2 = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");
        numA_2.setAttributeNS(null, 'x', 155);
        numA_2.setAttributeNS(null, 'y', 87);
        numA_2.setAttributeNS(null, 'width', 100);
        numA_2.setAttributeNS(null, 'height', 100);
        countA_2 = document.createElement("p");
        countA_2.textContent = word[1];
        countA_2.style.cssText = 'width:auto; height:auto; font-size:6em; color: black';
        countA_2.id = "countA_2";
        numA_2.appendChild(countA_2);
        numB_1 = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");
        numB_1.setAttributeNS(null, 'x', 155);
        numB_1.setAttributeNS(null, 'y', 200);
        numB_1.setAttributeNS(null, 'width', 100);
        numB_1.setAttributeNS(null, 'height', 100);
        countB_1 = document.createElement("p");
        countB_1.textContent = word[0];
        countB_1.style.cssText = 'width:auto; height:auto; font-size:6em; color: black';
        countB_1.id = "countB_1";
        numB_1.appendChild(countB_1);
        numB_2 = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");
        numB_2.setAttributeNS(null, 'x', 155);
        numB_2.setAttributeNS(null, 'y', 262);
        numB_2.setAttributeNS(null, 'width', 100);
        numB_2.setAttributeNS(null, 'height', 100);
        countB_2 = document.createElement("p");
        countB_2.textContent = word[1];
        countB_2.style.cssText = 'width:auto; height:auto; font-size:6em; color: black';
        countB_2.id = "countB_2";
        numB_2.appendChild(countB_2);
        document.getElementById("grand_staff").appendChild(numA_1);
        document.getElementById("grand_staff").appendChild(numB_1);
        document.getElementById("grand_staff").appendChild(numA_2);
        document.getElementById("grand_staff").appendChild(numB_2);
        count = count+ 1;
        console.log(count);
//        console.log(document.getElementById('countB_2').textContent);
    });
});

function getNotes(text) {
//    console.log(text);
    var cmp1 = document.getElementById('countA_2').textContent;
    console.log("cmp1",cmp1);
    var cmp2 = document.getElementById('countB_2').textContent;
    console.log("cmp2",cmp2);
    if (text == 'A4' && cmp1 == 2 && cmp2 == 2){
          var svgimg = document.createElementNS('http://www.w3.org/2000/svg','image');
          svgimg.setAttributeNS(null,'height','100');
          svgimg.setAttributeNS(null,'width','100');
          svgimg.setAttributeNS('http://www.w3.org/1999/xlink','href', 'images/halfnote_up.svg');
          svgimg.setAttributeNS(null,'x','220');
          svgimg.setAttributeNS(null,'y','52');
          svgimg.setAttributeNS(null, 'visibility', 'visible');
          $('svg').append(svgimg);
    }
}