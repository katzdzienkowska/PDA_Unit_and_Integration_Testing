describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update the display with the result of the operation after doing the arithmetical operations', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '4');
  });

  it('should allow multiple operations to be chained together', () => {
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '40.4');
  });

  it('should display the output as expected for a range of numbers: positive', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-add').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '100');
  });

  it('should display the output as expected for a range of numbers: negative', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '-3');
  });

  it('should display the output as expected for a range of numbers: decimals', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '22.4');
  });

  it('should display the output as expected for a range of numbers: very large numbers', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '7777622223');
  });

  it('should display error when dividing by 0', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', 'invalid');
  });

});