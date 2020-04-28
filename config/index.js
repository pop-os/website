const fs = require('fs')

const DEPLOY_ENV = (process.env.DEPLOY_ENV || process.env.NODE_ENV || 'development')
const NODE_ENV = (DEPLOY_ENV === 'development') ? 'development' : 'production'

const configFiles = fs.readdirSync(__dirname)
const configFile = `${DEPLOY_ENV.toLowerCase()}.js`
const secretConfigFile = `${DEPLOY_ENV.toLowerCase()}.secret.js`

if (configFiles.includes(configFile)) {
  module.exports = require(`./${configFile}`)
} else {
  module.exports = require('./development.js')
}

if (configFiles.includes(secretConfigFile)) {
  module.exports = {
    ...module.exports,
    ...require(`./${secretConfigFile}`)
  }
}

module.exports['DEPLOY_ENV'] = DEPLOY_ENV
module.exports['NODE_ENV'] = NODE_ENV
