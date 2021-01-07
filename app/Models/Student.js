'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
  static get primaryKey() {
    return 'student_id'
}
  universities() {
    return this.belongsToMany('App/Models/University').pivotTable('connects')
  }
}

module.exports = Student
