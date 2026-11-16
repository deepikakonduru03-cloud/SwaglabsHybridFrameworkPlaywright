import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import LoginData from '../test-data/LoginData.json';
import { DataProvider } from '../utils/DataProvider';

test.describe('Group1', () => {
    test('verify successful login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.enterUsername(LoginData.validUser.username);
        await loginPage.enterPassword(LoginData.validUser.password);
        await loginPage.clickLoginButton();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
});

/*test('verify unsuccessful login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername(LoginData.invalidUser.username);
    await loginPage.enterPassword(LoginData.invalidUser.password);
    await loginPage.clickLoginButton();
    await expect(page.errorMessage).toBeVisible();
}
)
 
test('verify unsuccessful login with locked credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterUsername(LoginData.lockedUser.username);
    await loginPage.enterPassword(LoginData.lockedUser.password);
    await loginPage.clickLoginButton();
    await expect(page.errorMessage).toBeVisible();
}
)*/

test.describe('Group2', () => {
    const users = DataProvider.getLoginData();
    users.forEach((user, index) => {
        test(`verify login function - ${index + 1} - ${user.username}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigateToLoginPage();
            await loginPage.enterUsername(user.username);
            await loginPage.enterPassword(user.password);
            await loginPage.clickLoginButton();
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        });
    });
});
