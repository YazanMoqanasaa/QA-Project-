/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
     
      cy.visit('https://stacksinfo.web.app/')
      
  
    })
  
  
  
  
    it(' search city', () => {
      cy.get("input.search-bar").click()
      cy.get("input.search-bar").type("nablus")
      cy.wait(2000);
  
  
      
    })
  
    it(' search company', () => {
      cy.get("input.search-bar").click()
      cy.get("input.search-bar").type("radix")
      cy.wait(2000);
  
      
    })
  
    it(' search language', () => {
      cy.get("input.search-bar").click()
      cy.get("input.search-bar").type("c++")
  
      cy.wait(2000);
  
      cy.get("input.search-bar").click()
      cy.get("input.search-bar").type("python")
      cy.wait(2000);
  
    })
  
    it('check search at Language', () => {
      cy.get('.search-bar').type('Flask')
      cy.wait(2000);
  
  
      })
  
      it('check search at DBA', () => {
     
        cy.get('.search-bar').type('DBA')
      })
  
      it('check search at Backend',()=>{
        cy.get('.search-bar').type('Backend')
      })
  
      it('check search at language and company and  technology and  Negative', () => {
        cy.get('.search-bar').type('c++ and EXALT Technologies Ltd and UIUX ')
        cy.wait(2000);
  
        cy.get('.Not-found-container').should('not.contain', 'No result available.');
      })
  
    
      it('check search at Company name and technology ', () => {
        cy.get('.search-bar').type('Olivery and frontend')
        cy.wait(2000);
  
      })
  
      
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
