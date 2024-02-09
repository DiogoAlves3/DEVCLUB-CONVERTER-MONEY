const convertbutton = document.querySelector(".convertbutton")
const convertcurrency = document.querySelector(".convert-currency")

function convertvalues(){
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value-converted")
    const convertcurrency = document.querySelector(".convert-currency").value
    const dolartoday = 4.99
    const eurotoday = 5.38
    const bitcointoday = 237.143
    const libratoday = 6.26

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


    if (convertcurrency == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("world", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyvalue / bitcointoday)
    }

    if (convertcurrency == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)
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

    if (convertcurrency.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./bitcoin 1.png"
    }

    if (convertcurrency.value == "libra"){
        currencyName.innerHTML = "Libras"
        currencyImage.src = "./libra 1.png"
    }

    convertvalues()

 }

convertcurrency.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)