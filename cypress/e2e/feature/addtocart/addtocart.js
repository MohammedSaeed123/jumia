import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from '../../../pages/homepage'

const homepageobject = new homepage()

Given('Iam in home page and login {string} {string}',(user1,user2)=>{
    cy.visit('/')
    homepageobject.getx_button().children().last().click()
    homepageobject.getaccount_button().children().first().click()
    homepageobject.getsignin_button().click()
    homepageobject.getemail_field().type(user1)
    homepageobject.getcontinue_button().click()
    homepageobject.getpassword_button().type(user2)
    homepageobject.getlogin_button().click()
})
When('add to cart',()=>{
    cy.wait(5000)

    homepageobject.getsupermarket_button().trigger('mouseover',{force:true})
    homepageobject.getbakery_button().click({force:true})
    cy.wait(9000)
    homepageobject.getproduct().eq(7).trigger('mouceover',{force:true})
    homepageobject.getaddtocart_no1().eq(7).click({force:true})
    cy.wait(9000)
    homepageobject.getproduct().eq(8).trigger('mouceover',{force:true})
    homepageobject.getaddtocart_no1().eq(8).click({force:true})
    cy.wait(5000)
    homepageobject.getmain_cart().click({force:true})
    homepageobject.getprice1().first().invoke('text').then((price1)=>{
        cy.log(price1)
        var newprice1 = price1.replace('EGP ','')

       cy.log(newprice1);
       var finalprice1 = parseFloat(newprice1)
       cy.log(finalprice1)
    homepageobject.getprice1().eq(1).invoke('text').then((price2)=>{
      cy.log(price2)
      var newprice2 = price2.replace('EGP ','')

      cy.log(newprice2);
      var finalprice2 = parseFloat(newprice2)
      cy.log(finalprice2)

      homepageobject.gettotal_cart().invoke('text').then((totalcart)=>{
        cy.log(totalcart)
        var newtotalcart =totalcart.replace('EGP ','')
        cy.log(newtotalcart)
        var finaltotalcart = parseFloat(newtotalcart)
        cy.log(finaltotalcart)
        expect(finaltotalcart).to.eq(finalprice1+finalprice2)
    })
    })
    })
   

})
