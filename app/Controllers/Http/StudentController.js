'use strict'

const Student = use('App/Models/Student')
const University = use('App/Models/University')
const Connect = use('App/Models/Connect')


class StudentController {
    async index({ request }) {
        let student = await Student.query().fetch()
        return { status: 200, error: undefined, data: student }
    }
    async show({ request }) {
        const { id } = request.params
        const student = await Student.query().with('universities').where({ student_id: id }).fetch()
        return { status: 200, error: undefined, data:student}
    }
    async store({ request }) {
        const { first_name, last_name, universities_name } = request.body
        const student = await Student.create({ first_name, last_name })
        const university = await University.query().where({ universities_name }).fetch().then(response => JSON.parse(JSON.stringify(response)))
        const checkData = university.map(item => item.universities_id)
        let checkId = await Student.query().count('student_id as id').then(response => JSON.parse(JSON.stringify(response[0])))
        const connect = await Connect.create({ student_id: checkId.id, university_id: checkData[0] })

        return { status: 200, error: undefined, data: student }
    }
    async update({ request }) {
        const { id } = request.params
        const data = request.body
        const student = await Student.query().where('student_id', id).update(data)
        if (!student) {
            return { status: 500, error: `Not Found `, data: undefined };
        }
        const std = await Student.query().where('student_id', id).fetch()
        return { status: 200, error: undefined, data: std }
    }
    async destroy({ request }) {
        const { id } = request.params
        const student = await Student.query().where({ student_id: id }).delete()
        if (!student) {
            return { status: 500, error: `Not Found `, data: undefined };
        }
        return { status: 200, error: undefined, message: 'DeleteComplete' }
    }
}

module.exports = StudentController
