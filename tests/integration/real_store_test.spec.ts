import { test, expect } from '@playwright/test';
import { query } from '../../db-utils/db-handler';

test('Real E2E: Create user via Store API and verify persistence in DB', async ({ request }) => {
  const timeStamp = Date.now();
  const newUser = {
    username: `user_${timeStamp}`,
    email: `basem_${timeStamp}@test.com`
  };

  const apiResponse = await request.post('http://127.0.0.1:3000/api/users', {
    data: newUser
  });

  expect(apiResponse.status()).toBe(201);
  
  const dbResult = await query(
    'SELECT * FROM users WHERE email = $1', 
    [newUser.email]
  );

  expect(dbResult.rows.length).toBe(1);
  expect(dbResult.rows[0].username).toBe(newUser.username);
  expect(dbResult.rows[0].email).toBe(newUser.email);
});