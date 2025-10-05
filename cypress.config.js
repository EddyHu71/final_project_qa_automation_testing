const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    env: {
      uiUrl: "https://opensource-demo.orangehrmlive.com/",
    },
  },
});
