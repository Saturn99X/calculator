document.addEventListener('DOMContentLoaded', () => {
    function handleClick(button) {
      var display = document.getElementById('calc_display');
      display.innerHTML += (button.value);

        
      adjustFontSize(display);
    }
    function result(button) {
      var result_display = document.getElementById('result_display');
      var display = document.getElementById('calc_display');
        var  R = display.innerHTML;
        var result = eval(R);
        result_display.innerHTML = result; 
  

      adjustFontSize(result_display); 
    }

    function adjustFontSize(display) {
      const currentLength = display.innerHTML.length;
  
      let newFontSize = 2; 
  
      let maxChars = 10;
      if (currentLength > maxChars) {
        newFontSize = 2 - (currentLength - maxChars) * 0.1; 
      }
  

      newFontSize = Math.max(newFontSize, 1.2);
  
      display.style.fontSize = `${newFontSize}rem`;
    }
  

    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach(button => {
      button.addEventListener('click', () => handleClick(button));
    });

    const equal_button = document.querySelectorAll('#equal');
    equal_button.forEach(button => {
      button.addEventListener('click', () => result());
    });
  });
 
    
  