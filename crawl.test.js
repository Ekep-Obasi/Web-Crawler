const { normaliseURL, getUrlsFromHTML } = require("./crawl");
const { test, expect } = require("@jest/globals");

const testNormURLArr = [
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

const testGetUrlFromHTML = [
  {
    testName: "getUrlsFromHTML test",
    inputHtmlBody: `
    <html>
      <body>
        <a href='http://developer.mozilla.org/en-US/docs/Web/API/URL/URL/'> 
        Learn About URL constructor in javascript
        </a>
      </body>
    </html>
    `,
    inputBaseURL: "http://developer.mozilla.org/en-US/docs/Web/API/URL/URL/",
  },
];

testNormURLArr.forEach(({ testName, testValue, testExpOutcome }) =>
  test(testName, () => expect(normaliseURL(testValue)).toEqual(testExpOutcome))
);

testGetUrlFromHTML.forEach(({ testName, inputHtmlBody, inputBaseURL }) =>
  test(testName, () =>
    expect(getUrlsFromHTML(inputHtmlBody, inputBaseURL)).toEqual([inputBaseURL])
  )
);
