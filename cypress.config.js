const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      emailAddress: process.env.EMAIL_ADDRESS,
      mmPassword: process.env.MM_PASSWORD,
    }
  },
});
