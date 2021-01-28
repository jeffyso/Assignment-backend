'use strict'
const { test } = use('Test/Suite')('Student Validor')
const StudentValidator = require('../../services/StudentValidator')
test('should return error with incorrect data that required from user validator', async ({ assert }) => {
  const data = {
      first_name: '',
      last_name: '',
  }
  const university = await StudentValidator(data)
  assert.isOk(university.error,'university error')
})