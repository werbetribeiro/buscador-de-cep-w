const botao = document.getElementById('pesquisar').addEventListener('click', mostrar)

function mostrar() {
  const cep = document.getElementById('buscar').value
  fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
  .then(response => response.json())
  .then(data => {
              let resultado = document.getElementById('resultado')

              if (data.message) {
                resultado.innerHTML = `<span>CEP: Não encontrado</span>`
              }
              else if (data.street) {
                resultado.innerHTML = 
                `
                <span>CEP: ${data.cep}</span>
                <span>Cidade: ${data.city}</span>
                <span>Estado: ${data.state}</span>
                <span>Rua: ${data.street}</span>
                `
              }
              else {
                //Caso o resultado não tenha rua
                resultado.innerHTML = 
                `
                <span>CEP: ${data.cep}</span>
                <span>Cidade: ${data.city}</span>
                <span>Estado: ${data.state}</span>
                `
              }
    })
    //Resetar o cep da pesquisa após 8 segundos
/*     function reset() {
      document.getElementById('buscar').value = ""
      console.log('OK')
    }
    setTimeout(reset, 3500) */
}