   //1: Test case 1: dummy test case
describe('Test case 1: Fundamentals Test dummy', () => {
  it('Test case 1.1: passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

  //1: Test case 2: fundamentals test case
describe('Test case 2:Fundamentals Test', () => {
  // test 1: check whether the route available or not
  beforeEach(()=>{
    cy.visit('/fundamentals') 
  })

  // test 3: check whether correct page in the same route with dom elements - without custom commands
  it('Test case 2.1: Contains correct header text', () => {
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })

  // test 4: check whether on click text is appearing or not
  it('Test case 2.2: Accordion Looks correctly', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"]  div[role=button]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"]   div[role=button]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  })

 // test 5: after adding the custom command - 
 it('Test case 2.3: Contains correct header text with custom test', () => {
  cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
})
})
// asynchronous nature of cypress while getting a button from dom element


