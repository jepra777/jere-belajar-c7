require('dotenv').config()
const jwt = require('jsonwebtoken');

const generateToken = async (payload) => {
  return await jwt.sign(payload, process.env.SECRET_KEY)
}

const verifyToken = async (token) => {
  return await jwt.verify(token, process.env.SECRET_KEY)
}

const payloadIcan = {
  id: 1,
  email: "icancincun@gmail.com"
}

// baut ngetes doang apa si helpersnya guna gak
// generateToken(payloadIcan).then(token => {
//   console.log(token)
//   verifyToken(token).then(data => {
//     console.log(data)
//     let d = new Date(0)
//     d.setUTCSeconds(data.iat)
//     console.log(d)
//   })
// })

module.exports = {
  generateToken,
  verifyToken
}