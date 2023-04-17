
const xbutton = ".cls"
const account = '[class="trig -df -i-ctr -fs16"]'
const signin = '[class="btn _prim -fw _md"]'
const email='.mdc-text-field__input'
const continue1 = '[class="mdc-button mdc-button--touch mdc-button--raised access-btn"]'
const password = '[class="mdc-text-field__input password-input  "]'
const confirmpassword= '.mdc-text-field__input.confirm-password-input'
const continue2 = '[class="mdc-button mdc-button--touch mdc-button--raised to-personal-details mdc-ripple-upgraded"]'
const firstname ="#input_first_name"
const lastname ="#input_last_name"
const phone=".mdc-text-field__input.phone-input"
const continue3 = '[class="mdc-button mdc-button--touch mdc-button--raised to-personal-details-part-2 mdc-ripple-upgraded"]'
const gender = ".mdc-select__anchor"
const male = '[data-value="M"]'
const dateofbirth = "#input_birth_date"
const termsbox = "#acceptTC"
const continue4 = "#confirmBtn"
const loginbutton ="#loginButton"
const supermarket = ".-rad4"
const supermarket2 = 'span.text'
const cake = '[class="add btn _prim -pea _md"]'
const molto = '[data-name="Mini Chocolate Family - Pack of 12"]'
const successful ='.ic'
const cart = "#ci"
const cart2 = ".-fs20 -m -phm -pvxs"
const product = "div.info"
const addtocart1 ='[class="add btn _prim -pea _md"]'
const maincart= '[class="-df -i-ctr -gy9 -hov-or5 -phs -fs16"]'
const price1 = '.prc'   
const totalcart = '[class="-fs20 -plm -tar"]'

class homepage {

    getx_button(){return cy.get(xbutton)}
    getaccount_button(){return cy.get(account)}
    getsignin_button(){return cy.get(signin)}
    getemail_field(){return cy.get(email)}
    getcontinue_button(){return cy.get(continue1)}
    getpassword_button(){return cy.get(password)}
    getconfirmpassword_button(){return cy.get(confirmpassword)}
    getcontinue_button2(){return cy.get(continue2)}
    getlfirstname(){return cy.get(firstname)}
    getlastname(){return cy.get(lastname)}
    getphone(){return cy.get(phone)}
    getcontinue_button3(){return cy.get(continue3)}
    getgender(){return cy.get(gender)}
    getgender_male(){return cy.get(male)}
    getdateofbirth(){return cy.get(dateofbirth)}
    gettermsbox(){return cy.get(termsbox)}
    getcontinue_button4(){return cy.get(continue4)}
    getsuccessful_message2(){return cy.get('h2')}
    getlogin_button(){return cy.get(loginbutton)}
    getsupermarket_button(){return cy.contains('Supermarket')}
    getsupermarket_button2(){return cy.get(supermarket2)}
    getbakery_button(){return cy.contains('Bakery')}
    getcake_button(){return cy.get(cake)}
    getmolto_button(){return cy.get(molto)}
    getsuccessful(){return cy.get(successful)}
    getcart_button(){return cy.get(cart)}
    getcart_button2(){return cy.get(cart2)}
    getsuccessful_message3(){return cy.contains('Hi, Mohammed')}
    getproduct(){return cy.get(product)}
    getaddtocart_no1(){return cy.get(addtocart1)}
    getmain_cart(){return cy.get(maincart)}
    getprice1(){return cy.get(price1)}
    gettotal_cart(){return cy.get(totalcart)}
}
export default homepage