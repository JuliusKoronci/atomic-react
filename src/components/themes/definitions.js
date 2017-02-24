import { css } from 'styled-components';
import getProp from './getProp';
import { color, background } from './default';
import { PropTypes } from 'react';

/*eslint-disable */

export const textElement = props => css`
	color: ${props.color || color.base};
    background-color: ${props.background || background.base};
`;

export const textElementPropTypes = {
	color: PropTypes.string,
	background: PropTypes.string,
};

export const borderProps = props => css`
  ${props.borderBottom && `
        border-bottom: ${props => getProp(props, 'borderBottomValue', ['common', 'border', 0], '1px solid black')}
	`};
  ${props.borderTop && `border-top: ${props.borderWidth || '1px'} solid ${color.border}`};
  ${props.borderLeft && `border-left: ${props.borderWidth || '1px'} solid ${color.border}`};
  ${props.borderRight && `border-right: ${props.borderWidth || '1px'} solid ${color.border}`};
`;