const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => {
  if (isIndex) return 'Holberton School';
  return 'Holberton School main dashboard';
}

module.exports = {
  getFullYear,
  getFooterCopy
};
