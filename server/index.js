const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// const allowedOrigins = [
// 	/*'https://preply.com'*/
// ];

// app.use(
// 	cors({
// 		origin: (origin, callback) => {
// 			// allow requests with no origin
// 			// (like mobile apps or curl requests)
// 			if (!origin) return callback(null, true);
// 			console.log('origin');
// 			if (allowedOrigins.indexOf(origin) === -1) {
// 				const msg =
// 					'The CORS policy for this site does not ' +
// 					'allow access from the specified Origin.';
// 				return callback(new Error(msg), false);
// 			}
// 			return callback(null, true);
// 		},
// 	}),
// );

app.get('/', (req, res) => {
	const pickManifest = require('npm-pick-manifest');
	const fetch = require('isomorphic-fetch');

	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

	fetch('https://0.0.0.0:443/@preply/lib')
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
				URL: 'http://localhost:8081/dist/index/index.js',
			});
		});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
