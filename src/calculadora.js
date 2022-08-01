export const OPERACAO_INVALIDA = 'OPERACAO_INVALIDA'
let resultado = 0
let i = 0
export const calculadora = (operacao, valores) => {
  // código aqui
  switch(operacao){
    case "soma":
      resultado = valores[0]
      for(i=1; i<valores.length; i++){
        resultado = resultado + valores[i]
      }
      return resultado
    case "subtracao":
      resultado = valores[0]
      for(i=1; i<valores.length; i++){
        resultado = resultado - valores[i]
      }
      return resultado
    case "multiplicacao":
      resultado = valores[0]
      for(i=1; i<valores.length; i++){
        resultado = resultado * valores[i]
      }
      return resultado
    case "divisao":
      resultado = valores[0]
      for(i=1; i<valores.length; i++){
        resultado = resultado / valores[i]
      }
      return resultado
    default:
      return OPERACAO_INVALIDA
  }
}