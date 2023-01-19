// Convert data to array options for a select field
export const toOptions = (data, key) => {
  const options = []
  data.forEach((element) => {
    options.push({
      value: element[key.value],
      text: element[key.text]
    })
  })
  return options
}

// String UpperCase
export const upperCase = (string) => {
  return string.toUpperCase()
}

// String UpperCase
export const captalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
