import userDao from '../dao/userDao'
import jsonResult from '../common/jsonResult'

exports.login = async (req, res) => {
    const params = {}
    params.name = req.body.username
    params.password = req.body.password
    try {
        const result = await userDao.login(params)
        if (result.length > 0) {
            jsonResult(res, {
                code: 200,
                msg: '登录成功'
            })
        } else {
            jsonResult(res, {
                code: 200,
                msg: '用户名或密码错误'
            })
        }
    } catch (err) {
        jsonResult(res, {
            code: 500,
            err
        })  
    }
}