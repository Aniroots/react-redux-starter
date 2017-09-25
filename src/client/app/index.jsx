import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from 'component/root'

const rootEl = document.getElementById('app-container')

render(
	<AppContainer>
		<Root />
	</AppContainer>,
	rootEl
)

if (module.hot) {
	module.hot.accept('component/root', () => {
		const NextRootApp = require('component/root').default

		render(
			<AppContainer>
				<NextRootApp />
			</AppContainer>,
			rootEl
		);
	});
}
