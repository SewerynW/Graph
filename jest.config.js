module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest-amcharts'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!(@amcharts)\\/).+\\.js$'
  ],
  watchPlugins: ['<rootDir>/plugins/amCharts.js']
}
