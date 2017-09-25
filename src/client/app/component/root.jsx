import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, browserHistory, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from 'store/configure-store'

// animate.css
import 'animate.css/animate.min.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-bootstrap/dist/react-bootstrap.min.js'

// jquery
import $ from 'jquery'

// custom
import 'styles/custom.scss'

import AppContainer from 'component/container/app'

// import PageNotFound from 'component/present/page-not-found'

export default class Root extends React.Component {

	componentDidMount() {
		// nothing
	}

	render() {
		return (
			<Provider store={configureStore()} key='provider'>
				<Router history={browserHistory}>
					<Switch>
						<Redirect exact from='/' to='/home' />
						<Route path='/home' component={AppContainer} />
						{/* <Route component={PageNotFound} /> */}
					</Switch>
				</Router>
			</Provider>
		)
	}
}
