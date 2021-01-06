'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('id')
      table.string('first_name',255).notNullable()
      table.string('last_name',255).notNullable()
      table.integer('universities_id').unsigned()

      table.foreign('universities_id')
      .references('universities.id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE') 

      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
