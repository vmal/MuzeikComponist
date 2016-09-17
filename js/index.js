window.onkeypress = function pressed(e){
    var soundID = "notes";
    console.log('PLaying Note');
    console.log(e.keyCode);
    if (e.keyCode == 99){
        createjs.Sound.registerSound("sound/c.wav", soundID);
        createjs.Sound.play(soundID);
      }
    if (e.keyCode == 100){
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
      }
}
