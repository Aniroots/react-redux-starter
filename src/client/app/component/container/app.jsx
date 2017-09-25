import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import App from 'component/present/app'

import { loadMenu } from 'action/menu'

export class AppContainer extends React.Component {

	onReloadPages() {
		this.props.onLoadMenu()
	}

	shouldComponentUpdate(nextProps) {
		return (
			this.props.match !== nextProps.match ||
			this.props.location !== nextProps.location ||
			this.props.test !== nextProps.test
		);
	}

	componentDidMount() {
		this.onReloadPages()
	}

	render() {
		return (
			<App
				match={this.props.match}
				location={this.props.location}
				test={this.props.test}
				onReloadPages={this.onReloadPages}
			/>
		)
	}
}


const mapStateToProps = (state) => ({
	test: state.menu
})

const mapDispatchToProps = (dispatch) => ({
	onLoadMenu() {
		dispatch(loadMenu())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer)
