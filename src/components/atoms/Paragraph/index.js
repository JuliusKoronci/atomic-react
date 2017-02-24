import styled from 'styled-components';
import { textElement, textElementPropTypes } from 'components/themes/definitions';

const Paragraph = styled.p`
	${textElement}
`;

Paragraph.propTypes = {
	...textElementPropTypes,
};

export default Paragraph;
