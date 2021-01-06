'use strict'

const Student = use('App/Models/Student')

class StudentController {
    async index ({ request }) {
        let student = await Student.query().fetch()
        return {status:200 , error:undefined ,data:student}
    }
    async show ({ request }) {
        const {id} = request.params
        const student = await Student.query().where({id:id}).fetch()
        return {status:200 , error:undefined ,data:student}
    }
}

module.exports = StudentController
