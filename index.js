let result = document.querySelector(".user-result"),
    yuGiOhResult = document.querySelector(".result");


result.textContent = 0;

/*************      CONVERT FAHREINHEIT TO CELSIUS FUNCTION     ***********/
function convertFahrToCelsius(value) {
    let initialAnswer = (value - 32) / 1.8;
    let finalAnswer = Number(initialAnswer.toFixed(4));

    if(typeof(value) == "number") {
        result.textContent = finalAnswer;
    }
    else if(typeof(value) != "number") {
        let newValue = Number(value);
        let newArr = [];
        newArr.push(newValue);

        if(newArr.toString() == "NaN" && Array.isArray(value) == false) {
            if(Object.values(value).length && typeof(value) != "string") {
                for(const i in value) {
                    result.textContent = `{${i}, ${value[i]}} is not a valid number but a/an ${typeof(value)}`;
                }
            }
            else if(Object.values(value).length == 0) {
                result.textContent = `{} is not a valid number but a/an ${typeof(value)}`;
            }
            else if (typeof(value) == "string") {
                result.textContent = `${value} is not a valid number but a/an ${typeof(value)}`;
            }
        }    
        else if(newArr.toString() != "NaN") {
            let valueTwo = Number(newArr[0])

            let newInitialAnswer = (valueTwo - 32) / 1.8;
            let newFinalAnswer = Number(newInitialAnswer.toFixed(4));

            result.textContent = newFinalAnswer;
        }
        if(typeof(value) != "number" && value.length == 0 || Array.isArray(value)) {
            result.textContent = `[${value}] is not a valid number but a/an array`;
        }

    }
    return;
}

/**************     YoGiOh FUNCTION      ****************/
function checkYoGiOh(n) {
    let newArray = [];
    let num = Number(n)

    for(let x = 1; x <= num; x++) {
        newArray.push(x);
    }

    newArray.forEach((num) => {
        if(num % 2 == 0) {
            newArray.splice(num - 1, 1, "yu")
        }
        else if(num % 3 == 0) {
            newArray.splice(num - 1, 1, "gi")
        }
        else if(num % 5 == 0) {
            newArray.splice(num - 1, 1, "oh")
        }
        if(num % 2 == 0 && num % 3 == 0) {
            newArray.splice(num - 1, 1, "yu-gi")
        }
        if(num % 2 == 0 && num % 5 == 0) {
            newArray.splice(num - 1, 1, "yu-oh")
        }
        if(num % 3 == 0 && num % 5 == 0) {
            newArray.splice(num - 1, 1, "gi-oh")
        }
        if(num % 2 == 0 && num % 3 == 0 && num % 5 == 0) {
            newArray.splice(num - 1, 1, "yu-gi-oh")
        }
    })
    if(typeof(num) != "number" || newArray.length == 0) {
        yuGiOhResult.textContent = `Invalid parameter: ${n}`
    }
    else if(newArray.length != 0) {
        yuGiOhResult.textContent = `[${newArray}]`;
    }
}


/***************       TESTING THE FUNCTIONS       **************/
checkYoGiOh()
convertFahrToCelsius()