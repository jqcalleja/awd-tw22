// script.js

document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.getElementById('changeableDiv').style.backgroundColor = getRandomColor();
  });
  
  document.getElementById('changeTextBtn').addEventListener('click', function() {
    var newText = document.getElementById('textInput').value;
    document.getElementById('changeableDiv').innerText = newText;
  });
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  