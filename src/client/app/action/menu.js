import fetch from 'isomorphic-fetch'

import {
	MENU_ENDPOINT
} from 'config/api-endpoints'

export const loadMenu = () => {
	return (dispatch) => {

		dispatch({
			type: 'LOAD_MENU_REQUEST'
		})

		fetch(MENU_ENDPOINT)
			.then((response) => response.json())
			.then(
			(data) => dispatch({
				type: 'LOAD_MENU_SUCCESS',
				data: data
			}),
			(error) => dispatch({
				type: 'LOAD_MENU_FAILURE'
			})
			)
	}
}
