const convertbutton = document.querySelector(".convertbutton")
const convertcurrency = document.querySelector(".convert-currency")

function convertvalues(){
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value-converted")
    const convertcurrency = document.querySelector(".convert-currency").value
    const dolartoday = 4.99
    const eurotoday = 5.38

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

 function changecurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (convertcurrency.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./eua.png"
    }

    if (convertcurrency.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./eur.png"
    }

    convertvalues()

 }

convertcurrency.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)