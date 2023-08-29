module.exports = (req, res) => {
    ip = require('ip').address();
    res.json({ message: 'Hello from ip ' + ip });
};
