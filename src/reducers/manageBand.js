export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {
        id: Math.random(),
        name: action.name
      }

      return { ...state, bands: [...state.bands, band] };
    case 'DELETE_BAND':
      return {...state, bands: state.bands.filter(({ id }) => id != action.id) }

    default:
      return state;
  }
};