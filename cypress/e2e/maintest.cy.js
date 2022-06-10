Cypress.Cookies.defaults({
  preserve: 'userKey',
})

describe('empty spec', () => {
  it('should validate', () => {
    cy.clearCookies();
    cy.visit('/');
    cy.get('button').click();
    cy.get('.signform__formErrors p').should('have.text', "Поле 'Логин' заполненно не верно");
    cy.get('.inputWrap--alert input').type('Very very big text here its bad').should('have.value', "Very very big text here its bad");
    cy.get('button').click();
    cy.get('.signform__formErrors p').should('have.text', "Поле 'Логин' заполненно не верно");
    cy.get('input[type=password]').type('Very very big text here its bad').should('have.value', "Very very big text here its bad");
    cy.get('button').click();
    cy.get('.signform__formErrors p').should('have.text', "Поле 'Логин' заполненно не верно");
    cy.get('.inputWrap--alert input').clear();
    cy.get('.inputWrap--alert input').type('Some login').should('have.value', "Some login");
    cy.get('button').click();
    cy.get('.signform__formErrors p').should('have.text', "Поле 'Пароль' заполненно не верно");
    cy.get('.inputWrap--alert input').clear();
    cy.get('.inputWrap--alert input').type('Some login').should('have.value', "Some login");
    cy.get('button').click();
    cy.get('.signform__formErrors p').should('have.text', "Не верный логин или пароль");
  })


  it('should login', ()=>{
    cy.get('input[type=text]').clear();
    cy.get('input[type=password]').clear();
    cy.get('input[type=text]').type('rossetyuser');
    cy.get('input[type=password]').type('Rosset423!Cartel');
    cy.get('button').click();

    cy.get('.pages__title h1').should('have.text', 'Личный кабинет');
  })

  it('should get User Iformation', ()=>{
    cy.get('.pages__infoTxtVariant h2').invoke('text').should('have.length.above', 1);
    cy.get('.header__name p').invoke('text').should('have.length.above', 1);
    cy.get('.pages__infoTxtVariant h2').invoke('text').should('have.length.above', 1);
  })

  it('should route all pages', ()=>{
    cy.contains('Контакты').click();
    cy.get('.contacts');
    cy.contains('Бюджет').click();
    cy.get('.pages__info');
    cy.get('.pages__grafics');
  })

  it ('shuold time menu work', ()=>{
    cy.get('#dateGrafics').click();
    cy.get(".pages__infoDate").contains('Январь').click();
    cy.get('.pages__infoYearArr:first-child').click();
    cy.get('#dateGrafics').click();
    cy.get('#dateGrafics').click();
    cy.get(".pages__infoDate").contains('Март').click();
    cy.get('.pages__infoYearArr:last-child').click().click();
    cy.get('#dateGrafics').click();
  })

  it('should get user menu and exit', ()=>{
    cy.get('.header__name').click();
    cy.contains('Выйти из системы').click();
    cy.contains('Войти');
  })
  
  
  it ('clear cookie', ()=>{
    cy.setCookie("userKey", "");
  })
})