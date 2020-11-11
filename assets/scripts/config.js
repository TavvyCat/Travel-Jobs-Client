'use strict'

let apiUrl
const apiUrls = {
  production: ' https://tavvycat.github.io/Travel-Jobs-Client/travel-jobs-api.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = apiUrl
