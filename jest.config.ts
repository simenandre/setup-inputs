import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  collectCoverageFrom: ['src/**/*'],
  testPathIgnorePatterns: ['.*/dist/.*', '.*dist.*'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
};

export default config;
