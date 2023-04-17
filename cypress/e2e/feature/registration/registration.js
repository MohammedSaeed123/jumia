import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homepage from '../../../pages/homepage';





const homepageobject = new homepage
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  var email = 'mohammed'+getRndInteger(1,10000)+'@gmail.com'
  

Given('Iam in home page',()=>{

    cy.visit('/')

})
When('click on the account button',()=>{

    cy.log(email)
    homepageobject.getx_button().children().last().click()
    homepageobject.getaccount_button().children().first().click()
    homepageobject.getsignin_button().click()

})
When('enter email',()=>{

    homepageobject.getemail_field().type(email)
    homepageobject.getcontinue_button().click()
    
})
When('enter password {string}',(password)=>{

    homepageobject.getpassword_button().type(password)
    homepageobject.getconfirmpassword_button().type(password)
    homepageobject.getcontinue_button2().click()
})
When ('enter firstname lastname phone {string} {string} {string}',(user,user1,user2)=>{
    homepageobject.getlfirstname().type(user)
    homepageobject.getlastname().type(user1)
    homepageobject.getphone().type(user2)
    homepageobject.getcontinue_button3().click()
})
When('select gender and date of birth',()=>{

    homepageobject.getgender().children().last().click({force:true})
    homepageobject.getgender_male().click()
    homepageobject.getdateofbirth().type('1999-01-01')
    homepageobject.gettermsbox().check()
    homepageobject.getcontinue_button4().click()
    homepageobject.getsuccessful_message2().should('have.text',"Mohammed, Your account has been created!")

})
