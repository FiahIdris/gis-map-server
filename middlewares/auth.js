
const { decodeToken } = require('../helpers/tokenHandler.js')
const { User } = require('../models/index.js')

async function authentication(req, res, next) {

  let token = ""
  if (req.headers.access_token) {
    token = req.headers.access_token
  } else {
    token = req.body.headers.access_token
  }

  // console.log(req.body.headers.access_token, "=======token")

  if (!token) {

    res.status(404).json({
      status: 404,
      message: `Please login first`
    })
  } else {

    try {
      const payload = decodeToken(token)

      const dataUser = await User.findOne({
        where: {
          email: payload
        }
      })

      if (!dataUser) {
        throw ({
          name: `NotFound`,
          message: `Please login first`
        })
      }
      else {
        userLogin = dataUser

        next()
      }
    } catch (err) {
      console.log('this errorrrr', err);
      next(err)
    }
  }
}


module.exports = {
  authentication
}