'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UniversitySchema extends Schema {
  up () {
    this.create('universities', (table) => {
      table.increments('id')
      table.string('name',255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('universities')
  }
}

module.exports = UniversitySchema
