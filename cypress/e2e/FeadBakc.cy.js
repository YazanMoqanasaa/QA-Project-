/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('https://stacksinfo.web.app/')
    

  })

  it('Verify the form"s behavior when no feedback is provided ', () => {
  
    cy.get("span.feedback-click").click()
    cy.get("input.submit-btn").click()

    
  })


  it('Verify the form"s behavior when no options are selected ', () => {
    cy.get("span.feedback-click").click()
    cy.get("input[value='Yes']").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()


    
  })

  it('TC1 Select Yes and Needs Improvement with Comment ', () => {
    cy.get("span.feedback-click").click()
    cy.get("input[value='Yes']").click()
    cy.get("img.option-1").click()

    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()


    
  })

  it('TC2 Select Yes and Below Expectations with Comment', () => {
    cy.get("span.feedback-click").click()
    cy.get("input[value='Yes']").click()
    cy.get("img.option-2").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })
 
  it('TC3 Choose Yes and Average with Comment', () => {
    cy.get("span.feedback-click").click()
    cy.get("input[value='Yes']").click()
    cy.get("img.option-3").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })

  it('TC4 Select Yes and Above Average with Comment', () => {
    cy.get("span.feedback-click").click()
    cy.get("input[value='Yes']").click()
    cy.get("img.option-4").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })


  it('TC5 Select Yes and Outstanding with Comment', () => {
    cy.get("span.feedback-click").click()
    cy.get("input[value='Yes']").click()
    cy.get("img.option-5").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })

  //**********************************************************
  it('TC6 Select No and Needs Improvement with Comment ', () => {
    cy.get("span.feedback-click").click()
    cy.get("input#No").click()
    cy.get("img.option-1").click()

    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()


    
  })

  it('TC7 Select No and Below Expectations with comment', () => {
    cy.get("span.feedback-click").click()
    cy.get("input#No").click()
    cy.get("img.option-2").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })
 
  it('TC8 Select No and Average with comment', () => {
    cy.get("span.feedback-click").click()
    cy.get("input#No").click()
    cy.get("img.option-3").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })

  it('TC9 Select No and Above Average with suspension', () => {
    cy.get("span.feedback-click").click()
    cy.get("input#No").click()
    cy.get("img.option-4").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })


  it('TC10 Pick No and Outstanding with Comment', () => {
    cy.get("span.feedback-click").click()
    cy.get("input#No").click()
    cy.get("img.option-5").click()
    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()
  })

  it(' not Select Yes .i Needs Improvement with Comment just ', () => {
    cy.get("span.feedback-click").click()
    cy.get("img.option-1").click()

    cy.get("textarea.text-area").type("Needs Improvement, The design could use more contrast for better readability.")
    cy.get("input.submit-btn").click()


    
  })
  
})


















