describe('login page', () => {
    it('is shown when not logged in', () => {
        browser.url('localhost:8000')
        expect(browser).toHaveTitle('agrisight');
    })
})

// TODO: write more tests
