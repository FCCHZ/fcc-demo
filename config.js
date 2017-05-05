import path from 'path'

module.exports = {
    debug: process.env.NODE_ENV === 'production' ? false : true,
    name: 'FCC',
    host: 'localhost',
    port: 3000,
    db: {
        mysql: {
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'fcc',
            port: 3306
        }
    }
}