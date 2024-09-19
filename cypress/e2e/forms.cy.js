describe('Test case 3: Form Tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test Case 3.1: Test subscribe form', () => {
        //1: Testing forms: contains gmail  check on click of a button
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('dsamal.rony@gmail.com')
        cy.contains(/successfully subbed: dsamal.rony@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/successfully subbed: dsamal.rony@gmail.com!/i).should('exist')
        cy.wait(2000)
        cy.contains(/successfully subbed: dsamal.rony@gmail.com!/i).should('not.exist')

        //2: Testing forms: does not contains gmail  check on click of a button
        cy.get('@subscribe-input').type('dsamal.rony@gmail.io')
        cy.contains(/invalid email: dsamal.rony@gmail.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: dsamal.rony@gmail.io!/i).should('exist')
        cy.wait(2000)
        cy.contains(/invalid email: dsamal.rony@gmail.io!/i).should('not.exist')

        //3: email does not exist check on click of a button
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')

    })

})