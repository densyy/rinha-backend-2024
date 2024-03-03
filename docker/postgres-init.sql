CREATE UNLOGGED TABLE clientes (
	id SERIAL PRIMARY KEY,
	limite INTEGER NOT NULL,
	saldo INTEGER NOT NULL
  CONSTRAINT saldo_limite CHECK (saldo >= limite * -1)
);

CREATE UNLOGGED TABLE transacoes (
	id SERIAL PRIMARY KEY,
	cliente_id INTEGER NOT NULL,
	valor INTEGER NOT NULL,
	tipo CHAR(1) NOT NULL,
	descricao VARCHAR(10) NOT NULL,
	data_registro TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_clientes_transacoes_id FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE INDEX idx_clientes_id ON clientes (id);
CREATE INDEX idx_transacoes_cliente_id ON transacoes (cliente_id);

DO $$
BEGIN
	INSERT INTO clientes (id, limite, saldo)
	VALUES
    (1, 1000 * 100, 0),
    (2, 800 * 100, 0),
    (3, 10000 * 100, 0),
    (4, 100000 * 100, 0),
    (5, 5000 * 100, 0);
END;
$$;

ALTER SYSTEM SET max_worker_processes = 10;
ALTER SYSTEM SET checkpoint_timeout = '5min';
ALTER SYSTEM SET wal_compression = on;
ALTER SYSTEM SET work_mem = '16MB';
ALTER SYSTEM SET max_connections = 300;
ALTER SYSTEM SET shared_buffers = '150MB';
ALTER SYSTEM SET max_wal_senders = 10;
