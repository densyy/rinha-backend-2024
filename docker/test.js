import http from 'k6/http'

export default function () {
  const tipo = (Math.random() < 0.4 ? 'c' : 'd')
  const valor = Math.ceil(Math.random() * 100000)

  const id = Math.floor(Math.random() * 5) + 1
  const payload = JSON.stringify({ valor, tipo, descricao: 'teste' })

  const headers = { 'Content-Type': 'application/json' }
  http.post(`http://localhost:9999/clientes/${id}/transacoes`, payload, { headers })
}
