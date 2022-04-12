const { BiodataController } = require('../controllers/biodataController')
const authentication = require('../middleware/authentication')
const authorisasiBiodata = require('../middleware/authorisasiBiodata')
const biodataRouter = require('express').Router()


/**
 * proses authentikasi yang terjadi
 * 1. dari login, login controller akan generate cookies dan diselipin di browser
 * 2. di biodataRouter.get("/"), ketika user akses ("/") dia akan masuk ke middleware authentikasi terlebih dahulu
 */
biodataRouter.use(authentication)
biodataRouter.get("/", BiodataController.getBiodata)
biodataRouter.get("/:id", authorisasiBiodata, BiodataController.getBiodataById)

module.exports = biodataRouter 