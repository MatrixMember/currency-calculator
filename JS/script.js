{
const welcome = () => {
    console.log("Hello!");
};

welcome();

const calculateResult = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const rateEUR = 4.70;
    const rateUSD = 4.42;
    const rateCHF = 4.76;

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultElement.innerHTML = result.toFixed(2) + " " + currency;
}

const runCalculating = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", calculateResult);
};

const resetResult = () => {
    const resultElement = document.querySelector(".js-result");
    const resetButton = document.querySelector(".js-reset");
    
    resetButton.addEventListener("click", () => {
        resultElement.innerText = (0.00).toFixed(2);
    });
};

runCalculating();
resetResult();
}