exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/skodo' :
                            'mongodb://localhost/skodo-dev');
exports.PORT = process.env.PORT || 5000;