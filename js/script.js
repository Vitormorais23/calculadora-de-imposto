function calcular() {
    let salario = Number(document.getElementById("salario").value)

    let impostoAPagar = 0
    // Calcular as faixas
    let salarioFaixa27e5 = salario - 4664.68
    if (salarioFaixa27e5 > 0) {
        impostoAPagar += salarioFaixa27e5 * (27.5 / 100)
        salario = salario - salarioFaixa27e5
    }

    let salarioFaixa22e5 = salario - 3751.06
    if (salarioFaixa22e5 > 0) {
        impostoAPagar += salarioFaixa22e5 * (22.5 / 100)
        salario = salario - salarioFaixa22e5
    }

    let salarioFaixa15 = salario - 2826.66
    if (salarioFaixa15 > 0) {
        impostoAPagar += salarioFaixa15 * (15 / 100)
        salario = salario - salarioFaixa15   
    }

    let salarioFaixa7e5 = salario - 2259.20
    if (salarioFaixa7e5 > 0) {
        impostoAPagar += salarioFaixa7e5 * (7.5 / 100)
    }




    // Formatar Moedas
    let currencyFormatter =  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

    // .format(
    //     variavel,
    //   ), 
    document.getElementById("pagar").innerText = impostoAPagar > 0 ? currencyFormatter.format(impostoAPagar) : "ISENTO"

}