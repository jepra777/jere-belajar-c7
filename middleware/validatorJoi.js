const boom = require('@hapi/boom');

const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    // property itu buat define requestnya darimana, apakah dari body atau dari params atau dari query
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = { validatorHandler }