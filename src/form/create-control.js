export default function (config, validation) {
  return {
    ...config,
    validation,
    touched: false,
    valid: !validation,
    value: ''
  }
}