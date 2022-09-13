const path = require('path');

module.exports = {
  home: (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
  },
  about: (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
  },
};
