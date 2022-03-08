const authRouter = require('./authRouter')
const biodataRouter = require('./biodataRouter')
const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.use('/auth', authRouter)
router.use('/biodata', biodataRouter)

module.exports = router