// @flow
import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themes/default';

const App = ({ children }: {children: Object}) => {
	return (
		<ThemeProvider theme={theme}>
			{React.cloneElement(children, {theme})}
		</ThemeProvider>
	);
};

App.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};


export default App;
