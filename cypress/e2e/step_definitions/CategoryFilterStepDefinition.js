/// <reference types="Cypress" />

import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pageObject/HomePage';

const homePage = new HomePage();

Given('I am on the DemoBlaze website home page', () => {
    cy.visit('/');
})

When('I click on the Monitors filter button', function() {
    homePage.clickMonitorsFilterBtn();
})

Then('only Monitor products appear', () => {
    homePage.assertThatFilteredElements(2);
})

