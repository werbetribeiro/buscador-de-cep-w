const botao = document.getElementById('pesquisar').addEventListener('click', mostrar)

function mostrar() {
  const cep = document.getElementById('buscar').value
  fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
  .then(response => response.json())
  .then(data => {
              let resultado = document.getElementById('drop')
              resultado.id = 'resultado'
              if (data.street) {
                resultado.innerHTML = 
                `
                <span>CEP: ${data.cep}</span>
                <span>Cidade: ${data.city}</span>
                <span>Estado: ${data.state}</span>
                <span>Rua: ${data.street}</span>
                `
              }
              else {
                resultado.innerHTML = 
                `
                <span>CEP: ${data.cep}</span>
                <span>Cidade: ${data.city}</span>
                <span>Estado: ${data.state}</span>
                `
              }
    })
  document.getElementById('buscar').value = ""
}