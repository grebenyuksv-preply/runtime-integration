console.log('Lib -> Static');

export const run = () => {
	import(/* webpackChunkName: "lodash" */ 'lodash').then(({ map }) => {
		// const { map } = require('lodash');
		console.log('Lib -> Dynamic', map([1, 2, 3, 4, 5], x => x * x));
	});
};

// (window as any).__PREPLY_LIB__ = {
// 	run,
// };
