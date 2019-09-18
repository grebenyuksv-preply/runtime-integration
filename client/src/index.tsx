import { default as fetch } from 'isomorphic-fetch';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

fetch('http://localhost:3000/')
	.then(res => {
		console.log(res.status);
		return res.json();
	})
	.then(manifest => {
		console.log(manifest);
		fetch(manifest.url)
			.then(res => res.text())
			.then(eval)
			.then(() => (window as any).__PREPLY_LIB__.run());
	});

// import { run } from '@preply/lib';

// run();

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<div>Root</div>, root);
