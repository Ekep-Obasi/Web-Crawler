const { JSDOM } = require("jsdom");

function getUrlsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");

  linkElements.forEach((linkElement) => urls.push(linkElement.href));
  return urls;
}

function normaliseURL(url) {
  const { hostname, pathname } = new URL(url);
  const hostPath = `${hostname}${pathname}`;

  if (hostPath.length !== 0 && hostPath.slice(-1) === "/")
    return hostPath.slice(0, -1);
  return hostPath;
}

module.exports = {
  normaliseURL,
  getUrlsFromHTML,
};
