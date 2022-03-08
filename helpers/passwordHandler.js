const bcrypt = require('bcrypt')
const salt =  10

const hashPassword = (password) => {
  return bcrypt.hashSync(password, parseInt(salt))
}

const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

// let passwordIcandiDB = ""
// hashPassword("icanGanteng").then((data => {
//   passwordIcandiDB = data
//   verifyPassword("icanGanteng", passwordIcandiDB).then(data => console.log(data))
// }))

module.exports = {
  hashPassword,
  verifyPassword
}