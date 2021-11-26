/*
function saludar(mensaje) {
    alert(`Hola ${mensaje}`)
}

saludar("Coders!.")
saludar("Latam!")
saludar("Humanos")
*/

const IMPUESTO_PAIS = 0.30;
const RETENCION_AFIP = 0.35;
/*
function calcularDolarSolidario(tipoCambio) {
    return tipoCambio * (1 + IMPUESTO_PAIS + RETENCION_AFIP)
}

let dolarSolidario = calcularDolarSolidario(107.38)
alert(dolarSolidario)
*/

//const dolarSolidario = function (tipoCambio) { return tipoCambio * (1 + IMPUESTO_PAIS + RETENCION_AFIP)}
const dolarSolidario = (tipoCambio) => tipoCambio * (1 + IMPUESTO_PAIS + RETENCION_AFIP)
const dolarBlue = (tipoCambio) => tipoCambio * 2
const dolarMEP = (valorDolarMep) => valorDolarMep + 1
const dolarCCL = (valorDolarCLL) => valorDolarCLL + 1

alert(`Dolar Solidario $${dolarSolidario(107.38)}`)
alert(`Dolar Blue $${dolarBlue(100.68)}`)
alert(`Dolar MEP $${dolarMEP(200.17)}`)
alert(`Dolar CCL $${dolarCCL(211.75)}`)