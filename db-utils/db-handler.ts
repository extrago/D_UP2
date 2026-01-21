import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || 'your_secure_password',
  port: Number(process.env.DB_PORT) || 5433, 
  ssl: false,
});

export const query = async (text: string, params?: any[]) => {
  return pool.query(text, params);
};