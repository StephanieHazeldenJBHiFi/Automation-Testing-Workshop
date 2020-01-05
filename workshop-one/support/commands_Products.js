//Set Desktop Browser Viewport Screen Size
Cypress.Commands.add('LaunchDesktopScreenSize', () => {
    cy.viewport(1440, 900)
})

//Navigate to Shopify UAT
Cypress.Commands.add('LoginUATShopify', () => {
    cy.visit('/')                  
      .get('form#login_form')                           
      .contains('form', 'Enter')                        
      .get('#Password')                                 
      .type('kloopi')
      .get('#login_form > div > span > button').click() 
})
