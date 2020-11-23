import LoginPage from './pageobjects/login'

describe('login form', () => {
    it('should allow access with correct creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('test123')
        LoginPage.password.setValue('test123')
        LoginPage.submit()

        expect(LoginPage.flash).toHaveText('INCORRECT CREDENTIALS')
    })
})

// TODO: write more tests
