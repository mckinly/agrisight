import Page from './page'

class LoginPage extends Page {

    get username() { return $("[test-id='username']") }
    get password() { return $("[test-id='password']") }
    get submitBtn() { return $("[test-id='submit']") }
    get flash() { return $('#__react-alert__') }

    open() {
        super.open('localhost:8000/#/login')
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new LoginPage()