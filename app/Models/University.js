'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class University extends Model {
    static get primaryKey() {
        return 'universities_id'
    }
      students(){
          return this.belongsToMany('App/Models/Student').pivotTable('connects')
      }
}

module.exports = University
