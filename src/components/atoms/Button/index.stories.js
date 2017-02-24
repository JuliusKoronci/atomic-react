import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
	.add('default', () => (
		<Button padding paddingValue="20px">Hello</Button>
	));
