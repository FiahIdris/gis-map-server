const { Location, User } = require('../models/index.js')


class LocationController {

  static async findAll(req, res, next) {

    try {
      const locations = await Location.findAll({
        include: {
          model: User
        }
      })

      res.status(201).json({
        locations
      })
    } catch (err) {

      next(err)
    }

  }

  static async findAllFilterDesc(req, res, next) {

    try {
      const locations = await Location.findAll({
        include: {
          model: User
        },
        order: [
          [ 'id', 'DESC' ],
        ],
      })

      res.status(201).json({
        locations
      })
    } catch (err) {

      next(err)
    }

  }

  static async findAllFilterAsc(req, res, next) {

    try {
      const locations = await Location.findAll({
        include: {
          model: User
        },
        order: [
          [ 'id', 'ASC' ],
        ],
      })

      res.status(201).json({
        locations
      })
    } catch (err) {

      next(err)
    }

  }
  static async findOne(req, res, next) {

    const name = req.params.name
    // console.log(name)
    try {
      const findOne = await Location.findOne({
        where: {
          name: name
        }
      })
      if (findOne) {
        res.send(200).json({
          findOne
        })
      }

    } catch (err) {
      next(err)
    }

  }

  static async create(req, res, next) {
    let data = req.body.data

    // console.log(data, "====createone=====")

    try {
      await Location.create({
        name: data.name,
        city: data.city,
        province: data.province,
        latitude: data.latitude,
        longitude: data.longitude,
        UserId: userLogin.id
      })
      const newData = await Location.findAll({
        include: {
          model: User
        }
      })

      res.status(201).json({
        newData
      })
    } catch (err) {
      next(err)
    }
  }

  static async edit(req, res, next) {
    const locationId = Number(req.params.id)
    const data = req.body.data.data

    // console.log(data)

    try {
      const location = await Location.update({
        name: data.name,
        city: data.city,
        province: data.province,
        latitude: data.latitude,
        longitude: data.longitude,
        UserId: userLogin.id
      }, {
        where: {
          id: locationId
        }
      })

      res.status(200).json({
        location
      })
    } catch (err) {

      next(err)
    }
  }

  static async delete(req, res, next) {
    const id = Number(req.params.id)

    try {
      await Location.destroy({
        where: {
          id: id
        }
      })
      const data = await Location.findAll({
        include: {
          model: User
        }
      })

      res.status(201).json({
        data
      })
    } catch (err) {
      next(err)
    }
  }

}

module.exports = LocationController