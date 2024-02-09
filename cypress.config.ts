import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'afskiz',
  e2e: {
    baseUrl: 'http://localhost:3001/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
})
