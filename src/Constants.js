const endPoints = Object.freeze({
  Issue: {
    Get: '/data-sources/issues.json'
  },
  Label: {
    Get: '/data-sources/labels.json'
  }
})

const colors = Object.freeze({
  Label: [
    '#0075CA',
    '#A2EEEF',
    '#BFDADC',
    '#D876E3',
    '#E4E669',
    '#B8BBBE',
  ]
})

const $K = Object.freeze({
  EndPoints: endPoints
})

export default $K
