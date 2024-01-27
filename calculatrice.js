
    let resultDisplay = document.querySelector(".result span");
    let numberButtons = document.querySelectorAll(".numbers, .sign, .percent, .comma, .negative");
    let equalsButton = document.querySelector(".equal");
    let clearButton = document.querySelector(".clear");
 
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", function () {
            resultDisplay.innerHTML += numberButtons[i].value;
        });
    }
    

    equalsButton.addEventListener("click", function () {
        try {
            if (resultDisplay.innerHTML.trim() !== "") {
                // Replace '*' with the actual multiplication operator '*'
                let expression = resultDisplay.innerHTML.replace(/x/g, '*');
                expression = expression.replace(/,/g, '.'); // Replace ',' with '.'
                
                // Use Function constructor to avoid direct eval
                let result = new Function('return ' + expression)();
                
                // Display result
                resultDisplay.innerHTML = result;
            }
        } catch (error) {
            resultDisplay.innerHTML = "Error";
        }
    });

    clearButton.addEventListener("click", function () {
        resultDisplay.innerHTML = "";
    });

    // Set initial state when the program starts
    resultDisplay.innerHTML = "";
;
