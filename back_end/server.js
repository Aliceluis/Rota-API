export const sqlConfig = {
  server: '192.168.1.27',
  port: 1433,
  user: 'sa',
  password: '12345',
  database: 'rota api',
  options: {
    enableArithAbort : true,
    encrypt: false,
    trustServerCertificate: true,
  },
  connectionTimeout : 5000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
}
