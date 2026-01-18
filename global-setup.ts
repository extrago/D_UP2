// global-setup.ts
import { FullConfig } from '@playwright/test';
import { query } from './db-utils/db-handler';

async function globalSetup(config: FullConfig) {
  console.log(' Starting Global Setup: Checking Database Schema...');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await query(createTableQuery);
    console.log('Database Schema is ready for testing.');
  } catch (error) {
    console.error(' Critical Error in Global Setup:', error);
    // إنهاء الاختبارات فوراً إذا فشل إعداد قاعدة البيانات
    process.exit(1);
  }
}

export default globalSetup;