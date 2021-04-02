const jwt = require('jsonwebtoken');
const constants = require('./constants.js');

const getNewToken = req => {
    const payload = { mail: req.mail, role: 'user' };
    const accessToken = jwt.sign(payload, constants.ACCESS_TOKEN_SECRET, { expiresIn: constants.ACCESS_TOKEN_LIFE })
    const refreshToken = jwt.sign({}, constants.REFRESH_TOKEN_SECRET, {expiresIn: constants.REFRESH_TOKEN_LIFE})
    return { accessToken, refreshToken }; 
}

module.exports = getNewToken;