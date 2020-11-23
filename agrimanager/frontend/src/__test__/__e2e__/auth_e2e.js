import LoginPage from './pageobjects/login';
import RegisterPage from './pageobjects/register';
import DashboardPage from './pageobjects/dashboard';

describe('register form', () => {
    it('warns user already exists', () => {
        RegisterPage.open()
        RegisterPage.username.setValue('test')
        RegisterPage.email.setValue('test@gmail.com')
        RegisterPage.password.setValue('password123')
        RegisterPage.password2.setValue('password123')
        RegisterPage.submit()

        expect(RegisterPage.flash).toHaveText('A USER WITH THAT USERNAME ALREADY EXISTS.')
        expect(DashboardPage.logoutBtn).not.toBeClickable()
    })
})

describe('login form', () => {
    it('should allow access with correct creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('test')
        LoginPage.password.setValue('password123')
        LoginPage.submit()

        expect(DashboardPage.logoutBtn).toBeClickable()
    })
})
