import Page from './page'

class RegisterPage extends Page {

    get username() { return $("[test-id='username']") }
    get email() { return $("[test-id='email']") }
    get password() { return $("[test-id='password']") }
    get password2() { return $("[test-id='password2']") }
    get submitBtn() { return $("[test-id='submit']") }
    get flash() { return $('#__react-alert__') }

    open() {
        super.open('http://0.0.0.0:8000/#/register')
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new RegisterPage()