"use strict";

module.exports = {
    bail: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/twitch-coin.ts",
    ],
    maxConcurrency: Infinity,
    coverageDirectory: "<rootDir>/jest",
    preset: "ts-jest",
    testEnvironment: "jsdom",
};
