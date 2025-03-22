/// <reference types = "cypress" />

describe('cypress e2e testing',()=>{
   beforeEach('',()=>{
    cy.visit('https://example.com/')
   })

   afterEach('',()=>{
    cy.log('Test completed!!')
   })

   //skip & only tags can be used based on the scenario
    it('First test',()=>{
        cy.url().should('contain','example.com')
    })

    it('Assert title',()=>{
        cy.title().should('contain','Example Domain')
    })

    it('Assert element, wait, log & realod',()=>{
        cy.get('h1').should('be.visible')
        cy.wait(1000)
        cy.log('Befor relaod')
        cy.reload()
        cy.log('After reload')
    })
})