import LoginPage from './pageobjects/login';
import DashboardPage from './pageobjects/dashboard';

describe('acreage form', () => {
    it('adds a new acreage', () => {
        LoginPage.open()
        LoginPage.username.setValue('test')
        LoginPage.password.setValue('password123')
        LoginPage.submit()

        DashboardPage.addAcreageName.setValue('test acreage name')
        DashboardPage.addAcreageEmail.setValue('test@gmail.com')
        DashboardPage.addAcreageAddress.setValue('123 Main St, Portland, OR')
        DashboardPage.addAcreage()

        expect(DashboardPage.flash).toHaveText('ACREAGE ADDED')
        DashboardPage.deleteAcreage()
        expect(DashboardPage.deleteAcreage).not.toBeClickable()
    })
})