
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from '../../../pages/homepage';

const homepageobject = new homepage()

Given('Iam in homepage',()=>{
    cy.visit('/')
})
When('login with email {string} password {string}',(user1,user2)=>{

    homepageobject.getx_button().children().last().click()
    homepageobject.getaccount_button().children().first().click()
    homepageobject.getsignin_button().click()
    homepageobject.getemail_field().type(user1)
    homepageobject.getcontinue_button().click()
    homepageobject.getpassword_button().type(user2)
    homepageobject.getlogin_button().click()
    homepageobject.getsuccessful_message3().should('be.visible')
    


})