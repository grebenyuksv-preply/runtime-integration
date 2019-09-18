export default function(duration) {
	return function(...res) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(...res);
			}, duration);
		});
	};
}
