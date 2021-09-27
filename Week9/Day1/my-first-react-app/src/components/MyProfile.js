import React, { Component } from 'react'

export default class MyProfile extends Component {
	state = {
		firstName: "Jordan",
		lastName: "Harris",
		City: "Tampa",
		profilePic: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
	}
	
	changeCity = () => {
		let newCity = "New York"
		this.setState({City : newCity})
	}

	render() {
		return (
			<div>
				<p>{this.state.firstName}</p>
				<p>{this.state.lastName}</p>
				<p>{this.state.City}</p>
				<img src = {this.state.profilePic}></img>
				<button onClick = {this.changeCity}>Change City</button>
			</div>
		)
	}
}
