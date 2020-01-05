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

//Navigate to a Collection Page
Cypress.Commands.add('NavigateToCollectionPage', () => {
    cy.get('#top-menu > :nth-child(4) > :nth-child(1)').click() 
})

//Add 1x Product from Home Page
Cypress.Commands.add('Add1xProductFromHomepage', () => {
    cy.get('.product-loop > div.column:nth-child(3) > .product-tile__container > .product-tile__cta.product-tile__cta--simple > form')
      .find('button.cart-button__add > span > span.button-text').contains('Add to Cart').click({force: true})
})

//Add Another 1x Product from Home Page
Cypress.Commands.add('AddAnother1xProductFromHomepage', () => {
    cy.get('.product-loop > div.column:nth-child(4) > .product-tile__container > .product-tile__cta.product-tile__cta--simple > form')
      .find('button.cart-button__add > span > span.button-text').contains('Add to Cart').click({force: true})
})

//Add 1x Product from PDP
Cypress.Commands.add('Add1xProductFromPDP', () => {
    cy.get('.product-loop > div.column:nth-child(3) > .product-tile__container > a.product-tile > div.product-tile__inner-container.banner-active').click({force: true})
    cy.get('#AddToCart-inpage > span#AddToCartText-').contains('Add to Cart').click()
})

//Add 1x Product from Collection Page
Cypress.Commands.add('Add1xProductFromCollectionPage', () => {
    cy.get('#collection-search-results > div > div.ais-hits--item.ais-hits--item:nth-child(3) > div.ais-hit.ais-product.product-tile__container > div.ais-hit--cart.product-tile__cta > button').click({force: true})
})

//Add Another 1x Product from Collection Page
Cypress.Commands.add('AddAnother1xProductFromCollectionPage', () => {
    cy.get('#collection-search-results > div > div.ais-hits--item.ais-hits--item:nth-child(5) > div.ais-hit.ais-product.product-tile__container > div.ais-hit--cart.product-tile__cta > button').click({force: true})
})

//Search for First Product via Search Input
Cypress.Commands.add('SearchFirstProduct', () => {
    cy.get('#quicksearch-search-box > div > input').type('apple')
})

//Search for Second Product via Search Input
Cypress.Commands.add('SearchSecondProduct', () => {
    cy.get('#quicksearch-search-box > div > input').type('samsung')
})

//Clear Search Input
Cypress.Commands.add('ClearSearchInput', () => {
    cy.get('#quicksearch-search-box > div > input').clear()
})

//Add 1x Product from Searched Product
Cypress.Commands.add('AddProductFromSearchToCart', () => {
    cy.get('#quicksearch-search-results > div > div.ais-infinite-hits.ais-results-as-block > div:nth-child(2) > div > div.ais-hit--cart.product-tile__cta > button').click({force: true})
})

//Close Seach Page
Cypress.Commands.add('CloseSearchPage', () => {
    cy.get('.ais-clear-all--link').click()
})

//Navigate to Cart Icon's Qty
Cypress.Commands.add('NavigateToCartIconQty', () => {
    cy.get('#shopify-section-header > header > div.site-header-container.utilities > div.utility-link.mobile-order-7 > #minicart-toggle')
      .find('#cart-count')
})

//Navigate to Cart Page from Cart Icon
Cypress.Commands.add('NavigateToCartPagefromCartIcon', () => {
    cy.get('#shopify-section-header > header > div.site-header-container.utilities > div.utility-link.mobile-order-7 > #minicart-toggle').click()
    cy.get('#mini-cart > div > form > div.cart-buttons > button.collect-checkout.cart-buttons-cart > span').contains('View Cart').click({force: true})
})

//Navigate to Cart Page's Product Summary Section One
Cypress.Commands.add('NavigateToCartPageProductSummarySectionOne', () => {
    cy.get('#MainContent > div > div.cart-container > div:nth-child(1)')
})

//Navigate to Cart Page's Product Summary Section Two
Cypress.Commands.add('NavigateToCartPageProductSummarySectionTwo', () => {
    cy.get('#MainContent > div > div.cart-container > div:nth-child(2)')
})

//Navigate to Cart Page's Product Summary Section Three
Cypress.Commands.add('NavigateToCartPageProductSummarySectionThree', () => {
    cy.get('#MainContent > div > div.cart-container > div:nth-child(3)')
})

//Navigate to Cart Page's Product Summary Section Four
Cypress.Commands.add('NavigateToCartPageProductSummarySectionFour', () => {
    cy.get('#MainContent > div > div.cart-container > div:nth-child(4)')
})

//Navigate to Cart Page's Product Summary Section Line Item One
Cypress.Commands.add('NavigateToCartPageProductSummarySectionLineItemOne', () => {
    cy.get('#Quantity--0')
})

//Navigate to Cart Page's Product Summary Section Line Item Two
Cypress.Commands.add('NavigateToCartPageProductSummarySectionLineItemTwo', () => {
    cy.get('#Quantity--1')
})

//Navigate to Cart Page's Product Summary Section Line Item Three
Cypress.Commands.add('NavigateToCartPageProductSummarySectionLineItemThree', () => {
    cy.get('#Quantity--2')
})

//Navigate to Cart Page's Product Summary Section Line Item Four
Cypress.Commands.add('NavigateToCartPageProductSummarySectionLineItemFour', () => {
    cy.get('#Quantity--3')
})

//Navigate to Checkout Page from Cart Page
Cypress.Commands.add('NavigateToCheckoutPagefromCartPage', () => {
    cy.get('#MainContent > div > div > div:nth-child(4) > div.checkout-btns > div.checkout-btn > a').click()
})

//Navigate to Checkout Page from Cart Icon
Cypress.Commands.add('NavigateToCheckoutPagefromCartIcon', () => {
    cy.get('#shopify-section-header > header > div.site-header-container.utilities > div.utility-link.mobile-order-7 > #minicart-toggle').click()
    cy.get('#mini-cart > div > form > div.cart-buttons > button.collect-checkout.cart-buttons-checkout > span').contains('Checkout').click({force: true})  
})

//Navigate to Product Line Item Section on Checkout Page
Cypress.Commands.add('NavigateToProductLineItemSection', () => {
    cy.get('#order-summary > div > div.order-summary__section.order-summary__section--product-list.cart > div > table > tbody > tr.product')
})

