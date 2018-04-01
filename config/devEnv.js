const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    database: {
        uri: 'mongodb://127.0.0.1:27017/foodyo',
        secret: crypto,
        db: 'foodyo'
    }
}