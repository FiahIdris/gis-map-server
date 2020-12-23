const { User } = require('../models/index.js')
const { comparePassword } = require('../helpers/passwordHandlers.js')
const { generateToken } = require('../helpers/tokenHandler.js')


class UserController {

  static async login(req, res, next) {
    const data = req.body
    // console.log(data.data.email, "&&&&&&&&&&")

    try {
      if (data.data.email !== 'admin@mail.com') {
        throw {
          name: `EmailNotFound`,
          message: `*Sorry, email admin salah !`
        }
      } else {
        const userLogin = await User.findOne({
          where: {
            email: data.data.email
          }
        })
        if (!comparePassword(data.data.password, userLogin.password)) {
          throw {
            name: 'InvalidPassword',
            message: '*Sorry, password invalid !'
          }
        }
        else {
          const access_token = await generateToken(userLogin.email)
          res.status(201).json({
            access_token
          })
        }
      }
    } catch (err) {
      // console.log("======masuk ssini,", err)
      next(err)
    }


  }


}

module.exports = UserController