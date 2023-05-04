function normaliseURL(url) {
  const { hostname, pathname } = new URL(url);
  const hostPath = `${hostname}${pathname}`;

  if (hostPath.length !== 0 && hostPath.slice(-1) === "/")
    return hostPath.slice(0, -1);
  return hostPath;
}

module.exports = {
  normaliseURL,
};
