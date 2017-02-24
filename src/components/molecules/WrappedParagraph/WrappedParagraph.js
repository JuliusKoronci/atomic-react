// @flow weak
import React, { Component, PropTypes } from 'react';
import { textElementPropTypes, textElementHover, textElementClicked } from 'components/themes/definitions';
import styled from 'styled-components';
import { Paragraph } from 'components';

class WrappedParagraph extends Component {
	static propTypes = {
		children: PropTypes.node,
		...textElementPropTypes,
	};
	
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			'hover': false,
			'clicked': false,
		};
	}
	
	_renderClicked() {
		return styled(Paragraph)`${textElementClicked}`;
	}
	
	_renderHovered() {
		return styled(Paragraph)`${textElementHover}`;
	}
	
	render() {
		const { hover, clicked } = this.state;
		const Element = hover && this._renderHovered() || clicked && this._renderClicked() || Paragraph;
		return (
			<Element
				{...this.props}
				onMouseEnter={() => this.setState({ 'hover': true })}
				onMouseLeave={() => this.setState({ 'hover': false })}
				onClick={() => this.setState({ 'clicked': true })}
			/>
		);
	}
}

export default WrappedParagraph;
