import pg from 'pg';
if (!process.env.DATABASE_URL) throw new Error('Configura DATABASE_URL en server/.env');
export const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 5000 });
pool.on('error', () => console.error('La conexión con PostgreSQL se ha interrumpido.'));

