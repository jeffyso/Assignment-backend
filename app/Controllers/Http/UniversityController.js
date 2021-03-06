'use strict'

const University = use('App/Models/University')
const Validator = require('../../../services/UniversityValidator')
class UniversityController {
    async index({ request }) {
        let university = await University.query().fetch()
        return { status: 200, error: undefined, data: university}
    }
    async show({ request }) {
        const { id } = request.params
        const university = await University.query().with('students').where({ universities_id: id }).fetch()
        return { status: 200, error: undefined, data: university }
    }
    async store({ request }) {
        const validatedData = await Validator(request.body);
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined };
        let university = await University.create(request.body)
        await university.save()
        return { status: 200, error: undefined, data: university }
    }
    async update({ request }) {
        const { id } = request.params
        const data = request.body
        const university = await University.query().where('universities_id', id).update(data)
        if (!university) {
            return { status: 500, error: `Not Found `, data: undefined };
        }
        const uni = await University.query().where('universities_id', id).fetch()
        return { status: 200, error: undefined, data: uni }
    }
    async destroy({ request }) {
        const { id } = request.params
        const university = await University.query().where({ universities_id: id }).delete()
        if (!university) {
            return { status: 500, error: `Not Found `, data: undefined };
        }
        return { status: 200, error: undefined, message: 'DeleteComplete' }
    }
}

module.exports = UniversityController
