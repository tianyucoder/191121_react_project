import React, { Component } from 'react'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
import {Switch,Route,Redirect} from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/admin" component={Admin}/>
				<Redirect to="login"/>
			</Switch>
		)
	}
}
