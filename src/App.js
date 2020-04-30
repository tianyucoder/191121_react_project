import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './components/Person'

export default class App extends Component {
	render() {
		return (
			<div>
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
