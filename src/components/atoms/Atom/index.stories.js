import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Atom from './index';

storiesOf('Atom', module)
	.add('default', () => (
		<Atom>Hello</Atom>
	))
	.add('with color', () => (
		<Atom color="green">Hello</Atom>
	))
	.add('with background and color', () => (
		<Atom background="green" color="white">Hello</Atom>
	));
