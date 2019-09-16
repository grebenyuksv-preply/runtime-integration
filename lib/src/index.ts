console.log('Lib -> Static');

export const run = (x, y) =>
	import('lodash').then(({ map }) =>
		console.log('Lib -> Dynamic', map([1, 2, 3, 4, 5], x => x * x)),
	);
