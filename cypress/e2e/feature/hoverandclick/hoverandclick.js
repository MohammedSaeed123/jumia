
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from '../../../pages/homepage'

const homepageobject = new homepage()

Given('Iam in homepage and login email {string} {string}',(user1,user2)=>{
    cy.visit('/')
    homepageobject.getx_button().children().last().click()
    homepageobject.getaccount_button().children().first().click()
    homepageobject.getsignin_button().click()
    homepageobject.getemail_field().type(user1)
    homepageobject.getcontinue_button().click()
    homepageobject.getpassword_button().type(user2)
    homepageobject.getlogin_button().click()
})
When('hover over the supermarket',()=>{
    //homepageobject.getsupermarket_button().trigger('mouseover')
    homepageobject.getsupermarket_button().trigger('mouseover',{force:true})
    homepageobject.getbakery_button().click({force:true})
    homepageobject.getcake_button().click({force:true})
    homepageobject.getsuccessful().should('have.text',"Product added sucessfully")
    homepageobject.getmolto_button().click({force:true})
    homepageobject.getsuccessful().should('have.text',"Product added sucessfully")
    homepageobject.getcart_button().click()
    homepageobject.getcart_button2().should('have.text',"Cart (2)")

})