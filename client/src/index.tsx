import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import delay from './delay';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { hello } from '@preply/lib';

hello();

// console.log((window as any).__PREPLY_LIB__);

// shim().then(console.log);

const root = document.createElement('div');
document.body.appendChild(root);

const LoadableWidget = Loadable({
	loader: () =>
		import('@preply/lib')
			.then(({ loadWidget }) => loadWidget())
			.then(delay(1000)),
	loading: (...args) => <div>Loading: {JSON.stringify(args)}</div>,
});

ReactDOM.render(
	<div>
		Root
		<LoadableWidget />
	</div>,
	root,
);

// fetch('http://localhost:3000/')
// 	.then(res => {
// 		console.log(res.status);
// 		return res.json();
// 	})
// 	.then(manifest => {
// 		console.log(manifest);
// 		fetch(manifest.url)
// 			.then(res => res.text())
// 			.then(eval)
// 			.then(() => (window as any).__PREPLY_LIB__.hello());
// 		// .then(() => (window as any).__PREPLY_LIB__.run().then(console.log));
// 	});

// setTimeout(() => { (window as any).__PREPLY_LIB__.run().then(console.log) }, 2000);
