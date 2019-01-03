import React, { Component } from 'react';

export default class Products extends Component{
	render(){
		const { lists } = this.props;

		console.log(lists);
		return (
			<div>
				Products
			</div>
		)
	}
}

