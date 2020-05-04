import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
import Welcome from './containers/Welcome'

export default class App extends Component {
	render() {
		return (
			<div>
				<Welcome/>
				<hr/>
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
