import styled from 'styled-components';
import { textElement, textElementPropTypes, padding } from 'components/themes/definitions';

const Button = styled.button`
	${textElement}
	${padding}
`;

Button.propTypes = {
	...textElementPropTypes,
};

export default Button;
