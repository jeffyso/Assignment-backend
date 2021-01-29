const Validator = use('Validator')

module.exports = async function universityValidator (data) {
  if (typeof data !== 'object') throw new Error()

  const { universities_name } = data
  const rules = {
    universities_name: 'required'
  }
  const validation = await Validator.validateAll({
    universities_name
  }, rules)

  return {
    error: validation.messages()
  }
}