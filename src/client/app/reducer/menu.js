const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_MENU_REQUEST':
			return 'loading...'
		case 'LOAD_MENU_SUCCESS':
			return action.data
		case 'LOAD_MENU_FAILURE':
			return 'someting went wrong'
		default:
			return state
	}
}
