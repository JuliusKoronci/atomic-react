import { reversePalette } from 'styled-theme/composer';

export const palette = {
	primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
	secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
	danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
	alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
	success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
	grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff'],
	white: ['#fff', '#fff', '#eee'],
};

export const color = {
	base: '#565656',
	border: 'black',
	green: 'green',
	red: 'red',
};

export const padding = {
	base: '5px',
};

export const border = {
	base: '1px',
};

export const background = {
	base: '',
	border: 'black',
};

export const reverse = reversePalette(palette);

export const fonts = {
	primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
	pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
	quote: 'Georgia, serif',
};


const theme =
	{
		palette,
		fonts,
		background,
		padding,
		reversePalette: reverse,
	};

export default theme;