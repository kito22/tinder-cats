import type { Config } from "jest";

const config: Config = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testMatch: ["**/__tests__/**/*.(ts|tsx)", "**/?(*.)+(spec|test).(ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
export default config;
