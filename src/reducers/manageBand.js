export default function manageBand(
	state = {
		bands: []
	},
	action
) {
	switch (action.type) {
        case 'ADD_BAND':
        			const makeBand = {
						id: Math.random() * 10000000000000000,
						text: action.name
					};
					return { bands: state.bands.concat(makeBand) };
            // return { ...state, bands: [...state.bands, action.name] };
            
        case 'DELETE_BAND':
            console.log('Deleted Band');
            return { bands: state.bands.filter((band) => band.id !== action.bandId) };

		default:
			return state;
	}
}
