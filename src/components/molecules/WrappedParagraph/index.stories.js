import React from 'react';
import { storiesOf } from '@kadira/storybook';
import WrappedParagraph from './index';

storiesOf('WrappedParagraph', module)
	.add('default hover and click', () => (
		<WrappedParagraph>Hello this is a paragraph</WrappedParagraph>
	))
	.add('custom hover and click', () => (
		<WrappedParagraph
			color="orange"
			hoverColor="red"
			clickedColor="green"
			hoverBackground="white"
			clickedBackground="black"
			background="green"
		>Hello this is a paragraph
		</WrappedParagraph>
	));
