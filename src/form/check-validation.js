export default function (value, validation = null) {
  let isValid = true

  if (!validation) {
    return true
  }

  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }

  return isValid

}