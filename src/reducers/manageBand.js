import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, { name: action.name, id: uuid() }] }

    case 'DELETE_BAND':
      const newBands = state.bands.filter(band => band != action.name)
      return {...state, bands: newBands }

    default:
      return state;
  }
};
