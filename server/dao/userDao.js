import sql from '../mappings/userSqlMapping'
import {query} from './asyncDB'

module.exports = {
    async login(params) {
        const result = await query(sql.login, [params.name, params.password])
        return result
    }
}