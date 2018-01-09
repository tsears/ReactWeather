export function cardinalFromAngle (angle) {
  angle = angle | ''

  if (isNaN(parseFloat(angle))) {
    throw new Error('Invalid Argument. Must be a number')
  }

  if (angle < 0 || angle > 360) {
    throw new Error('Invalid Argument. Must be between 0 and 360')
  }

  if (angle > 0 && angle <= 11.25) {
    return 'N'
  } else if (angle > 11.25 && angle <= 33.75) {
    return 'NNE'
  } else if (angle > 33.75 && angle <= 56.25) {
    return 'NE'
  } else if (angle > 56.25 && angle <= 78.75) {
    return 'ENE'
  } else if (angle > 78.75 && angle <= 101.25) {
    return 'E'
  } else if (angle > 101.25 && angle <= 123.75) {
    return 'ESE'
  } else if (angle > 123.75 && angle <= 146.25) {
    return 'SE'
  } else if (angle > 146.25 && angle <= 168.75) {
    return 'SSE'
  } else if (angle > 168.75 && angle <= 191.25) {
    return 'S'
  } else if (angle > 191.25 && angle <= 213.75) {
    return 'SSW'
  } else if (angle > 213.75 && angle <= 236.25) {
    return 'SW'
  } else if (angle > 236.25 && angle <= 258.75) {
    return 'WSW'
  } else if (angle > 258.75 && angle <= 281.25) {
    return 'W'
  } else if (angle > 281.25 && angle <= 303.75) {
    return 'WNW'
  } else if (angle > 303.75 && angle <= 326.25) {
    return 'NW'
  } else if (angle > 326.25 && angle <= 348.75) {
    return 'NNW'
  } else if (angle > 348.75 && angle <= 360) {
    return 'N'
  } else {
    return '-'
  }
}
