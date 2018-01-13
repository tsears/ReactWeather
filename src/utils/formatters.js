
export function isUndefined (val) {
  return typeof val === 'undefined'
}

export function isDefined (val) {
  return !isUndefined(val)
}

export function isNull (val) {
  return val === null
}

export function isNotNull (val) {
  return !isNull(val)
}

export function isNullOrUndefined (val) {
  return isNull(val) || isUndefined(val)
}

export function isNotNullOrUndefined (val) {
  return !isNullOrUndefined(val)
}

export function isZero (val) {
  return val === 0
}

export function percent (val) {
  return isNotNullOrUndefined(val)
    ? Math.round(val * 100) + '%'
    : ''
}

export function temperature (val) {
  return isNotNullOrUndefined(val)
    ? Math.round(val) + '°'
    : ''
}

export function distance (unit, val) {
  return isNotNullOrUndefined(val)
    ? `${Math.round(val)} ${unit}`
    : ''
}

export function unitsPerTime (unit, time, val) {
  return isNotNullOrUndefined(val)
    ? val <= 0.01
      ? `less than 0.01 ${unit} per ${time}`
      : `${val.toFixed(2)} ${unit} per ${time}`
    : ''
}

export function speedAndDirection (unit, val, direction) {
  return isNotNullOrUndefined(val)
    ? val !== 0
      ? `${Math.round(val)}${unit} ${direction}`
      : 'None'
    : ''
}

export function shortTime (val) {
  return isNotNullOrUndefined(val) && !Number.isNaN(val)
    ? new Date(val).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    : ''
}

export function metricAroundTime (formatter, val, time) {
  return isNotNullOrUndefined(val) && isNotNullOrUndefined(time) && !Number.isNaN(time)
    ? `${formatter(val)} around ${shortTime(time)}`
    : ''
}

export const distanceInMiles = distance.bind(null, 'miles')
export const inchesPerHour = unitsPerTime.bind(null, 'inch', 'hour')
export const mphInDirection = speedAndDirection.bind(null, 'mph')
