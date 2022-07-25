/// <reference types="cypress" />

describe('Validate Content', () => {
    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: "ditto"})
    });

    // Another Code
    it('Update User', () => {
        var newUser = {
            "name": 'mbgshk',
            "job": 'Test Engineer'
        }
        cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(newUser.name)
        })
    });
})