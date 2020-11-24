import Page from './page'

class DashboardPage extends Page {

    get header() { return $('h2=Add Acreage') }
    get addAcreageName() { return $("[test-id='add-acreage-name']") }
    get addAcreageEmail() { return $("[test-id='add-acreage-email']") }
    get addAcreageAddress() { return $("[test-id='add-acreage-address']") }
    get addAcreageBtn() { return $("[test-id='add-acreage-submit']") }
    get deleteAcreageBtn() { return $("[test-id='delete-acreage-test acreage name']") }
    get logoutBtn() { return $("[test-id='logout']") }
    get flash() { return $('#__react-alert__') }

    open() {
        super.open('localhost:8000/#/')
    }

    logout() {
        this.logoutBtn.click()
    }

    addAcreage() {
        this.addAcreageBtn.click()
    }

    deleteAcreage() {
        this.deleteAcreageBtn.click()
    }

}

export default new DashboardPage()