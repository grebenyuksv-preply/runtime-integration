// Identity loader with SourceMap support
module.exports = function(source, map) {
	return `module.exports = window.__PREPLY_LIB__`;
	console.log(source);
	return source;
};
