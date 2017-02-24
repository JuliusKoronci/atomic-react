import styled from 'styled-components';
import { textElement, textElementPropTypes } from 'components/themes/definitions';

const Atom = styled.span`
	${textElement}
`;

Atom.propTypes = {
	...textElementPropTypes,
};

export default Atom;
