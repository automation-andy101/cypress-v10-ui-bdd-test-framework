class HomePage {

    elements = {
        brandBtn: () => cy.get('#nava'),
        laptopsFilterBtn: () => cy.get('[onclick="byCat(\'notebook\')"]'),
        monitorsFilterBtn: () => cy.get('[onclick="byCat(\'monitor\')"]')
    }

    clickLaptopsFilterBtn() {
        this.elements.laptopsFilterBtn().click();
    }

    clickMonitorsFilterBtn() {
        this.elements.monitorsFilterBtn().click();
    }

    assertThatFilteredElements(num) {
        cy.get('.col-lg-4.col-md-6.mb-4').should('have.length', num);
    }

}

export default HomePage;
