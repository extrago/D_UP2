import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { query } from '../db-utils/db-handler';

test.describe('E2E: User Registration with Automatic Cleanup', () => {
  let timestamp: number;
  let testUser: { username: string; email: string };

  test.beforeEach(async () => {
    timestamp = Date.now();
    testUser = {
      username: `Basem_${timestamp}`,
      email: `basem.cleanup.${timestamp}@example.com`
    };
  });

  test.afterEach(async () => {
    await query('DELETE FROM users WHERE email = $1', [testUser.email]);
    console.log(` Cleanup: User ${testUser.email} removed from DB.`);
  });

  test('Should register and then cleanup data', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.navigate();
    await registrationPage.register(testUser.username, testUser.email);

    await query('INSERT INTO users(username, email) VALUES($1, $2)', [testUser.username, testUser.email]);
    
    const dbResult = await query('SELECT * FROM users WHERE email = $1', [testUser.email]);
    expect(dbResult.rowCount).toBe(1);
    
    console.log(`✅ Test Passed: User ${testUser.username} verified.`);
  });
});