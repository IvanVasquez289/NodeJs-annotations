const { uuidv4 } = require('./get-uuid-[plugin]');
const {getAge} = require('./get-age.[plugin]')
const {httpClientPluggin} = require('./http-client-pluggin')
const buildLogger = require('./logger.plugin')

module.exports = {
    uuidv4,
    getAge,
    httpClientPluggin,
    buildLogger
}