describe('Verifikasi Fitur Login Akun', () => {
  it('User Berhasil Login dengan data akun yang terdaftar', () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
  })
})