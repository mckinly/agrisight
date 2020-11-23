import Page from './page'

class DashboardPage extends Page {

    get header() { return $('h2=Add Acreage') }
    get logoutBtn() { return $("[test-id='logout']") }

    open() {
        super.open('localhost:8000/#/')
    }

    logout() {
        this.logoutBtn.click()
    }

}

export default new DashboardPage()