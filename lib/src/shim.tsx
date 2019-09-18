// export const shim = async () => {
// 	let { run } = await import(/* webpackChunkName: "lib" */ '.');
// 	return run();
// };

export const hello = () => console.log('hello');

import React, { FC } from 'react';

export const Widget: FC = () => <div>Widget!!!</div>;

export const loadWidget: () => Promise<FC> = () => Promise.resolve(Widget);

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
// 			.then(console.log);
// 		// .then(() => (window as any).__PREPLY_LIB__.run().then(console.log));
// 	});

// (window as any).__PREPLY_LIB__ = {
// 	shim,
// };
