const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@teste.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Prefeito Altamir' } },
                { 
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    } 
                }
            ]
        })

        return res.json(users)
    }
}