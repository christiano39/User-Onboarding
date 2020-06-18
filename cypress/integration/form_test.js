describe('User can type in form', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'http://localhost:3000')
    })

    it('can type a name into the name field', () => {
        cy.get('input[name=name]')
            .should('be.empty')
            .type('Christian Arneson')
            .should('have.value', 'Christian Arneson')
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can type an email into the email field', () => {
        cy.get('input[name=email]')
            .should('be.empty')
            .type('carneson39@gmail.com')
            .should('have.value', 'carneson39@gmail.com')
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can type a password into the password field', () => {
        cy.get('input[name=password]')
            .should('be.empty')
            .type('password123')
            .should('have.value', 'password123')
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can select a role from the dropdown', () => {
        cy.get('select[name=role]')
            .select('Alumni')
            .should('have.value', 'Alumni')
            .select('Team Lead')
            .should('have.value', 'Team Lead')
            .select('Instructor')
            .should('have.value', 'Instructor')
            .select('Student')
            .should('have.value', 'Student')
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can select a gender from the radio buttons', () => {
        cy.get('input[value=NA]')
            .click()
            .should('be.checked')
        cy.get('input[value=Female]')
            .click()
            .should('be.checked')
        cy.get('input[value=Male]')
            .click()
            .should('be.checked')
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can check the terms of service checkbox', () => {
        cy.get('input[name=terms]')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        cy.get('button#submitBtn').should('not.be.disabled')
    })
})