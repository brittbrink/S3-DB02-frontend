describe('data from backend test', () => {
  it('should check if the frontend receives data from backend', () => {
    cy.visit('http://localhost:3000') // local website URL

 

    // First, we want to define the URL of the local backend API
    const backendUrl = 'http://localhost:8080/persons' // local backend API URL

 

    // Then, we want to send a GET request to the backend API
    // and check the response status code to make sure it's successful
    cy.request(backendUrl)
    .its('status')
    .should('equal', 200)
  })
})

 

 