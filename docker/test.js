// para testar no docker
// docker run --rm -ti --network host -v $PWD/test.js:/tmp/test.js grafana/k6 run -i 5000 --vus 4 /tmp/test.js

import http from 'k6/http'

export default function () {
  const tipo = (Math.random() < 0.4 ? 'c' : 'd')
  const valor = Math.ceil(Math.random() * 100000)

  const id = Math.floor(Math.random() * 5) + 1
  const payload = JSON.stringify({ valor, tipo, descricao: 'teste' })

  const headers = { 'Content-Type': 'application/json' }
  http.post(`http://localhost:9999/clientes/${id}/transacoes`, payload, { headers })
}
