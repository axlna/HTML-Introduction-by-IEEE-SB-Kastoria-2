var gifs = [
    'https://raw.githubusercontent.com/axlna/HTML-Introduction-by-IEEE-SB-Kastoria-2/main/ezgif-4-a9ed182ec8.gif?token=GHSAT0AAAAAACB64LX3JFFSU7QR5P4ARG52ZCMBAJQ',
    'https://raw.githubusercontent.com/axlna/HTML-Introduction-by-IEEE-SB-Kastoria-2/main/ezgif-4-c63f7bd4a5.gif?token=GHSAT0AAAAAACB64LX2DKNAUYJ2KRJMHJBGZCMBAKA',
    'https://raw.githubusercontent.com/axlna/HTML-Introduction-by-IEEE-SB-Kastoria-2/main/ezgif-4-54f75ca818.gif?token=GHSAT0AAAAAACB64LX3U5LCGGWFVGIO4DOWZCMBAIA',
    'https://thumbs.gfycat.com/GenerousTimelyBrontosaurus-max-1mb.gif'
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
  