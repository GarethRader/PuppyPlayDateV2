// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // "collectCoverageFrom": ["!src/**/*/"], //ignore individual files when searching for test suites
  "modulePathIgnorePatterns": ["<rootDir>/__tests__/utils"], //ignore directories when searching for test suites
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.ts','.tsx'],
  transform: {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {   
                jsc: {
                    target: "es2021",
                },
            },
        ],
    },
    "collectCoverage": true,
    "coverageReporters": ["json", "text", "html"] // "coverageReporters": ["clover", "json", "lcov", ["text", {"skipFull": true}]] export formats

}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
export {}