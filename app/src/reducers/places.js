const initialState = [
  {
    name: 'Cali'
  },
  {
    name: 'Vancouver'
  }
]

const places = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return [
        ...action.places
      ]
    default:
      return state
  }
}

export default places
