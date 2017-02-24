// @flow
import React, { Component, PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

class Button extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		hoverClass: PropTypes.string,
	};
	
	static defaultProps = {
		className: '',
		hoverClass: '',
	};
	
	state = {
		toggle: false,
		hovered: '',
	};
	
	_handleOnClick = () => {
		this.setState({ toggle: !this.state.toggle });
	};
	
	_handleMouseIn = (hovered: string) => {
		this.setState({ hovered });
	};
	_handleMouseOut = () => {
		this.setState({ hovered: '' });
	};
	
	_getClassName = (className: string) => {
		return `${className} ${this.state.hovered}`;
	};
	
	render() {
		const { children, className, hoverClass, ...args } = this.props;
		const mergedStyles = css`
			'font-family': ${font('primary')};
			'color': ${palette('primary', 0, true)};
			'background-color': red;
		`;
		const StyledButton = styled.button`${mergedStyles}`;
		
		return (
			<StyledButton
				className={this._getClassName(className)}
				onClick={this._handleOnClick} {...args}
				onMouseEnter={this._handleMouseIn.bind(null, hoverClass)}
				onMouseLeave={this._handleMouseOut}
			>
				{children} wgw
			</StyledButton>
		);
	}
}

export default Button;
