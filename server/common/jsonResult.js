export default (res, result) => {
    if (typeof result === 'undefined') {
        res.json({code: 1, msg: '操作失败'})
    }
    res.json(result)
}