import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {

    case 'ADD_BAND':
      const band = { name: action.name, id: uuid() }
      return { bands: state.bands.concat(band) }

    case 'DELETE_BAND':
      const bandId = action.id
      return { bands: state.bands.filter(band => band.id !== bandId)}

    default:
      return state;
  }
};
