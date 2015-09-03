
module.exports = {
    'Demo test expedia' : function (client) {
        client
            //Navigate
            .url('http://www.expedia.com')
            .waitForElementPresent('body', 1000);

    },
    'Verify Mobile Text ' : function(client) {
        client

            //Verify Text Value
            .assert.containsText('#primary-header-mobile', 'Mobile')
    },

    'Verify Click Event ' : function(client) {
        client

            //Click Element
            .click('button[id=search-button]')
            .waitForElementPresent('#package-errors', 1000)

    },
    'Verify attributes' : function(client) {
        client

            //check attribute values  : tab index, class, color etc
            .verify.attributeEquals('#package-errors','tabindex', '-1' )
            .verify.attributeEquals('#appDLphoneNumber','class', ' phoneNumberBox')
            .verify.attributeEquals('#appDLphoneNumber','style', 'color: rgb(199, 199, 199);')
            .verify.attributeEquals('#appDLphoneNumber','placeholder', 'XXX-XXX-XXXX')

    },
    'Form fill out & drop down' : function(client) {
        client
            //DropDown
            .execute('document.getElementById("package-1-adults").options[3].selected=true')

            // Fill out form
            .setValue('#package-returning','12/19/2015')
            .setValue('#package-departing','12/18/2015')
            .setValue('#package-origin','SEA')
            .setValue('#package-destination','SFO')

    },
    'Xpath & css example' : function(client) {
        client
            //Go To Hotels Tab
            .useXpath()
            .click("//*[@id='tab-hotel-tab']/span[1]")
            .click("//*[@id='tab-flight-tab']/span[1]")
            .click("//*[@id='tab-package-tab']")
            .useCss()

            //Submit Form
            .click('button[id=search-button]')
    },
    'Deeplink & Analytics' : function(client) {
        client
            //deeplink

            .url('http://expedia.com/Hotels')
            //Selected tab is hotels
            .verify.attributeEquals('#all-in-hotel-header-link', 'class','selected-tab')
            //Verify Analytics
            .verify.attributeEquals('#primary-header-hotel','data-onclick',"xp.nav.trackAnalytics(this,'a','Header.Hotels')")
            .end();
    }
};