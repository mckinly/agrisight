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
    it('creates a new user', () => {
        RegisterPage.open()
        RegisterPage.username.setValue('test2')
        RegisterPage.email.setValue('test2@gmail.com')
        RegisterPage.password.setValue('password123')
        RegisterPage.password2.setValue('password123')
        RegisterPage.submit()

        expect(DashboardPage.logoutBtn).toBeClickable()
        DashboardPage.logout()
    })
})

describe('login form', () => {
    it('should allow access with correct creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('test2')
        LoginPage.password.setValue('password123')
        LoginPage.submit()

        expect(DashboardPage.logoutBtn).toBeClickable()
        DashboardPage.logout()
    })
    it('should allow access with correct creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('test2')
        LoginPage.password.setValue('wrongpassword')
        LoginPage.submit()

        expect(RegisterPage.flash).toHaveText('INCORRECT CREDENTIALS')
        expect(DashboardPage.logoutBtn).not.toBeClickable()
    })
})
