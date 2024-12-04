
function greetUser(name) {
const outputDiv = document.getElementById('output');
  
  outputDiv.innerHTML = `Hello, ${name}! Welcome to our website.`;
}

function changeText() {
   
    const messageElement = document.getElementById('message');
    
    messageElement.innerText = 'Hello, World!';
  }

  function addNumbers() {
   
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    const sum = parseFloat(num1) + parseFloat(num2);
    

    document.getElementById('result').innerText = `Result: ${sum}`;
  }

  function updateTitle() {
    
    const newTitle = document.getElementById('inputTitle').value;
    
    document.getElementById('title').innerText = newTitle;
  }

  function concatenateStrings() {
    
    const string1 = document.getElementById('input1').value;
    const string2 = document.getElementById('input2').value;
    
    const combined = string1 + string2;
    
    document.getElementById('combinedText').innerText = `Combined Text: ${combined}`;
  }

    
    const button = document.getElementById('changeBackgroundButton');
    const colorBox = document.getElementById('colorBox');
  
    button.addEventListener('click', function() {
  
      colorBox.style.backgroundColor = 'blue';
    });