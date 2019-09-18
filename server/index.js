const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	const pickManifest = require('npm-pick-manifest');
	const fetch = require('isomorphic-fetch');

	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	fetch('https://0.0.0.0:4873/@preply/lib')
		.then(res => {
			return res.json();
		})
		.then(packument => {
			const manifest = pickManifest(packument, '^1.0.0');
			const version = manifest.version;
			// console.log(version);
			res.send({
				// manifest,
				version,
				url: 'http://localhost:8081/dist/shim.js',
			});
		});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
