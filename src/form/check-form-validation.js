export default function (controls) {
  let isFormValid = true

  for (let control in controls) {
    if (controls.hasOwnProperty(control)) {
      isFormValid = controls[control].valid && isFormValid
    }
  }

  return isFormValid
}