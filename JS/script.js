const welcome = () =>{
    console.log("Hello!");
}





let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")

let rateEUR = 4.70;
let rateUSD = 4.42;
let rateCHF = 4.76;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

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

})