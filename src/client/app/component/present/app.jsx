import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from 'component/present/home'
import Menu from 'component/present/menu'

const App = ({ match, location, test }) => {
	return (
		<div>
			{(Array.isArray(test) && test.length > 0) ? test[0].detail : test}
			<Switch>
				<Route exact path={`${match.url}`} component={Home} />
				<Route render={() => (
					<div className="app-content">
						<div className="main-content">
							<Switch>
								<Route path={`${match.url}/menu`} component={Menu} />
								<Route render={() => (
									<Redirect to="/404" />
								)} />
							</Switch>
						</div>
					</div>
				)} />
			</Switch>
		</div>
	)
}

export default App
