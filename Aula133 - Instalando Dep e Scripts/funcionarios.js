// AULA 128 - DESAFIO
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const isChina = (p) => p.pais == 'China'
const isMulher = (p) => p.genero == 'M'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(resp => {
    const funcionarios = resp.data
    //mulher chinesa com menor salario
    console.log(funcionarios.filter(isChina).filter(isMulher).reduce(menorSalario))
})