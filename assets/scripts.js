const convertbutton = document.querySelector(".convertbutton")

function convertvalues() {

    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value-converted")
    const convertcurrency = document.querySelector(".convert-currency")
    const dolartoday = 2.0
    const eurotoday = 6.0
    const convertedolar = inputcurrencyvalue / dolartoday


    if (convertcurrency == "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)
    }

    if (convertcurrency == "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)


    console.log(convertedolar)
}


convertbutton.addEventListener("click", convertvalues)