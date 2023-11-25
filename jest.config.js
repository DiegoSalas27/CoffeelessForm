module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts,tsx)',
    '!**/*d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@validator/(.*)$': '<rootDir>/src/validator/$1',
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  }
}