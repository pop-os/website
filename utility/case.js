import camelCase from 'lodash/camelCase'
import isPlainObject from 'lodash/isPlainObject'

export function camelCaseDeep (obj) {
  if (Array.isArray(obj)) {
    return obj.map(camelCaseDeep)
  }

  const out = {}

  // Recursive protection.
  if (isPlainObject(obj) === false) {
    return obj
  }

  for (const key in obj) {
    const newKey = camelCase(key)

    if (isPlainObject(obj[key])) {
      out[newKey] = camelCaseDeep(obj[key])
    } else if (Array.isArray(obj[key])) {
      out[newKey] = obj[key].map(camelCaseDeep)
    } else {
      out[newKey] = obj[key]
    }
  }

  return out
}
