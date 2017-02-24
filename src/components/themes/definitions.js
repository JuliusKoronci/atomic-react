import { css } from 'styled-components';
import getProp from './getProp';
import { color, background, padding as paddingDef } from './default';
import { PropTypes } from 'react';

/*eslint-disable */

export const textElement = props => css`
	color: ${props.color || color.base};
    background-color: ${props.background || background.base};
`;

export const textElementHover = props => css`
	color: ${props.hoverColor || props.color || color.red};
    background-color: ${props.hoverBackground || props.background || background.base};
`;

export const textElementClicked = props => css`
	color: ${props.clickedColor || props.color || color.red};
    background-color: ${props.clickedBackground || props.background || background.base};
`;

export const padding = props => css`
	${props.padding && `padding: ${props.paddingValue || paddingDef.base}`};
	${props.paddingLeft && `padding-left: ${props.paddingValue || paddingDef.base}`};
	${props.paddingRight && `padding-right: ${props.paddingValue || paddingDef.base}`};
	${props.paddingTop && `padding-top: ${props.paddingValue || paddingDef.base}`};
	${props.paddingBottom && `padding-bottom: ${props.paddingValue || paddingDef.base}`};
`;

export const textElementPropTypes = {
	color: PropTypes.string,
	background: PropTypes.string,
};

export const borderProps = props => css`
  ${props.borderBottom && `border-bottom: ${props.borderWidth || '1px'} solid ${color.border}`};
  ${props.borderTop && `border-top: ${props.borderWidth || '1px'} solid ${color.border}`};
  ${props.borderLeft && `border-left: ${props.borderWidth || '1px'} solid ${color.border}`};
  ${props.borderRight && `border-right: ${props.borderWidth || '1px'} solid ${color.border}`};
`;