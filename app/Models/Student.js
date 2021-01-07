'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
  university() {
    return this.belongsToMany('App/Models/University').pivotTable('connects')
  }
}

module.exports = Student
