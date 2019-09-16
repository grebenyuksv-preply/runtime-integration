console.log('Lib -> Static');

import('lodash').then(({ default: _ }) =>
	console.log('Lib -> Dynamic', _.map([1, 2, 3, 4, 5], x => x * x)),
);
