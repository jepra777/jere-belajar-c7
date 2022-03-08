const { UserBiodata } = require('../models')

class BiodataController {
  static getBiodata = async (req, res, next) => {
    // ambil userid dari cookies
    const { UserId } = req.cookies

    // ambil dari req.user yang diselipin dari authentikasi
    const userIdDariReqUser = req.user.id
    const userStatus = req.user.role

    try {
      if ( userStatus === "SUPERADMIN" ){
        const userBiodata = await UserBiodata.findAll()
          res.status(200).json({ userBiodata })
      }
      res.status(200).json({ message: "Anda Bukan Super Admin" })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static getBiodataById = async (req, res, next) => {
    try {
    //   const userBiodata = await UserBiodata.findByPk({
    //     where: {
    //       id: req.user.id
    //     }
    //   })
    //   res.status(200).json({ userBiodata })
     // ambil userid dari cookies
     const { UserId } = req.cookies

     // ambil dari req.user yang diselipin dari authentikasi
     const userIdDariReqUser = req.user.id
    const userBiodata = await UserBiodata.findOne({
        where: {
          UserId: userIdDariReqUser
        }
      })
      res.status(200).json({ userBiodata })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = { BiodataController }