import React, { Component } from 'react'

export default class Card extends Component {
	state = {
		flip: false
	}
	
	flipImage = () => {
		this.setState({
			flip: !this.state.flip,
		})
	}
	
	
	
	
	render() {
		const {name, id, hp, sprites} = this.props.pokemon;
		const {flip} = this.state
		return (
			<div className= "cardInfo">
				<img src={flip ? sprites.back : sprites.front} alt=""/>
				
				<p>{name}</p>
				<p>{id}</p>
				<p>{hp}</p>
				<button onClick={this.flipImage}>Flip</button>
				<button onClick={this.deleteImage}>Delete</button>
				
			</div>
		)
	}
}
