console.log('Lib -> Static');

export const run = async () => {
	let { map } = await import(/* webpackChunkName: "lodash" */ 'lodash');
	// const { map } = require('lodash');
	console.log('Lib -> Dynamic Latest', map([5, 4, 3, 2, 1], x => x * x));
	return 100500;
};
