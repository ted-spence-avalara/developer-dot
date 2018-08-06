const NUMAPIS = 2;
let expectedNumberOfApiEndpoints;

module.exports = {
    'before': function(browser) {
        browser.maximizeWindow();
    },

    'after': function(browser) {
        browser.end();
    },

    'API Reference: Communications: REST v1 (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 31;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/communications/v1/methods/ApiV1ApplicationAFCDatabaseEngineVersionGet/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    },
    'API Reference: Communications: REST v2 (verify number of endpoints)': function(browser) {
        expectedNumberOfApiEndpoints = 3;

        browser
            .initialize(browser.globals.baseURL + '/api-reference/communications/v2/methods/ApiV2AfcCalcTaxesPost/')
            .apiReference.methods.layout(NUMAPIS, expectedNumberOfApiEndpoints);
    }
};
