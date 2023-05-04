const { normaliseURL } = require("./crawl");
const { test, expect } = require("@jest/globals");

const testArr = [
  {
    testName: "normaliseURL strip protocol",
    testValue: "https://developer.mozilla.org/en-US/docs/Web/API/URL/URL",
    testExpOutcome: "developer.mozilla.org/en-US/docs/Web/API/URL/URL",
  },
  {
    testName: "normaliseURL trailing slashes",
    testValue: "https://developer.mozilla.org/en-US/docs/Web/API/URL/URL/",
    testExpOutcome: "developer.mozilla.org/en-US/docs/Web/API/URL/URL",
  },
  {
    testName: "normaliseURL capitals",
    testValue: "https://DEVELOPER.mozilla.org/en-US/docs/Web/API/URL/URL",
    testExpOutcome: "developer.mozilla.org/en-US/docs/Web/API/URL/URL",
  },
  {
    testName: "normaliseURL strip http",
    testValue: "http://developer.mozilla.org/en-US/docs/Web/API/URL/URL",
    testExpOutcome: "developer.mozilla.org/en-US/docs/Web/API/URL/URL",
  },
];

testArr.forEach(({ testName, testValue, testExpOutcome }) =>
  test(testName, () => expect(normaliseURL(testValue)).toEqual(testExpOutcome))
);
