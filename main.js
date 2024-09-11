function coletarcep() {
    let input = document.querySelector('.Cep').value
    console.log(input)
    Dados(input)
}

async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    exibirdados(dados)
}

function exibirdados(dados) {
    document.getElementById("endereço").value = dados.localidade
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("cidade").value = dados.localidade
}

const form = querySelector('form')
const submit = querySelector('button[type="text"]')

form.addEventlistener('keydown', function(e){
  if (e.key === 'Enter' && !e.shiftkey){
    e.preventDefault()
    submit.click()
  }
})