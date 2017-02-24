import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Paragraph from './index';

storiesOf('Paragraph', module)
	.add('default', () => (
		<Paragraph>Hello</Paragraph>
	))
	.add('font color', () => (
		<Paragraph color="red" reverse>Hello from Paragraph</Paragraph>
	))
	.add('background color', () => (
		<Paragraph background="red" reverse>Hello from Paragraph</Paragraph>
	));
