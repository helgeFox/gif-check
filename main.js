const readChunk = require('read-chunk');
const imageType = require('image-type');

module.exports = function (file) {
	const buffer = (readChunk.sync(file, 0, 12));
	return imageType(buffer);
}