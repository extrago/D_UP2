import { query } from './db-utils/db-handler';

async function checkConnection() {
  try {
    
    const res = await query('SELECT NOW()');
    console.log('Connection Successful!');
    console.log('Current DB Time:', res.rows[0].now);
  } catch (err) {
    console.error(' Connection Failed:', err);
  } finally {
    process.exit();
  }
}

checkConnection();