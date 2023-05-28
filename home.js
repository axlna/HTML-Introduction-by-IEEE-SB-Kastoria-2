var gifs = [
    'https://github.com/axlna/HTML-Introduction-by-IEEE-SB-Kastoria-2/blob/main/pics/ezgif-4-a9ed182ec8.gif?raw=true',
    'https://github.com/axlna/HTML-Introduction-by-IEEE-SB-Kastoria-2/blob/main/pics/ezgif-4-c63f7bd4a5.gif?raw=true',
    'https://github.com/axlna/HTML-Introduction-by-IEEE-SB-Kastoria-2/blob/main/pics/ezgif-4-54f75ca818.gif?raw=true',
    'https://github.com/axlna/HTML-Introduction-by-IEEE-SB-Kastoria-2/blob/main/pics/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?raw=true'
  ];
  
  var defaultGif = gifs[gifs.length - 1];
  var timeout = null;
  var img = null;
  
  window.addEventListener('load', function() {
    var buttons = document.querySelectorAll('.button');
    img = document.querySelector('#image img');
  
    buttons.forEach(function(button, index) {
      button.addEventListener('mouseenter', function() {
        img.src = gifs[index];
        clearTimeout(timeout);
      });
    });
  
    function resetGif() {
      img.style.opacity = 0;
      setTimeout(function() {
        img.src = defaultGif;
        img.style.opacity = 1;
      },0);
    }
  
    img.addEventListener('mouseleave', function() {
      timeout = setTimeout(resetGif, 300);
    });
  
    buttons.forEach(function(button) {
      button.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
      });
      button.addEventListener('mouseleave', function() {
        timeout = setTimeout(resetGif, 300);
      });
    });
  });
  