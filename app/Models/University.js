'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class University extends Model {
      student(){
          return this.belongsToMany('App/Models/Student').pivotTable('connects')
      }
}

module.exports = University
