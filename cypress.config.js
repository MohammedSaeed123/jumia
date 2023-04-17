const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight:1600,
    viewportWidth:1600,
    baseUrl:"https://www.jumia.com.eg/",
    "specPattern": "cypress/e2e/**/*.{feature,features}",
    setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config),
            on('task', {
                log(message) {
                    console.log(message)
                    return null
                },
            })
    },
  },
});
