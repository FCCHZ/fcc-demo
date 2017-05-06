const userSql = {
    login: 
        'select * from fcc.user where name=? and password=?'
}

module.exports = userSql