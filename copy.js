function copyText() {
    var textToCopy = "reniaxythali@gmail.com";
  
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
  
    document.body.appendChild(tempTextarea);
  
    tempTextarea.select();
    document.execCommand("copy");
  
    document.body.removeChild(tempTextarea);
  
    
  }
  