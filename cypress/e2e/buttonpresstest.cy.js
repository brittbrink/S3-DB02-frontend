describe('Button press test', () => {
  it('should check if the button is pressed', () => {
    cy.visit('http://localhost:3000/')

 

    // First, we want to select the button using a CSS selector
    cy.get('button#my-button')

 

    // Then, we want to make sure the button is visible and enabled
    .should('be.visible')
    .should('not.be.disabled')

 

    // Now, we want to click the button
    .click()

 

    // Finally, we want to check if the button was successfully pressed
    // Here, we can check for some specific outcome that we expect
    // when the button is pressed, such as a change in the text on the page
    cy.get('p#button-result')
    .should('contain', 'Button was pressed!')
  })
})