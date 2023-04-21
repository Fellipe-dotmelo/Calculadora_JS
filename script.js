function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      //limpar conteúdo do input
      document.getElementById('resultado').value = ''
    } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
      //verificar se o último caractere é um operador
      var ultimoCaractere = document.getElementById('resultado').value.slice(-1)
      if (ultimoCaractere === '+' || ultimoCaractere === '-' || ultimoCaractere === '*' || ultimoCaractere === '/' || ultimoCaractere === '.') {
        //substituir o último operador pelo novo operador
        document.getElementById('resultado').value = document.getElementById('resultado').value.slice(0, -1) + valor
      } else {
        //adicionar o novo operador ao valor do input
        document.getElementById('resultado').value += valor
      }
    } else if (valor === '=') {
      var valor_campo = eval(document.getElementById('resultado').value)
      document.getElementById('resultado').value = valor_campo
    }
  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
  }
}
