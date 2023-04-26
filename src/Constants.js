const endPoints = Object.freeze({
  Issue: {
    GET: '/issues'
  },
  Label: {
    GET: '/labels',
    POST: '/labels'
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
