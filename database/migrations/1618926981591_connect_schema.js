'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectSchema extends Schema {
  up () {
    this.create('connects', (table) => {
      table.increments()
      table.integer('student_id').unsigned()
      table.integer('universities_id').unsigned()
      
      table.foreign('student_id')
      .references('students.student_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE') 
      
      table.foreign('universities_id')
      .references('universities.universities_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE') 
      
      table.timestamps()



    })
  }

  down () {
    this.drop('connects')
  }
}

module.exports = ConnectSchema
