/// <reference types="cypress" />

describe('Validate Header', () =>{
    // it.only('Successfully validate content-type', () => {
    //     cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    //     cy.get('@pokemon').its('headers').its('content-type')
    //         .should('include', 'application/json; charset=utf-8')
    // })

    // Tugas
    it('Successfully validate body', () => {
        var ditto = {
            "name": "imposter"
        }
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', ditto).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[1].ability.name).to.eq(ditto.name)
        })
    });
})