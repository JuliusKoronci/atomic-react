// @flow

function getProp(props: Object, custom: string, theme: Array<any>, fallback: string = 'fallback'): string {
	if (props[custom]) {
		return props[custom];
	}
	let themeValue = props.theme;
	
	for (const key of theme) {
		if (!themeValue[key]) {
			themeValue = false;
			break;
		}
		themeValue = themeValue[key];
	}
	return typeof themeValue === 'string' && themeValue || fallback;
}

export default getProp;
